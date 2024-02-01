require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const { saveTask, deleteTask, checkTask } = require("./functions");
const port = process.env.PORT;

/* Example of tasks array's data :
   { id: 1, task: "Task 1", isChecked: false } */

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/tidoListDB")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Failed to connect to MongoDB", err));

// TODO-list items Schema
const todoItemsSchema = {
  id: Number,
  text: String,
  isChecked: Boolean,
};

// Task model
const Task = mongoose.model("Task", todoItemsSchema);

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

// get route
app.get("/", async (req, res) => {
  const tasks = await Task.find();
  res.render("index.ejs", { tasks });
});

app.get("/fa", async (req, res) => {
  const tasks = await Task.find();
  res.render("index-fa.ejs", { tasks });
});

app.post("/Tasks", (req, res) => saveTask(req, res, Task));
app.post("/delete", (req, res) => deleteTask(req, res, Task));
app.post("/check", (req, res) => checkTask(req, res, Task));
app.listen(port, () =>
  console.log(`Server running on http://localhost:${port}`)
);
