import logo from "../logo.svg";
import "../styling/homepage.css";
import { Button, Navbar, Nav, Container, Card, Row } from "react-bootstrap";
import { useNavigate, To } from "react-router-dom";
import { listItems } from "../components/shopitems";
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
        <Navbar.Brand href="/homepage">
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
    <div style={{ marginLeft: "30px", marginTop: "50px" }}>
      <h3>Product</h3>{" "}
      <div
        className="productlist"
        style={{ display: "flex", flexDirection: "row" }}
      >
        {" "}
        {listItems.map((items) => {
          return (
            <div className="product">
              {" "}
              <div>
                <Card bg="dark" style={{ width: "18rem" }}>
                  <Card.Img variant="top" src="holder.js/100px180" />
                  <Card.Body>
                    <Card.Title style={{ color: "red" }}>
                      {items.name}
                    </Card.Title>
                    <Card.Text>Rp. </Card.Text>
                    <Card.Text>Stock:</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </div>
          );
        })}
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
