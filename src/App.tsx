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
import ProfilePage from "./authentication/ProfilePage";

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
        <Route
          path="/profile"
          element={<AuthenticationGuard component={ProfilePage} />}
        />
        <Route path="/protected" element={<ProtectedPage />} />
        <Route path="/callback" element={<CallbackPage />} />
      </Routes>
    </TaskProvider>
  );
};

export default App;
