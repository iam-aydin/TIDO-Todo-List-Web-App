require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const { saveTask, deleteTask, checkTask } = require("./functions");
const port = process.env.PORT;
const fs = require('fs');
const csv = require('fast-csv');
const langData = {};
const mongodb_atlas_password = process.env.atlas_password;
const uri = "mongodb+srv://aydin:"+ mongodb_atlas_password +"@cluster0.mi7cyq5.mongodb.net";

// Parse the CSV file and store the records in the langData object
fs.createReadStream('languages.csv')
 .pipe(csv.parse({ headers: true }))
 .on('error', error => console.error(error))
 .on('data', row => {
    langData[row.ShortLang] = {
      Language: row.Language,
      TODO: row.TODO,
      Think: row.Think,
      MadeBy: row.MadeBy,
    };
 })
 .on('end', () => {
    console.log('CSV data parsed successfully');
 });
 
  
/* Example of tasks array's data :
   { id: 1, task: "Task 1", isChecked: false } */

// Connect to MongoDB
mongoose
  .connect( uri + "/tidoListDB")
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
  let costumeRoute = "en";
  const tasks = await Task.find();
  const languageRecord = langData[costumeRoute];
  console.log(languageRecord)
  res.render("index.ejs", { tasks, language: languageRecord});
});

app.get("/:costume_route", async (req, res) => {
  let costumeRoute = req.params.costume_route;
  const tasks = await Task.find();
  const languageRecord = langData[costumeRoute];
  console.log(languageRecord)
  if (!languageRecord) {
     // Handle case where the language code does not exist in the CSV data
     return res.status(404).send('Language not found');
  }
  // Define a list of right-to-left languages
  const rtlLanguages = ['ar', 'fa'];

  // Check if the current language is RTL
  const isRTL = rtlLanguages.includes(costumeRoute);

  // Choose the template based on whether the language is RTL
  const templateName = isRTL ? 'index-rtl' : 'index';

  res.render(`${templateName}.ejs`, { tasks, language: languageRecord });
});


app.get('/language/pick', (req, res) => {
  res.render('language-pick.ejs', { langData: langData });
});


app.post("/Tasks", (req, res) => saveTask(req, res, Task));
app.post("/delete", (req, res) => deleteTask(req, res, Task));
app.post("/check", (req, res) => checkTask(req, res, Task));
app.listen(port, () =>
  console.log(`Server running on http://localhost:${port}`)
);
