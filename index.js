//basic setup
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

//port settings
const port = process.env.PORT || 5000;

const coursesData = require("./coursesData.json");
const courseDetails = require("./courseDetails.json");

app.get("/", (req, res) => {
  res.send("now server is running");
});

app.get("/courses", (req, res) => {
  res.send(coursesData);
});

app.get("/courseDetails", (req, res) => {
  res.send(courseDetails);
});

app.get("/courseDetails/:id", (req, res) => {
  const id = req.params.id;
  const details = courseDetails.filter((data) => data.id == id);
  res.send(details);
});

app.listen(port, () => {
  console.log("server is running on port", port);
});
