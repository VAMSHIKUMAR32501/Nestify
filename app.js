const express = require("express");
const mongoose = require("mongoose");

const app = express();
const MONGO_URL = "mongodb://127.0.0.1:27017/test";

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("✅ Connected to DB");
  })
  .catch((err) => {
    console.error("❌ DB Connection Error:", err);
  });

app.get("/", (req, res) => {
  res.send("Hi I am root");
});

app.listen(8080, () => {
  console.log("🚀 Server is listening on port 8080");
});
