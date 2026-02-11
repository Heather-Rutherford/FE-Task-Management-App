// Task Editing:
// Develop forms for editing tasks,
// incorporating TypeScript types for data validation
// and error handling.
import React, { useState, type SubmitEvent } from "react";
import { Form, Button, ToastContainer, Toast } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import PageLayout from "./PageLayout";
import type { Task } from "../models/Task.model";

interface EditTaskProps {
  onEditTask: (updatedTask: Task) => void;
  tasks: Task[];
}

const toInputDate = (value: string) => {
  if (!value) return "";
  if (value.includes("-")) return value;
  const [month, day, year] = value.split("/");
  if (!month || !day || !year) return "";
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

const EditTask: React.FC<EditTaskProps> = ({ onEditTask, tasks }) => {
  const { taskId } = useParams<{ taskId: string }>();
  const parsedId = Number(taskId);
  const task = tasks.find((item) => item.id === parsedId);
  const [showToast, setShowToast] = useState(false);

  const handleEdit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!Number.isFinite(parsedId)) return;
    const formData = new FormData(e.currentTarget);
    const title = String(formData.get("title") ?? "");
    const desc = String(formData.get("description") ?? "");
    const dueValue = String(formData.get("dueDate") ?? "");
    const [year, month, day] = dueValue.split("-");
    const formattedDueDate = dueValue ? `${month}/${day}/${year}` : "";
    const priority = String(
      formData.get("priority") ?? "Low",
    ) as Task["priority"];
    const status = String(
      formData.get("status") ?? "not started",
    ) as Task["status"];
    const task: Task = {
      id: parsedId,
      title,
      description: desc,
      dueDate: formattedDueDate,
      priority,
      status,
    };
    onEditTask(task);
    // Let the user know that the task was edited successfully
    setShowToast(true);
  };

  return (
    <PageLayout>
      <h2>Edit Task</h2>
      {!task && (
        <div>
          <p>Task not found.</p>
          <Link to="/display-task">Back to task list</Link>
        </div>
      )}
      {task && (
        <Form className="text-start position-relative" onSubmit={handleEdit}>
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
              defaultValue={task.title}
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
              defaultValue={task.description}
              required
            />
          </Form.Group>
          <Form.Group controlId="dueDate">
            <Form.Label>Due date</Form.Label>
            <Form.Control
              type="date"
              name="dueDate"
              defaultValue={toInputDate(task.dueDate)}
              required
            />
          </Form.Group>
          <Form.Group controlId="priority">
            <Form.Label>Priority</Form.Label>
            <Form.Control
              as="select"
              name="priority"
              defaultValue={task.priority}
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
              defaultValue={task.status}
              required
            >
              <option>not started</option>
              <option>in progress</option>
              <option>completed</option>
            </Form.Control>
          </Form.Group>

          <Button type="submit">Save Changes</Button>
        </Form>
      )}
    </PageLayout>
  );
};

export default EditTask;
