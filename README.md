<div align="center">
<h1> TIDO - Todo List Web App Documentation </h1>
<div align="center">
  <img src="/img/TIDO[1].png" alt="preview" width="600px">
  <br>
</div>
</div>
<h1> Introduction </h1>
This document provides an overview of a simple todo list web application developed using Express.js, a widely-used Node.js framework. The application enables users to create tasks, add them to a list, and remove them as needed.


<h1> Key Dependencies </h1>
The application leverages the following dependencies:
- **Express.js**: A robust web application framework for Node.js.
- **Body-parser**: A middleware tool used to parse the body of incoming requests and expose it on `req.body`.

<h1> Setting Up the Application </h1>
To set up the application, navigate to the project directory, install the necessary packages, and start the server. Here are the commands you need to run:

Also start mongod before running :
```shell
mongod
```

```shell
cd TIDO-Todo-List-Web-App
npm install
echo PORT=3000 > .env
node app.js
```
Once the server is running, you can access the application at http://localhost:3000.

<h1> Understanding the Routes </h1>
The application has three main routes:

1. **GET /**: This route displays the index page, which includes the current list of tasks.

2. **POST /Tasks**: This route handles the creation of new tasks. The task data is extracted from the request body.

3. **POST /delete**: This route manages the deletion of tasks. The index of the task to be removed is obtained from the request body.

4. **POST /check**: This route toggles the checked status of a task. The index of the task to be updated is obtained from the request body.

## Starting the Server
After setting up the application and defining the routes, the server begins listening on the specified port (in this case, port 3000).

Please note that this is a basic guide. For more complex applications, consider including additional sections like error handling procedures, database integration instructions, and so on.
