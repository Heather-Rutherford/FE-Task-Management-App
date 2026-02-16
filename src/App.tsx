//App.tsx
// React Router and other imports
import React from "react";
import { Route, Routes } from "react-router-dom";
// Authentication
import { useAuth0 } from "@auth0/auth0-react";
import AuthenticationGuard from "./authentication/AuthenticationGuard";
import ProtectedPage from "./authentication/ProtectedPage";
// Interfaces
import { TaskProvider } from "./models/TaskContext";
// CSS
import "./css/App.css";
import "./css/Tasks.css";
import "./css/main.css";
import "./css/management.css";
// Components
import DashboardPage from "./components/DashboardPage";
import CallbackPage from "./components/CallbackPage";
import CreateTask from "./components/CreateTask";
import EditTask from "./components/EditTask";
import Tasklist from "./components/TaskList";
import DetailsDisplay from "./components/DetailsDisplay";
import TaskReport from "./components/TaskReport";

// Tasks used to populate the app on first load.
// Stored in sessionStorage for persistence across reloads,
// but resets when the browser is closed. This allows users
// to see sample data without needing to add tasks manually,
// while still enabling them to manage their own tasks during their session.
// const predefinedTasks: Task[] = [
//   {
//     id: 1,
//     title: "Sample Task 1",
//     description: "This is a predefined task.",
//     dueDate: "2026-02-20",
//     priority: "High",
//     status: "in progress",
//   },
//   {
//     id: 2,
//     title: "Sample Task 2",
//     description: "Another predefined task.",
//     dueDate: "2026-02-25",
//     priority: "Medium",
//     status: "in progress",
//   },
//   {
//     id: 3,
//     title: "Sample Task 3",
//     description: "Yet another predefined task.",
//     dueDate: "2026-03-01",
//     priority: "Low",
//     status: "completed",
//   },
//   {
//     id: 4,
//     title: "Sample Task 4",
//     description: "Yet another predefined task.",
//     dueDate: "2026-03-01",
//     priority: "Low",
//     status: "completed",
//   },
//   {
//     id: 5,
//     title: "Sample Task 5",
//     description: "Yet another predefined task.",
//     dueDate: "2026-03-01",
//     priority: "Low",
//     status: "not started",
//   },
//   {
//     id: 6,
//     title: "Sample Task 6",
//     description: "Yet another predefined task.",
//     dueDate: "2026-03-01",
//     priority: "Low",
//     status: "not started",
//   },
// ];

const App: React.FC = () => {
  const { isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>;

  return (
    <TaskProvider>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route
          path="/add-task"
          element={<AuthenticationGuard component={CreateTask} />}
        />
        <Route
          path="/edit-task/:taskId"
          element={<AuthenticationGuard component={EditTask} />}
        />
        <Route
          path="/display-task"
          element={<AuthenticationGuard component={Tasklist} />}
        />
        <Route
          path="/display-task/:taskId"
          element={<AuthenticationGuard component={DetailsDisplay} />}
        />
        <Route
          path="/task-report"
          element={<AuthenticationGuard component={TaskReport} />}
        />
        <Route path="/protected" element={<ProtectedPage />} />
        <Route path="/callback" element={<CallbackPage />} />
      </Routes>
    </TaskProvider>
  );
};

export default App;
