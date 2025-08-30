const express = require("express");
const app = express();

app.use(express.json());

// --- Test data ---
const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" }
];

// --- Middleware: validateId ---
function validateId(req, res, next) {
  const id = req.params.id;
  if (isNaN(id)) {
    // Pass error to error handler
    const err = new Error("Invalid ID format");
    err.status = 400;
    return next(err);
  }
  next();
}

// --- Middleware: checkResourceExists ---
function checkResourceExists(req, res, next) {
  const id = parseInt(req.params.id);
  const user = users.find(u => u.id === id);
  if (!user) {
    const err = new Error("User not found");
    err.status = 404;
    return next(err);
  }
  req.user = user; // attach found user to request
  next();
}

// --- Routes ---
app.get("/users", (req, res) => {
  res.json(users);
});

app.get("/users/:id", validateId, checkResourceExists, (req, res) => {
  res.json(req.user);
});

app.post("/users", (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name || "Unnamed"
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

// --- Error handling middleware ---
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    error: err.message || "Internal Server Error"
  });
});

// --- Start server ---
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
