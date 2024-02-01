// Save a Task function
let nextId = 1;

function reDirect(req, res) {
  // Extract the referer from the request headers, defaulting to '/' if not present
  const { referer = '/' } = req.headers;
   
  // Determine the redirect path based on whether the referer includes '/fa'
  const redirectPath = referer.includes('/fa') ? '/fa' : '/';
   
  // Send a 302 redirect response to the client with the determined path
  res.redirect(302, redirectPath);
 }
 

function saveTask(req, res, Task) {
  let new_task = new Task({
    id: nextId++,
    text: req.body.addTask,
    isChecked: false,
  });
  new_task.save().then(() => console.log("Task saved!"));

  reDirect(req, res);
}

async function deleteTask(req, res, Task) {
  const taskId = parseInt(req.body.taskId);
  if (taskId) {
    try {
      await Task.deleteOne({ id: taskId });
      console.log("Task deleted successfully");
    } catch (err) {
      console.error("Error deleting task", err);
    }
  }
  reDirect(req, res);
}

async function checkTask(req, res, TaskModel) {
  const taskId = parseInt(req.body.taskId);
  if (taskId) {
    try {
      // Retrieve the task to get the current isChecked status
      const task = await TaskModel.findOne({ id: taskId });
      if (task) {
        // Toggle the isChecked status
        const newIsCheckedStatus = !task.isChecked;
        // Update the task with the new status
        await TaskModel.updateOne(
          { id: taskId },
          { $set: { isChecked: newIsCheckedStatus } }
        );
        console.log("Task checked status toggled successfully");
      } else {
        console.error("Task not found");
      }
    } catch (error) {
      console.error("Error toggling task checked status", error);
    }
  }

  reDirect(req, res);
}

module.exports = { saveTask, deleteTask, checkTask };
