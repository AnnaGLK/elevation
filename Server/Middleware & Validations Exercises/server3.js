// app.js
const express = require("express");
const { body, param, validationResult } = require("express-validator");
const Ajv = require("ajv");

const app = express();
app.use(express.json());

/* ----------------------- In-memory Data ----------------------- */
let posts = [];      // { id, title, content, tags }
let comments = [];   // { id, postId, content, email }
let postIdSeq = 1;
let commentIdSeq = 1;

/* ----------------------- Middleware --------------------------- */
// Request/response logger with execution time
app.use((req, res, next) => {
  const start = process.hrtime.bigint();
  res.on("finish", () => {
    const end = process.hrtime.bigint();
    const ms = Number(end - start) / 1e6;
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl} -> ${res.statusCode} (${ms.toFixed(1)}ms)`);
  });
  next();
});

// Rate limit (10 req / IP / minute)
const buckets = new Map(); // ip -> { count, windowStart }
const LIMIT = 10;
const WINDOW_MS = 60_000;
app.use((req, res, next) => {
  const ip = req.ip || req.connection.remoteAddress || "unknown";
  const now = Date.now();
  const entry = buckets.get(ip) || { count: 0, windowStart: now };
  if (now - entry.windowStart >= WINDOW_MS) {
    entry.count = 0;
    entry.windowStart = now;
  }
  entry.count += 1;
  buckets.set(ip, entry);
  if (entry.count > LIMIT) {
    return res.status(429).json({
      success: false,
      error: { message: "Rate limit exceeded. Try again later." }
    });
  }
  next();
});

// Content-Type validation for POST/PUT
app.use((req, res, next) => {
  if ((req.method === "POST" || req.method === "PUT")) {
    if (!req.is("application/json")) {
      return res.status(415).json({
        success: false,
        error: { message: "Unsupported Media Type. Use application/json." }
      });
    }
  }
  next();
});

// Response formatter helpers
app.use((req, res, next) => {
  res.success = (data, status = 200) => res.status(status).json({ success: true, data });
  res.fail = (status, message, details) =>
    res.status(status).json({ success: false, error: { message, details } });
  next();
});

/* ----------------------- AJV (Posts) -------------------------- */
const ajv = new Ajv({ allErrors: true, strict: false });

const postSchema = {
  type: "object",
  additionalProperties: true, // allow extra fields like "category" from your example
  required: ["title", "content", "tags"],
  properties: {
    title: { type: "string", minLength: 5, maxLength: 100 },
    content: { type: "string", minLength: 10, maxLength: 1000 },
    tags: {
      type: "array",
      minItems: 0,
      items: { type: "string" }
    }
  }
};

const validatePost = ajv.compile(postSchema);

/* ----------------------- Utilities ---------------------------- */
const handleValidation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.fail(400, "Validation error", errors.array());
  }
  next();
};

const findPostById = (id) => posts.find(p => p.id === id);

/* ----------------------- Routes ------------------------------- */
// POSTS
// POST /posts  (AJV validation)
app.post("/posts", (req, res) => {
  const valid = validatePost(req.body);
  if (!valid) {
    return res.fail(400, "Schema validation failed", validatePost.errors);
  }

  const { title, content, tags } = req.body;
  const newPost = { id: postIdSeq++, title, content, tags: Array.isArray(tags) ? tags : [] };
  posts.push(newPost);
  return res.success(newPost, 201);
});

// GET /posts (no validation)
app.get("/posts", (req, res) => {
  return res.success(posts);
});

// COMMENTS
// POST /posts/:postId/comments (express-validator + post exists check)
app.post(
  "/posts/:postId/comments",
  [
    param("postId").isInt({ min: 1 }).withMessage("postId must be a positive integer"),
    body("content").isString().isLength({ min: 5, max: 500 }).withMessage("content must be 5-500 chars"),
    body("email").isEmail().withMessage("email must be valid")
  ],
  handleValidation,
  (req, res) => {
    const postId = parseInt(req.params.postId, 10);
    const post = findPostById(postId);
    if (!post) {
      return res.fail(404, "Post not found");
    }

    const { content, email } = req.body;
    const newComment = { id: commentIdSeq++, postId, content, email };
    comments.push(newComment);
    return res.success(newComment, 201);
  }
);

// GET /posts/:postId/comments (ID validation only)
app.get(
  "/posts/:postId/comments",
  [param("postId").isInt({ min: 1 }).withMessage("postId must be a positive integer")],
  handleValidation,
  (req, res) => {
    const postId = parseInt(req.params.postId, 10);
    const list = comments.filter(c => c.postId === postId);
    return res.success(list);
  }
);

/* ----------------------- Error Handler ------------------------ */
app.use((err, req, res, next) => {
  console.error("Unhandled error:", err);
  if (res.headersSent) return next(err);
  return res.status(err.status || 500).json({
    success: false,
    error: { message: err.message || "Internal Server Error" }
  });
});

/* ----------------------- Start Server ------------------------- */
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`API running on http://localhost:${PORT}`);
});
