//basic setup
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

//port settings
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("now server is running");
});

app.listen(port, () => {
  console.log("server is running on port", port);
});
