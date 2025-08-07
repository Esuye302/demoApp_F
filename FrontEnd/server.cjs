// Import express and path modules.
const express = require("express");
const path = require("path");
// Create an express app.
const app = express();
// Serve the static files from the React app.
app.use(express.static(path.join(__dirname, "dist")));
console.log(path.join(__dirname, "dist"));
// Redirect every request to index.html
app.get(/(.*)/, function (req, res) {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});
// Listen to the default port 80
app.listen(80);

// Import express and path modules.
// const express = require("express");
// const path = require("path");
// // Create an express app.
// const app = express();
// // Serve the static files from the React app.
// app.use(express.static(path.join(__dirname, "dist")));
// // Redirect every request to index.html
// app.get("*", function (req, res) {
//   res.sendFile(path.join(__dirname, "dist", "index.html"));
// });
// // Listen to the default port 80
// app.listen(3000);
// server.js (or index.js)
// import express from "express";
// import path from "path";
// import { fileURLToPath } from "url";

// // Required for __dirname in ES modules
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const app = express();

// // Serve the static files from the dist directory
// app.use(express.static(path.join(__dirname, "dist")));
// console.log(path.join(__dirname, "dist"));
// // Redirect all non-API routes to index.html
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "dist", "index.html"));
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`✅ Server running at http://localhost:${PORT}`);
// });
