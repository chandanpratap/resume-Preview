const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();

app.get("/api", (req, res) => {
  res.json({
    message: "welcome to the api",
  });
});

app.listen(3000, () => console.log("server started on port 5000"));
