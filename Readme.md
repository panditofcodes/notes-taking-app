# Notes Taking App - MERN Stack

Welcome to the Notes Taking App, a web application built using the MERN (MongoDB, Express.js, React, Node.js) stack. This app allows users to efficiently manage their notes, with features such as creating, editing, deleting, moving to the bin, restoring from the bin, and permanently deleting notes. Whether you're jotting down ideas, making to-do lists, or organizing your thoughts, this app has you covered.
![Adobe_Express_20230816_0118260_1](https://github.com/panditofcodes/notes-taking-app/assets/74832139/dba5c222-b36b-4387-89d9-5beb7253dfe1)

**Check this app here:** https://strange-clam-slippers.cyclic.cloud/

## Features

- **User Authentication**: Securely register and log in to your account to start taking notes.
- **Create Notes**: Write down your thoughts, ideas, or any important information you want to remember.
- **Edit Notes**: Modify your notes whenever you need to make changes.
- **Delete Notes**: Permanently remove notes that you no longer need.
- **Bin Functionality**: Move notes to the bin if you want to temporarily remove them from your main notes list.
- **Restore Notes**: Retrieve notes from the bin and restore them to your main notes list.
- **Permanently Delete**: Empty the bin to permanently delete notes you no longer want to keep.
- **Responsive Design**: Enjoy a seamless experience on both desktop and mobile devices.

## Getting Started

To run the Notes Taking App on your local machine, follow these steps:

### Prerequisites

- Node.js and npm: Make sure you have Node.js and npm (Node Package Manager) installed on your system.

### Installation

1. Clone the repository to your local machine using:

```bash
git clone https://github.com/your-username/notes-taking-app.git
```

2. Navigate to the project directory:

```bash
cd notes-taking-app
```

3. Navigate to `backend` and install server dependencies:

```bash
npm install
```

4. Navigate to the `frontend` directory:

```bash
cd client
```

5. Install client dependencies:

```bash
npm install
```

### Configuration

1. Create a `.env` file in the root of the project and add the following environment variables:

```env
MONGO_URI=your_mongodb_connection_string
```

Replace `your_mongodb_connection_string` with your MongoDB database connection string and `your_secret_key` with a secret key for JWT token generation.

### Running the App

1. Back to the project root, start the server:

```bash
npm start
```

2. In a new terminal window, navigate to the `frontend` directory:

```bash
cd client
```

3. Start the client:

```bash
npm start
```

The app should now be running locally. Open your web browser and go to `http://localhost:3000` to access the app.

Technologies Used
Frontend:

React
CSS (for styling)
Backend:

Node.js
Express.js
MongoDB 
Deployment (Optional):

Cyclic or any other

Contributing
Contributions are welcome! If you'd like to contribute to the project, please follow these steps:

Fork the repository.
Create a new branch for your feature or bug fix.
Make your changes and commit them with descriptive commit messages.
Push your changes to your fork.
Create a pull request detailing your changes.
