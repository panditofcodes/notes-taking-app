# Notes Taking App - MERN

![Screenshot_20230816_010420_Chrome](https://github.com/panditofcodes/notes-taking-app/assets/74832139/8e68c395-8974-4f9f-a942-a787adfb3103)


Welcome to the Notes Taking App built using the MERN (MongoDB, Express.js, React, Node.js) stack! This application allows you to create, delete, restore, and move notes to bin, helping you stay organized and keep track of your important information.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [Creating a Note](#creating-a-note)
  - [Deleting a Note](#deleting-a-note)
  - [Restoring a Note](#restoring-a-note)
  - [Moving a Note](#moving-a-note)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The Notes Taking App is a full-stack web application that enables users to efficiently manage their notes. It provides a user-friendly interface to create, delete, restore, and move notes, ensuring that your thoughts and ideas are organized and easily accessible.

## Features

- Create new notes with titles and content.
- Delete notes permanently.
- Restore deleted notes from the trash.
- Move notes between different categories.

## Getting Started

Follow these steps to get the Notes Taking App up and running on your local machine.

### Prerequisites

- Node.js (v14 or later)
- MongoDB (running locally or accessible remotely)

### Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/your-username/notes-taking-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd notes-taking-app
   ```

3. Install server dependencies:

   ```bash
   npm install
   ```

4. Navigate to the `client` directory:

   ```bash
   cd client
   ```

5. Install client dependencies:

 
   npm install
  

6. Return to the project directory:

  
   cd ..
   

7. Create a `.env` file in the project root and set your MongoDB connection string:

 
   MONGODB_URI=your-mongodb-connection-string
   

8. Start the server and client concurrently:

   npm run dev


The Notes Taking App should now be accessible at `http://localhost:3000`.

## Usage

### Creating a Note

1. On the home page, click the "Create Note" button.
2. Enter a title and content for your note.
3. Choose a category for the note (if applicable).
4. Click the "Save" button to create the note.

### Deleting a Note

1. Navigate to the home page or a specific category.
2. Hover over the note you want to delete.
3. Click the "Delete" button (trash icon).
4. The note will be moved to the trash.

### Restoring a Note

1. Navigate to the "Trash" category.
2. Hover over the deleted note you want to restore.
3. Click the "Restore" button (circular arrow icon).
4. The note will be moved back to its original category.

### Moving a Note

1. Navigate to the home page or a specific category.
2. Hover over the note you want to move.
3. Click the "Move" button (folder icon).
4. Select a new category for the note from the dropdown menu.
5. The note will be moved to the selected category.

## Technologies Used

- Frontend: React.js, Redux
- Backend: Node.js, Express.js
- Database: MongoDB
- Styling: CSS, Material-UI

## Contributing

Contributions are welcome! If you'd like to contribute to the project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature/bugfix.
3. Make your changes and test them thoroughly.
4. Commit your changes with clear commit messages.
5. Push your changes to your forked repository.
6. Create a pull request explaining your changes.
