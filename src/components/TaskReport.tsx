// TaskList.tsx

import React, { useState } from "react";
import PageLayout from "./PageLayout";
import { Button, Col, Container, Row } from "react-bootstrap";
import type { Task } from "../models/Task.model";

interface TaskListProps {
  tasks: Task[];
  filters: {
    status: string;
    priority: string;
  };
  onApplyFilters: (taskStatus: string, taskPriority: string) => void;
  onClearFilters: () => void;
}

const TaskReport: React.FC<TaskListProps> = ({
  tasks,
  filters,
  onApplyFilters,
  onClearFilters,
}) => {
  const [statusFilter, setStatusFilter] = useState(filters.status);
  const [priorityFilter, setPriorityFilter] = useState(filters.priority);

  const handleApply = () => {
    onApplyFilters(statusFilter, priorityFilter);
  };

  const handleClear = () => {
    setStatusFilter("");
    setPriorityFilter("");
    onClearFilters();
  };

  return (
    <PageLayout>
      {/* {tasks.length > 0 && <div>Has tasks</div>}
      {tasks.length === 0 && <div>No tasks yet</div>} */}
      <Container>
        <Row className="justify-content-end">
          <div className="d-flex align-items-center gap-2">
            <label htmlFor="statusFilter">Filter by status:</label>
            <select
              id="statusFilter"
              className="form-select w-25"
              aria-label="Filter tasks by status"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="">All</option>
              <option value="not started">not started</option>
              <option value="in progress">in progress</option>
              <option value="completed">completed</option>
            </select>
            <label htmlFor="priorityFilter">Filter by priority:</label>
            <select
              id="priorityFilter"
              className="form-select w-25"
              aria-label="Filter tasks by priority"
              value={priorityFilter}
              onChange={(e) => setPriorityFilter(e.target.value)}
            >
              <option value="">All</option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
            <Button className="btn btn-dark" onClick={handleApply}>
              Apply Filters
            </Button>
            <Button className="btn btn-outline-secondary" onClick={handleClear}>
              Clear Filters
            </Button>
          </div>
        </Row>
        <Row>
          <Col>Title</Col>
          <Col>Description</Col>
          <Col>Due Date</Col>
          <Col>Priority</Col>
          <Col>Status</Col>
          <Col></Col>
        </Row>
        {tasks.map((task) => (
          <Row key={task.id}>
            <Col>{task.title}</Col>
            <Col>{task.description}</Col>
            <Col>{new Date(task.dueDate).toLocaleDateString()}</Col>
            <Col>{task.priority}</Col>
            <Col>{task.status}</Col>
          </Row>
        ))}
      </Container>
    </PageLayout>
  );
};

export default TaskReport;
