// Task Details Display:
// Design a detailed view for individual tasks,
// displaying task information and allowing users
// to modify task details
import React, { useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import PageLayout from "./PageLayout";
import { useTaskContext } from "../hooks/useTaskContext";

const DetailsDisplay: React.FC = () => {
  const { taskId } = useParams<{ taskId: string }>();
  const parsedId = Number(taskId);
  const navigate = useNavigate();
  const { tasks, deleteTask } = useTaskContext();

  const task = tasks.find((item) => item.id === parsedId);

  const handleDelete = (taskId: number) => {
    try {
      deleteTask(taskId);
      navigate("/display-task", { replace: true });
    } catch (err) {
      console.error("Delete failed:", err);
    }
  };

  useEffect(() => {
    if (!task) {
      navigate("/display-task", { replace: true });
    }
  }, [task, navigate]);

  return (
    <>
      <PageLayout>
        <h2>Task Details</h2>
        {!task && (
          <div>
            <p>Task not found. Redirecting...</p>
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
                type="button"
                to="#"
                className="btn btn-dark"
                onClick={() => {
                  const confirmed = window.confirm(
                    "Are you sure you want to delete this task?",
                  );
                  if (confirmed) {
                    handleDelete(task.id);
                  }
                }}
              >
                Delete Task
              </Link>
            </div>
          </div>
        )}
      </PageLayout>
    </>
  );
};

export default DetailsDisplay;
