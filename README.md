# Task Management App

## Overview

A React + TypeScript task management app with authentication, global state management, and task reporting. Uses Auth0 for login/logout and Context API for task state.

## Features

- User authentication (Auth0)
- Create, edit, delete tasks
- Global task state via Context API
- Task filtering and reporting
- Responsive UI with React Bootstrap
- Other features are described in the PROJECT_FEATURES.md file in the documentation folder.

## Architecture

- The PROJECT_ARCHITECTURE.md file in the documentation folder describes the architecture of the project.

## Implementation

- The PROJECT_IMPLEMENTATION.md file in the documetation folder describes the various implementation details of this project.

## Dependencies

- react (^19.2.0)
- react-dom (^19.2.0)
- react-router-dom (^7.13.0)
- @auth0/auth0-react (^2.13.0)
- react-bootstrap (^2.10.10)
- bootstrap (^5.3.8)
- axios (^1.13.5)
- vite (^7.3.1)
- typescript (~5.9.3)
- eslint (^9.39.1) and plugins

All dependencies are installed automatically with `npm install`.

## Setup & Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Heather-Rutherford/FE-Task-Management-App.git
   cd task-management-app-fe
   ```

2. Install dependencies:

   ```bash
   npm install
   npm install axios
   npm install react-router-dom
   npm install react-bootstrap bootstrap
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open the app in your browser at the port shown (e.g., http://localhost:5173 or http://localhost:5174).

## Folder Structure

- `public/` — Static assets (favicon, images, etc.)
- `src/` — Main source code
  - `assets/` — App-specific images and static files
  - `authentication/` — Auth0 authentication guards and login/logout components
  - `components/` — All React components
    - `Button.tsx` — Reusable button component
    - `CallbackPage.tsx` — Handles Auth0 callback
    - `CreateTask.tsx` — Task creation form
    - `DashboardPage.tsx` — Main dashboard view
    - `DetailsDisplay.tsx` — Task details view
    - `EditTask.tsx` — Edit task form
    - `NavBar.tsx` — Top navigation bar
    - `NavBarButtons.tsx` — Login/Logout buttons
    - `PageLayout.tsx` — Layout wrapper (includes sidebar)
    - `SideBar.tsx` — Sidebar navigation
    - `TaskList.tsx` — Task list and deletion
    - `TaskReport.tsx` — Task filtering/reporting
  - `css/` — CSS files for styling
    - `App.css`, `index.css`, `main.css`, `nav.css`, `Tasks.css`
  - `models/` — TypeScript models and context
    - `Task.model.tsx` — Task type/interface
    - `TaskContext.tsx` — Context API for global task state
  - `providers/` — Context and Auth0 providers
    - `Auth0Provider.tsx` — Auth0 authentication setup
  - `main.tsx` — App entry point
  - `App.tsx` — Root component, sets up providers and routes
- `README.md` — Project documentation
- `package.json` — Project dependencies and scripts
- `vite.config.ts` — Vite configuration
- `tsconfig.json` — TypeScript configuration

This structure helps organize code by feature and responsibility for easier maintenance and scalability.

## Context API Usage

- `TaskProvider` wraps your app in `App.tsx` to provide global task state
- Use `useTaskContext()` in components to access `tasks`, `addTask`, `updateTask`, `deleteTask`

## Authentication

- Auth0 is used for login/logout
- See `src/providers/Auth0Provider.tsx` for domain/clientId setup

## Adding/Deleting/Filtering Tasks

- Use `CreateTask` to add tasks (calls `addTask` from context)
- Use `TaskList` to view/delete tasks (calls `deleteTask` from context)
- Use `TaskReport` to filter tasks by status/priority

## Contribution Guidelines

- Fork the repo and create a feature branch
- Add clear code comments for new features
- Submit a pull request with a description of your changes

## License

N/A
