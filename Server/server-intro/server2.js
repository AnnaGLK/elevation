// Exercise 2
// Build a simple REST API server that manages a list of users.

// Create a server on port 3000
// Maintain an in-memory array of users (each user has id, name, email)
// Handle these endpoints:
// GET /api/users - Return all users as JSON
// GET /api/users/:id - Return specific user by ID
// POST /api/users - Add a new user (accept JSON data)
// Set appropriate Content-Type headers
// Handle invalid JSON with proper error responses
// Include basic error handling for missing users
// Sample user data to start with:

// let users = [
//   { id: 1, name: "John Doe", email: "john@example.com" },
//   { id: 2, name: "Jane Smith", email: "jane@example.com" }
// ];

const http = require("http");

const PORT = 3000;

// Sample user data
let users = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Smith", email: "jane@example.com" }
];

// Helper: Send JSON response
function sendJSON(res, statusCode, data) {
  res.writeHead(statusCode, { "Content-Type": "application/json" });
  res.end(JSON.stringify(data));
}

// Helper: Parse request body
function parseRequestBody(req) {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", chunk => {
      body += chunk.toString();
    });
    req.on("end", () => {
      try {
        const parsed = JSON.parse(body || "{}");
        resolve(parsed);
      } catch (err) {
        reject(err);
      }
    });
  });
}

const server = http.createServer(async (req, res) => {
  console.log(`${req.method} ${req.url}`);

  // GET /api/users - return all users
  if (req.method === "GET" && req.url === "/api/users") {
    return sendJSON(res, 200, users);
  }

  // GET /api/users/:id - return user by ID
  if (req.method === "GET" && req.url.startsWith("/api/users/")) {
    const id = parseInt(req.url.split("/")[3], 10);
    const user = users.find(u => u.id === id);

    if (user) {
      return sendJSON(res, 200, user);
    } else {
      return sendJSON(res, 404, { error: "User not found" });
    }
  }

  // POST /api/users - add a new user
  if (req.method === "POST" && req.url === "/api/users") {
    try {
      const body = await parseRequestBody(req);

      if (!body.name || !body.email) {
        return sendJSON(res, 400, { error: "Name and email are required" });
      }

      const newUser = {
        id: users.length ? users[users.length - 1].id + 1 : 1,
        name: body.name,
        email: body.email
      };

      users.push(newUser);
      return sendJSON(res, 201, newUser);
    } catch (err) {
      return sendJSON(res, 400, { error: "Invalid JSON" });
    }
  }

  // Default - Not found
  sendJSON(res, 404, { error: "Route not found" });
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
