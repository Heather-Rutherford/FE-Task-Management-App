//DashboardPage.tsx
// Task Dashboard Page:
// Implement a dashboard interface for managing tasks,
// including features like task lists, creation, editing,
// and deletion.
import React from "react";
import { Col, Container } from "react-bootstrap";
import LoginButton from "../authentication/LoginButton";
import LogoutButton from "../authentication/LogoutButton";
import { useNavigate } from "react-router-dom";
import PageLayout from "./PageLayout";

const DashboardPage: React.FC = () => {
  const navigate = useNavigate();
  const handleCreateTask = () => {
    navigate("/add-task");
  };

  return (
    <PageLayout>
      <Col>
        <h1>Hello, this is the Task Management App</h1>
        <button onClick={handleCreateTask}>Create Task</button>
        <LoginButton />
        <LogoutButton />
      </Col>
    </PageLayout>
  );
};

export default DashboardPage;
