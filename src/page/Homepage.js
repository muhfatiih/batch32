import logo from "../logo.svg";
import "../styling/homepage.css";
import { Button, Navbar, Nav, Container, Card } from "react-bootstrap";
import { useNavigate, To } from "react-router-dom";

const divStyle = {
  color: "white",
};

export function NavbarList() {
  let navigate = useNavigate();
  const handleClickLogout = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          {" "}
          <img
            src={logo}
            width="50"
            height="50"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link style={{ color: "white" }} href="#deets">
              Complain
            </Nav.Link>
            <Nav.Link style={{ color: "white" }} href="/profile">
              Profile
            </Nav.Link>
            <Nav.Link
              style={{ color: "white" }}
              href="#pricing"
              onClick={handleClickLogout}
            >
              Logout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export function Product() {
  return (
    <div className="product">
      <h3>Product</h3>
      <div>
        <Card bg="dark" style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title style={{ color: "red" }}>Card Title</Card.Title>
            <Card.Text>Rp. Stock:</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export function Homepage() {
  return (
    <>
      <NavbarList />
      <Product />
    </>
  );
}
