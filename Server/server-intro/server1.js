// Exercise 1
// Create a simple HTTP server that responds to different routes.

// Create a server that listens on port 3000
// Handle these routes:
// GET / - Return "Welcome to my server!"
// GET /about - Return "This is the about page"
// GET /contact - Return your contact information
// Any other route - Return "404 - Page not found" with status code 404
// Log each incoming request to the console with method and URL

// server.js
const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
  // Log method and URL
  console.log(`${req.method} ${req.url}`);

  // Set a default header
  res.setHeader("Content-Type", "text/plain");

  if (req.method === "GET") {
    switch (req.url) {
      case "/":
        res.statusCode = 200;
        res.end("Welcome to my server!");
        break;

      case "/about":
        res.statusCode = 200;
        res.end("This is the about page");
        break;

      case "/contact":
        res.statusCode = 200;
        res.end("Contact me at: your_email@example.com");
        break;

      default:
        res.statusCode = 404;
        res.end("404 - Page not found");
    }
  } else {
    res.statusCode = 405;
    res.end("Method Not Allowed");
  }
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
