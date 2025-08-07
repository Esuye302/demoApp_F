// Import express and path modules
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

// Convert ES6 module paths to __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create an express app
const app = express();

// Serve static files from the React build directory
app.use(express.static(path.join(__dirname, "dist")));

// Redirect every request to index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

// Listen on port 80
app.listen(80, () => {
  console.log("Server is running on port 80");
});

// // Import express and path modules.
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
// app.listen(80);
