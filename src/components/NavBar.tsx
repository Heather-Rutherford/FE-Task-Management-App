//NavBar.tsx
import { Col, Nav, Navbar, Row } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";

const NavBar: React.FC = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <Navbar>
      <Nav>
        <Col>
          <Row className="align-items-start">
            <Nav.Link href="/">Home |</Nav.Link>
          </Row>
          {isAuthenticated && (
            <>
              <Row>
                <Nav.Link href="/DisplayTasks"> Display Tasks |</Nav.Link>
              </Row>
              <Row>
                <Nav.Link href="/CreateTask"> Create Task |</Nav.Link>
              </Row>
              <Row>
                <Nav.Link href="/EditTask"> Edit Task |</Nav.Link>
              </Row>
            </>
          )}
        </Col>
      </Nav>
    </Navbar>
  );
};

export default NavBar;
