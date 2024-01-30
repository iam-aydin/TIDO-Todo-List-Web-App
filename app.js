require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const { saveTask, deleteTask, checkTask } = require("./functions");
const port = process.env.PORT;

/* Example of tasks array's data :
   { id: 1, task: "Task 1", isChecked: false } */
let tasks = [];

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/", (req, res) => res.render("index.ejs", { tasks }));

app.post("/tasks", (req, res) => saveTask(req, res, tasks));
app.post("/delete", (req, res) => deleteTask(req, res, tasks));
app.post("/check", (req, res) => checkTask(req, res, tasks));

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
