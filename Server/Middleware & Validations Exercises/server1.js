const express = require("express");
const app = express();

let totalRequests = 0;

// Middleware 1: Logger
app.use((req, res, next) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${req.method} ${req.url}`);
  next();
});

// Middleware 2: Request counter
app.use((req, res, next) => {
  totalRequests += 1;
  req.requestCount = totalRequests; // attach to request
  next();
});

// Routes
app.get("/", (req, res) => {
  res.json({ message: "Welcome!", requestCount: req.requestCount });
});

app.get("/about", (req, res) => {
  res.json({ message: "About page", requestCount: req.requestCount });
});

// Start server
const port = 1338;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
