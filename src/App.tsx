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
import TaskReport from "./components/TaskReport";

const ProtectedPageGuard = createAuthenticationGuard(ProtectedPage);
const CreateTaskGuard = createAuthenticationGuard(CreateTask);
const EditTaskGuard = createAuthenticationGuard(EditTask);
const TaskListGuard = createAuthenticationGuard(Tasklist);
const DetailsDisplayGuard = createAuthenticationGuard(DetailsDisplay);
const TaskReportGuard = createAuthenticationGuard(TaskReport);

const App: React.FC = () => {
  const { isLoading } = useAuth0();
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filters, setFilters] = useState({ status: "", priority: "" });

  const handleAddTask = (task: Task) => {
    setTasks((prev) => [...prev, task]);
  };

  const handleEditTask = (updatedTask: Task) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === updatedTask.id ? updatedTask : task)),
    );
  };

  const handleDelete = (taskId: number) => {
    setTasks((prev) => prev.filter((task) => task.id !== taskId));
  };

  const handleApplyFilters = (taskStatus: string, taskPriority: string) => {
    setFilters({ status: taskStatus, priority: taskPriority });
  };

  const handleClearFilters = () => {
    setFilters({ status: "", priority: "" });
  };

  const filteredTasks = tasks.filter((task) => {
    const statusMatch = filters.status ? task.status === filters.status : true;
    const priorityMatch = filters.priority
      ? task.priority === filters.priority
      : true;
    return statusMatch && priorityMatch;
  });

  if (isLoading) return <div>Loading...</div>;

  return (
    <Routes>
      <Route path="/" element={<DashboardPage />} />
      <Route
        path="/add-task"
        element={<CreateTaskGuard onAddTask={handleAddTask} />}
      />
      <Route
        path="/edit-task/:taskId"
        element={
          <EditTaskGuard
            onEditTask={handleEditTask}
            tasks={tasks}
            onDeleteTask={handleDelete}
          />
        }
      />
      <Route
        path="/display-task"
        element={<TaskListGuard tasks={tasks} onDeleteTask={handleDelete} />}
      />
      <Route
        path="/display-task/:taskId"
        element={
          <DetailsDisplayGuard tasks={tasks} onDeleteTask={handleDelete} />
        }
      />
      <Route
        path="/task-report"
        element={
          <TaskReportGuard
            tasks={filteredTasks}
            filters={filters}
            onApplyFilters={handleApplyFilters}
            onClearFilters={handleClearFilters}
          />
        }
      />
      <Route path="/protected" element={<ProtectedPageGuard />} />
      <Route path="/callback" element={<CallbackPage />} />
    </Routes>
  );
};

export default App;
