const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const app = express();
const port = 4000;
app.use(cors())
app.use(express.json());
const db = mysql.createConnection({
  password: "demoApp_f123",
  user: "demoApp_f",
  database: "demoApp_f",
  host: "localhost",
});
db.connect((err) => {
  if (err) {
    console.error("DB connection failed:", err.message);
  } else {
    console.log("✅ MySQL connected successfully!");
  }
});

app.post("/add-employee", (req, res) => {
  const { password, email, last_name, first_name } = req.body;

  const sql = `
  INSERT INTO employee_test (first_name, last_name, email, password)
  VALUES (?, ?, ?, ?)`;
  const values = [first_name, last_name, email, password];
  db.query(sql, values, (err, result) => {
    if (err) {
      console.error("❌ Insert failed:", err.message);
      return res.status(500).json({ error: "Database insert failed" });
    } else {
      console.log("✅ Data inserted! ID:", result.insertId);
      return res.status(201).json({ message: "Employee added successfully" });
    }
  });
});
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const sql = `SELECT * FROM employee_test WHERE email=? AND password=?`;
  const values = [email, password];
  db.query(sql, values, (err, result) => {
    if (err) return res.status(500).json({ error: "Database error" });

    if (result.length === 0) return res.status(400).json({ error: "invalid credintial" });
      
    return res
      .status(200)
      .json({ message: "Employee logged in successfully", user: result[0] });
  });
});

app.listen(port, () => {
  console.log("server connected successfully http://localhost:4000");
});
