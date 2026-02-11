// Task Creation Form:
// Develop forms for creating tasks,
// incorporating TypeScript types for data validation
// and error handling.
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import PageLayout from "./PageLayout";
import type { Task } from "../models/Task.model";

// type Todo = {
//   id: number;
//   task: string;
//   completed: boolean;
// };

interface CreateTaskProps {
  onAddTask: (task: Task) => void;
}

const CreateTask: React.FC<CreateTaskProps> = ({ onAddTask }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [due, setDue] = useState(""); // yyyy-mm-dd from <input type="date">
  const [priority, setPriority] = useState<"Low" | "Medium" | "High">("Low");
  const [status, setStatus] = useState<
    "not started" | "in progress" | "completed"
  >("not started");

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    const [year, month, day] = due.split("-");
    const formattedDueDate = `${month}/${day}/${year}`;
    const task: Task = {
      id: Date.now(),
      title,
      description: desc,
      dueDate: formattedDueDate,
      priority,
      status,
    };
    onAddTask(task);
    // Clear form fields after adding
    setTitle("");
    setDesc("");
    setDue("");
    setPriority("Low");
    setStatus("not started");
  };

  return (
    <PageLayout>
      <h2>Create Task</h2>
      <Form className="text-start" onSubmit={handleAdd}>
        <Form.Group controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter task title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            as="textarea"
            rows={3}
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="dueDate">
          <Form.Label>Due date</Form.Label>
          <Form.Control
            type="date"
            value={due}
            onChange={(e) => setDue(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="priority">
          <Form.Label>Priority</Form.Label>
          <Form.Control
            as="select"
            value={priority}
            onChange={(e) =>
              setPriority(e.target.value as "Low" | "Medium" | "High")
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
            value={status}
            onChange={(e) =>
              setStatus(
                e.target.value as "not started" | "in progress" | "completed",
              )
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
  );
};

export default CreateTask;
