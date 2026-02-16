// Task Creation Form:
// Develop forms for creating tasks,
// incorporating TypeScript types for data validation
// and error handling.
import React, { useState, type SubmitEvent } from "react";
import { Form, Button, ToastContainer, Toast } from "react-bootstrap";
import PageLayout from "./PageLayout";
import type { Task } from "../models/Task.model";
import { useTaskContext } from "../hooks/useTaskContext";

interface CreateFormState {
  title: string;
  description: string;
  due: string;
  priority: "Low" | "Medium" | "High";
  status: "not started" | "in progress" | "completed";
}

const CreateTask: React.FC = () => {
  const [formState, setFormState] = useState<CreateFormState>({
    title: "",
    description: "",
    due: "",
    priority: "Low",
    status: "not started",
  });

  const [showToast, setShowToast] = useState<boolean>(false);
  const { addTask } = useTaskContext();

  const handleAdd = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const [year, month, day] = formState.due.split("-");
    const formattedDueDate = `${month}/${day}/${year}`;
    const task: Task = {
      id: Date.now(),
      title: formState.title,
      description: formState.description,
      dueDate: formattedDueDate,
      priority: formState.priority,
      status: formState.status,
    };
    addTask(task);
    // Clear form fields after adding
    setFormState({
      title: "",
      description: "",
      due: "",
      priority: "Low",
      status: "not started",
    });
    setShowToast(true);
  };

  return (
    <>
      <PageLayout>
        <h2>Create Task</h2>
        <Form className="text-start position-relative" onSubmit={handleAdd}>
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
                <strong className="me-auto">Task Created</strong>
              </Toast.Header>
              <Toast.Body className="text-white">
                Your task was created successfully.
              </Toast.Body>
            </Toast>
          </ToastContainer>
          <Form.Group controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter task title"
              value={formState.title}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setFormState({ ...formState, title: e.target.value })
              }
              required
            />
          </Form.Group>
          <Form.Group controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              as="textarea"
              rows={3}
              value={formState.description}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                setFormState({ ...formState, description: e.target.value })
              }
              required
            />
          </Form.Group>
          <Form.Group controlId="dueDate">
            <Form.Label>Due date</Form.Label>
            <Form.Control
              type="date"
              value={formState.due}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setFormState({ ...formState, due: e.target.value })
              }
              required
            />
          </Form.Group>
          <Form.Group controlId="priority">
            <Form.Label>Priority</Form.Label>
            <Form.Control
              as="select"
              value={formState.priority}
              onChange={(e) =>
                setFormState({
                  ...formState,
                  priority: e.target.value as "Low" | "Medium" | "High",
                })
              }
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
              value={formState.status}
              onChange={(e) =>
                setFormState({
                  ...formState,
                  status: e.target.value as
                    | "not started"
                    | "in progress"
                    | "completed",
                })
              }
              required
            >
              <option>not started</option>
              <option>in progress</option>
              <option>completed</option>
            </Form.Control>
          </Form.Group>

          <Button type="submit">Add Task</Button>
        </Form>
      </PageLayout>
    </>
  );
};
export default CreateTask;
