//PageLayout.tsx
import React from "react";
import SideBar from "../navigation/SideBar";
import { Container } from "react-bootstrap";
import NavBar from "../navigation/NavBar";

interface PageLayoutProps {
  children?: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <Container fluid className="page-container">
      <header className="page-header d-flex justify-content-between align-items-center">
        <h1 className="page-title">Task Management App</h1>
        <NavBar />
      </header>
      <div className="page-main">
        <SideBar />
        <main className="page-content">{children}</main>
      </div>
    </Container>
  );
};

export default PageLayout;
