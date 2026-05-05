# Kanban Board

A lightweight Kanban board built with React and Vite. The app lets users add tasks, organize them by status, and move tasks between workflow columns.

## Features

- Add new tasks
- Automatically assigns new tasks to `ToDo`
- View tasks grouped by status:
  - ToDo
  - In Progress
  - Done
- Update a task’s status using a dropdown
- Shared task state using React Context
- Reusable custom hook for accessing task state

## Tech Stack

- React
- JavaScript
- Vite
- CSS
- React Context API

## Project Structure

```txt
src/
├── components/
│   ├── AddTask.jsx
│   └── Tasks.jsx
├── hooks/
│   └── useTasks.jsx
├── models/
│   └── TasksContext.jsx
├── App.jsx
├── App.css
├── index.css
└── main.jsx
