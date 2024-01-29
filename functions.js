// Save a Task function
let nextId = 0;

function saveTask(req, res, tasks) {
  tasks.push({
    id: nextId++,
    text: req.body.addTask,
    isChecked: false,
  });
  res.redirect(302, "/");
}

function deleteTask(req, res, tasks) {
  const taskId = parseInt(req.body.taskId);
  if (!isNaN(taskId)) {
    const task = tasks.find((task) => task.id === taskId);
    if (task) {
      const taskIndex = tasks.indexOf(task);
      tasks.splice(taskIndex, 1);
    }
  }
  res.redirect(302, "/");
}

function checkTask(req, res, tasks) {
  const taskId = parseInt(req.body.taskId);
  if (!isNaN(taskId)) {
    const task = tasks.find((task) => task.id === taskId);
    if (task) {
      task.isChecked = !task.isChecked;
    }
  }
  res.redirect(302, "/");
}

module.exports = { saveTask, deleteTask, checkTask };
