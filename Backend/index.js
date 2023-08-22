const express = require("express");
const app = express();
require("dotenv").config();

const { connection } = require("./config/db");

app.get("/", (req, res) => {
  res.send("Welcome to food app");
});

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("Server is Connected");
  } catch (err) {
    console.log("Server is not Connected");
  }
  console.log(`server is running at 5000`);
});
