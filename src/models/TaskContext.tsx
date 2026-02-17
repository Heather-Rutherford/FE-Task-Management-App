// TaskContext.tsx
// Provides global task state and actions via React Context API

import React, { createContext, useState, type ReactNode } from "react";
import type { Task } from "./Task.model";

// Predefined tasks for initial state
const predefinedTasks: Task[] = [
  {
    id: 1,
    title: "Sample Task 1",
    description: "This is a predefined task.",
    dueDate: "2026-02-20",
    priority: "High",
    status: "in progress",
  },
  {
    id: 2,
    title: "Sample Task 2",
    description: "Another predefined task.",
    dueDate: "2026-02-25",
    priority: "Medium",
    status: "in progress",
  },
  {
    id: 3,
    title: "Sample Task 3",
    description: "Yet another predefined task.",
    dueDate: "2026-03-01",
    priority: "Low",
    status: "completed",
  },
  {
    id: 4,
    title: "Sample Task 4",
    description: "Yet another predefined task.",
    dueDate: "2026-03-01",
    priority: "Low",
    status: "completed",
  },
  {
    id: 5,
    title: "Sample Task 5",
    description: "Yet another predefined task.",
    dueDate: "2026-03-01",
    priority: "Low",
    status: "not started",
  },
  {
    id: 6,
    title: "Sample Task 6",
    description: "Yet another predefined task.",
    dueDate: "2026-03-01",
    priority: "Low",
    status: "not started",
  },
];

// Context type: exposes tasks and task actions
// tasks: array of Task
// addTask: function to add a task
// updateTask: function to update a task
// deleteTask: function to delete a task

type TaskContextType = {
  tasks: Task[];
  addTask: (task: Task) => void;
  updateTask: (updatedTask: Task) => void;
  deleteTask: (taskId: number) => void;
};

// Create context
const TaskContext = createContext<TaskContextType | undefined>(undefined);

// Provider component: wraps app and provides task state/actions
export const TaskProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  // Global task state
  const [tasks, setTasks] = useState<Task[]>(predefinedTasks);

  // Add a task
  const addTask = (task: Task) => setTasks((prev) => [...prev, task]);
  // Update a task
  const updateTask = (updatedTask: Task) =>
    setTasks((prev) =>
      prev.map((task) => (task.id === updatedTask.id ? updatedTask : task)),
    );
  // Delete a task
  const deleteTask = (taskId: number) =>
    setTasks((prev) => prev.filter((task) => task.id !== taskId));

  return (
    <TaskContext.Provider value={{ tasks, addTask, updateTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContext;
