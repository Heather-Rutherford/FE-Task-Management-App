// TaskList.tsx

import React from "react";
import { Link } from "react-router-dom";
import PageLayout from "./PageLayout";
import { Col, Container, Row } from "react-bootstrap";
import type { Task } from "../models/Task.model";

interface TaskListProps {
  tasks: Task[];
  onDeleteTask: (taskId: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onDeleteTask }) => {
  return (
    <PageLayout>
      {tasks.length > 0 && <div>Has tasks</div>}
      {tasks.length === 0 && <div>No tasks yet</div>}
      <Container>
        <Row>
          <Col>Title</Col>
          <Col>Due Date</Col>
          <Col>Priority</Col>
          <Col>Status</Col>
          <Col></Col>
        </Row>
        {tasks.map((task) => (
          <Row key={task.id}>
            <Col>
              <Link to={`/display-task/${task.id}`}>{task.title}</Link>
            </Col>
            <Col>{new Date(task.dueDate).toLocaleDateString()}</Col>
            <Col>{task.priority}</Col>
            <Col>{task.status}</Col>
            <Col>
              <Link
                to="#"
                onClick={() => {
                  const confirmed = window.confirm(
                    "Are you sure you want to delete this task?",
                  );
                  if (confirmed) {
                    onDeleteTask(task.id);
                  }
                }}
              >
                delete
              </Link>
            </Col>
          </Row>
        ))}
      </Container>
    </PageLayout>
  );
};

export default TaskList;
