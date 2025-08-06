// server.js
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

// Fix __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Initialize express
const app = express();

// Serve static files from dist folder
app.use(express.static(path.join(__dirname, "dist")));

// Handle all routes with index.html (React Router SPA)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

// Start server on port 80
app.listen(80, () => {
  console.log("🚀 Server running on http://localhost:80");
});
