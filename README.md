<div align="center">
<h1> TIDO - Todo List Web App Documentation </h1>
</div>

![Preview](/img/TIDO[1].png)
  
## Introduction

This document provides an overview of the alpha version of the TIDO Todo List Web App, a server-based application developed using Express.js, a widely-used Node.js framework. The application enables users to create tasks, add them to a list, and remove them as needed. It also supports multiple languages and has a right-to-left layout for certain languages.

**Note**: This is an alpha release of the TIDO Todo List Web App, which is intended for testing and feedback purposes only. The software is proprietary and is not licensed for public use. Unauthorized use, copying, distribution, or modification of this software is strictly prohibited.

## Getting Started

To run the TIDO Todo List Web App locally, follow these steps:

1. Clone the repository to your local machine.
2. Install the required dependencies by running `npm install`.
3. Set up environment variables in a `.env` file with the necessary credentials (e.g., `MONGODB_URI`).
4. Run the application with `node app.js`.

## Features

- **Multi-language Support**: The application supports multiple languages, with language data loaded from a CSV file.
- **Task Management**: Users can create, view, update, and delete tasks.
- **Right-to-Left Language Support**: The application supports right-to-left languages and adjusts the layout accordingly.

## Installation

1. Ensure you have Node.js and npm installed on your system.
2. Clone the repository: `git clone https://github.com/iam-aydin/TIDO-Todo-List-Web-App.git`
3. Navigate to the project directory: `cd TIDO-Todo-List-Web-App`
4. Install dependencies: `npm install`
5. Create a `.env` file with the required environment variables (`MONGODB_URI`).
6. Start the server: `node app.js`

## Usage

- Access the application at `http://localhost:<PORT>` (replace `<PORT>` with the actual port number).
- Use the `/language/pick` endpoint to select a language for the interface.
- Add new tasks via the main page or the `/Tasks` POST endpoint.
- Update tasks by checking or unchecking them through the `/check` POST endpoint.
- Delete tasks using the `/delete` POST endpoint.

## API Endpoints

- `GET /`: Retrieves all tasks and renders the index page with the default language (English).
- `GET /:costume_route`: Retrieves all tasks and renders the index page with the specified language route.
- `POST /Tasks`: Creates a new task.
- `POST /delete`: Deletes a task by its ID.
- `POST /check`: Updates the checked status of a task by its ID.

## Contributing

As this is an alpha release, contributions are currently not being accepted. Please monitor the repository for updates on when the beta version becomes available for contribution.

## License

The TIDO Todo List Web App is proprietary software. Unauthorized use, copying, distribution, or modification of this software is strictly prohibited.

## Contact

For any questions or issues, please open an issue on the GitHub repository or contact the maintainer directly.
