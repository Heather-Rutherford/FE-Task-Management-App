//NavBar.tsx
import React from "react";
import { Col, Nav, Navbar, Row } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";

import NavBarButtons from "./NavBarButtons";

const NavBar: React.FC = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <Navbar>
      <Nav>
        <Col>
          <Row>
            <Nav.Link href="/">Home</Nav.Link>
          </Row>
          {isAuthenticated && (
            <>
              <Row>
                <Nav.Link href="/DisplayTasks"> Display Tasks</Nav.Link>
              </Row>
              <Row>
                <Nav.Link href="/add-task"> Create Task</Nav.Link>
              </Row>
              <Row>
                <Nav.Link href="/ListTasks"> List Tasks </Nav.Link>
              </Row>
              <Row>
                <Nav.Link href="/TaskReport">Task Report</Nav.Link>
              </Row>
              <Row>
                <NavBarButtons />
              </Row>
            </>
          )}
        </Col>
      </Nav>
    </Navbar>
  );
};

export default NavBar;
