//PageLayout.tsx
import { Col, Container, Row } from "react-bootstrap";
import NavBar from "./NavBar";
import NavBarButtons from "./NavBarButtons";

type PageLayoutProps = {
  children?: React.ReactNode;
};

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <Container>
      <Row>
        <Col>
          <NavBar />
        </Col>
        <Col md={3}>{children}</Col>
      </Row>
      <footer>
        <NavBarButtons />
      </footer>
    </Container>
  );
};

export default PageLayout;
