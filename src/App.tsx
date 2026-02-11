//App.tsx
import React, { useState } from "react";
import "./css/App.css";
import "./css/Tasks.css";
import "./css/main.css";
import { Route, Routes } from "react-router-dom";
import DashboardPage from "./components/DashboardPage";
import CallbackPage from "./components/CallbackPage";
import ProtectedPage from "./authentication/ProtectedPage";
import { useAuth0 } from "@auth0/auth0-react";
import { createAuthenticationGuard } from "./authentication/AuthenticationGuard";
import CreateTask from "./components/CreateTask";
import EditTask from "./components/EditTask";
import Tasklist from "./components/TaskList";
import type { Task } from "./models/Task.model";
import DetailsDisplay from "./components/DetailsDisplay";

const ProtectedPageGuard = createAuthenticationGuard(ProtectedPage);

const App: React.FC = () => {
  const { isLoading } = useAuth0();
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleAddTask = (task: Task) => {
    setTasks((prev) => [...prev, task]);
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <Routes>
      <Route path="/" element={<DashboardPage />} />
      <Route
        path="/add-task"
        element={<CreateTask onAddTask={handleAddTask} />}
      />
      <Route path="/edit-task" element={<EditTask />} />
      <Route path="/display-task" element={<Tasklist tasks={tasks} />} />
      <Route
        path="/display-task/:taskId"
        element={<DetailsDisplay tasks={tasks} />}
      />
      <Route path="/protected" element={<ProtectedPageGuard />} />
      <Route path="/callback" element={<CallbackPage />} />
    </Routes>
  );
};

export default App;
