const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
let tasks = [];

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
   res.render('index.ejs', { tasks: tasks });
});

app.post('/Tasks', function (req, res) {
   tasks.push(req.body.addTask);
   console.log(tasks);
   res.redirect(302, '/');
});

app.post('/delete', function (req, res) {
   const taskIndex = parseInt(req.body.taskIndex);
   if (!isNaN(taskIndex)) {
       tasks.splice(taskIndex, 1);
   }
   res.redirect(302, '/');
});

app.listen(port, () => {
   console.log(`The server is running on port ${port}`);
});


 