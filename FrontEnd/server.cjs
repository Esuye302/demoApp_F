import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Basic route test!");
});

app.listen(3000, () => {
  console.log("Server running");
});
