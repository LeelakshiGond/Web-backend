const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hello good morning");
});
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Port connected on ${port}`);
});
