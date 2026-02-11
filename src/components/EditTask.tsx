// Task Editing:
// Develop forms for editing tasks,
// incorporating TypeScript types for data validation
// and error handling.
import React, { useState } from "react";
import { Form, Col, Row, Container, Button } from "react-bootstrap";
import PageLayout from "./PageLayout";
// import { Task } from "../models/Task";

// type Todo = {
//   id: number;
//   task: string;
//   completed: boolean;
// };

const EditTask: React.FC = () => {
  //   const [tasks, setTasks] = useState<Task[]>([]);
  //   const [newTask, setNewTask] = useState<string>("");
  const [title, setTitle] = useState("");
  //   const [desc, setDesc] = useState("");
  const [due, setDue] = useState(""); // yyyy-mm-dd from <input type="date">
  //   const [priority, setPriority] = useState<"Low" | "Medium" | "High">("Low");

  //   const handleAdd = () => {
  //     const task: Task = {
  //       id: Date.now(),
  //       title,
  //       description: desc,
  //       dueDate: new Date(due),
  //       priority,
  //       status: "not started",
  //     };
  //     setTasks((prev) => [...prev, task]);
  //     // Clear form fields after adding
  //     setTitle("");
  //     setDesc("");
  //     setDue("");
  //     setPriority("Low");
  //   };

  return (
    <PageLayout>
      <Container>
        <Row className="justify-content-center">
          <Col
            style={{ maxWidth: "600px" }}
            className="text-start border border-2 border-secondary p-3 rounded"
          >
            <h2>Edit Task</h2>
            <Form className="text-start">
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
                <Form.Control type="text" as="textarea" rows={3} required />
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
                <Form.Control as="select" required>
                  <option>Low</option>
                  <option>Medium</option>
                  <option>High</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="status">
                <Form.Label>Status</Form.Label>
                <Form.Control as="select" required>
                  <option>not started</option>
                  <option>in progress</option>
                  <option>completed</option>
                </Form.Control>
              </Form.Group>

              <Button type="button">Save Changes</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
};

export default EditTask;
