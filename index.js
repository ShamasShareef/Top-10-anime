require("dotenv").config()
const path = require("path");
const express = require("express");
const app = express();

app.use(express.static("client"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "index.html"));
});

const port = process.env.PORT || 9000;
app.listen(port, () => {
  console.log("Listening on port " + port);
});