// TaskReport.tsx
// Displays a report of tasks with filtering by status and priority

import React, { useState } from "react";
import PageLayout from "./PageLayout";
import { Button, Col, Container, Row } from "react-bootstrap";
import { type Task } from "../models/Task.model";
import { useTaskContext } from "../hooks/useTaskContext";

const TaskReport: React.FC = () => {
  // Get tasks from context
  const { tasks } = useTaskContext();

  // Filter state for dropdowns
  type Filter = {
    status: string;
    priority: string;
  };

  const [filters, setFilters] = useState<Filter>({
    status: "All",
    priority: "All",
  });

  // Clear filters handler
  const handleClearFilters = () => {
    setFilters({ status: "All", priority: "All" });
  };

  // Filter tasks based on dropdown values
  const filteredTasks: Task[] = tasks.filter((task) => {
    const statusMatch =
      filters.status === "All" ? true : task.status === filters.status;
    const priorityMatch =
      filters.priority === "All" ? true : task.priority === filters.priority;
    return statusMatch && priorityMatch;
  });

  return (
    <>
      <PageLayout>
        <Container>
          <Row className="justify-content-end">
            <div className="d-flex align-items-center gap-2">
              {/* Status filter dropdown */}
              <label htmlFor="statusFilter">Filter by status:</label>
              <select
                id="statusFilter"
                className="form-select w-25"
                aria-label="Filter tasks by status"
                value={filters.status}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                  setFilters({ ...filters, status: e.target.value })
                }
              >
                <option value="All">All</option>
                <option value="not started">not started</option>
                <option value="in progress">in progress</option>
                <option value="completed">completed</option>
              </select>
              {/* Priority filter dropdown */}
              <label htmlFor="priorityFilter">Filter by priority:</label>
              <select
                id="priorityFilter"
                className="form-select w-25"
                aria-label="Filter tasks by priority"
                value={filters.priority}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                  setFilters({ ...filters, priority: e.target.value })
                }
              >
                <option value="All">All</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
              {/* Clear filters button */}
              <Button
                className="btn btn-dark"
                onClick={() => handleClearFilters()}
              >
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
          {/* Render filtered tasks */}
          {filteredTasks.map((task) => (
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
    </>
  );
};

export default TaskReport;
