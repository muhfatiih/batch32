import logo from "../logo.svg";
import "../components/homepage.css";
import { Button, Navbar, Nav, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const divStyle = {
  color: "white",
};

export function Homepage() {
  let navigate = useNavigate();
  const handleClickLogout = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Button
              className="Btn mt-5 pe-5 ps-5 pt-1 pb-1"
              variant="danger"
              size="xl"
              onClick={handleClickLogout}
            >
              Logout
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
