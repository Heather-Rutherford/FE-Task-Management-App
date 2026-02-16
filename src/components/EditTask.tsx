// Task Editing:
// Develop forms for editing tasks,
// incorporating TypeScript types for data validation
// and error handling.
import React, { useState, type SubmitEvent } from "react";
import { Form, Button, ToastContainer, Toast } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import type { Task } from "../models/Task.model";
import { useTaskContext } from "../hooks/useTaskContext";
import PageLayout from "./PageLayout";

interface EditFormState {
  title: string;
  description: string;
  dueDate: string;
  priority: Task["priority"];
  status: Task["status"];
}

const toInputDate = (value: string) => {
  if (!value) return "";
  if (value.includes("-")) return value;
  const [month, day, year] = value.split("/");
  if (!month || !day || !year) return "";
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

const EditTask: React.FC = () => {
  const navigate = useNavigate();
  const { taskId } = useParams<{ taskId: string }>();
  const parsedId = Number(taskId);
  const [showToast, setShowToast] = useState<boolean>(false);
  const { tasks, updateTask, deleteTask } = useTaskContext();

  const task = tasks.find((item) => item.id === parsedId);
  const [formState, setFormState] = useState<EditFormState>(() => ({
    title: task?.title || "",
    description: task?.description || "",
    dueDate: toInputDate(task?.dueDate || ""),
    priority: task?.priority || "Low",
    status: task?.status || "not started",
  }));

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleEdit = (e: SubmitEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (!Number.isFinite(parsedId)) return;
    const updatedTask: Task = {
      id: parsedId,
      title: formState.title,
      description: formState.description,
      dueDate: formState.dueDate
        ? (() => {
            const [year, month, day] = formState.dueDate.split("-");
            return `${month}/${day}/${year}`;
          })()
        : "",
      priority: formState.priority,
      status: formState.status,
    };
    updateTask(updatedTask);
    setShowToast(true);
  };

  const handleDelete = (taskId: number): void => {
    try {
      deleteTask(taskId);
      navigate("/display-task", { replace: true });
    } catch (err) {
      console.error("Delete failed:", err);
    }
  };

  return (
    <>
      <PageLayout>
        <h2>Edit Task</h2>
        {!task && (
          <div>
            <p>Task not found.</p>
            <Link to="/display-task">Back to task list</Link>
          </div>
        )}
        {task && (
          <Form
            className="text-start position-relative"
            onSubmit={(e: React.SubmitEvent<HTMLFormElement>): void => {
              handleEdit(e);
              <div>
                <p>Task not found.</p>
                <Link to="/display-task">Back to task list</Link>
              </div>;
            }}
          >
            <ToastContainer
              className="p-2"
              style={{
                position: "absolute",
                top: 0,
                left: "50%",
                transform: "translateX(-50%)",
                zIndex: 2,
              }}
            >
              <Toast
                bg="success"
                onClose={() => setShowToast(false)}
                show={showToast}
                delay={2500}
                autohide
              >
                <Toast.Header closeButton>
                  <strong className="me-auto">Task Updated</strong>
                </Toast.Header>
                <Toast.Body className="text-white">
                  Your changes were saved successfully.
                </Toast.Body>
              </Toast>
            </ToastContainer>
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter task title"
                name="title"
                defaultValue={formState.title}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                as="textarea"
                rows={3}
                name="description"
                defaultValue={formState.description}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="dueDate">
              <Form.Label>Due date</Form.Label>
              <Form.Control
                type="date"
                name="dueDate"
                defaultValue={toInputDate(formState.dueDate)}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="priority">
              <Form.Label>Priority</Form.Label>
              <Form.Control
                as="select"
                name="priority"
                defaultValue={formState.priority}
                onChange={handleChange}
                required
              >
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="status">
              <Form.Label>Status</Form.Label>
              <Form.Control
                as="select"
                name="status"
                defaultValue={formState.status}
                onChange={handleChange}
                required
              >
                <option>not started</option>
                <option>in progress</option>
                <option>completed</option>
              </Form.Control>
            </Form.Group>
            <div className="mt-3 gap-2 d-flex">
              <Button
                variant="secondary"
                onClick={() => navigate("/display-task")}
              >
                Return to Task List
              </Button>
              <Button type="submit">Save Changes</Button>
              <Button
                type="button"
                onClick={(): void => {
                  const confirmed = window.confirm(
                    "Are you sure you want to delete this task?",
                  );
                  if (confirmed) {
                    handleDelete(task.id);
                  }
                }}
                variant="danger"
              >
                Delete Task
              </Button>
            </div>
          </Form>
        )}
      </PageLayout>
    </>
  );
};

export default EditTask;
