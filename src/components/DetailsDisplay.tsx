// Task Details Display:
// Design a detailed view for individual tasks,
// displaying task information and allowing users
// to modify task details
import React from "react";
import { Link, useParams } from "react-router-dom";
import PageLayout from "./PageLayout";
import type { Task } from "../models/Task.model";

interface DetailsDisplayProps {
  tasks: Task[];
  onDeleteTask: (taskId: number) => void;
}

const DetailsDisplay: React.FC<DetailsDisplayProps> = ({
  tasks,
  onDeleteTask,
}) => {
  const { taskId } = useParams<{ taskId: string }>();
  const parsedId = Number(taskId);
  const task = tasks.find((item) => item.id === parsedId);

  return (
    <PageLayout>
      <h2>Task Details</h2>
      {!task && (
        <div>
          <p>Task not found.</p>
          <Link to="/display-task">Back to task list</Link>
        </div>
      )}
      {task && (
        <div>
          <p>
            <strong>Title:</strong> {task.title}
          </p>
          <p>
            <strong>Description:</strong> {task.description}
          </p>
          <p>
            <strong>Due date:</strong> {task.dueDate}
          </p>
          <p>
            <strong>Priority:</strong> {task.priority}
          </p>
          <p>
            <strong>Status:</strong> {task.status}
          </p>
          <div className="mb-3 d-flex gap-2">
            <Link className="btn btn-dark" to="/display-task">
              Back to task list
            </Link>
            <Link className="btn btn-dark" to={`/edit-task/${task.id}`}>
              Edit Task
            </Link>
            <Link
              to="#"
              className="btn btn-dark"
              onClick={() => {
                const confirmed = window.confirm(
                  "Are you sure you want to delete this task?",
                );
                if (confirmed) {
                  onDeleteTask(task.id);
                }
              }}
            >
              Delete Task
            </Link>
          </div>
        </div>
      )}
    </PageLayout>
  );
};

export default DetailsDisplay;
