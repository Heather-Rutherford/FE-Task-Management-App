//PageLayout.tsx
import React from "react";
import SideBar from "./SideBar";
import { Container } from "react-bootstrap";
import NavBarButtons from "./NavBarButtons";

interface PageLayoutProps {
  children?: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <Container fluid className="page-container">
      <header className="page-header d-flex justify-content-between align-items-center">
        <h1 className="page-title">Task Management App</h1>
        <NavBarButtons />
      </header>
      <div className="page-main">
        <SideBar />
        <main className="page-content">{children}</main>
      </div>
    </Container>
  );
};

export default PageLayout;
