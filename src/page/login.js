import logo from "../logo.svg";
import "../components/App.css";

import { ButtonGroup, Button, Form } from "react-bootstrap";

export function LeftData() {
  return (
    <div className="Left">
      <div className="LeftInfo">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <div className="Text">
            {" "}
            <h1>Easy,Fast and Reliable </h1>
            <p>
              Go shopping for merchandise, just go to dumb merch shopping. the
              biggest merchandise in Indonesia
            </p>
          </div>
        </div>
        <div className="Btn">
          <Button
            className="Btn mt-5 pe-5 ps-5 pt-1 pb-1"
            variant="danger"
            size="xl"
          >
            <a href="#">Login</a>
          </Button>{" "}
          <Button
            className="Btn mt-5 ms-3 pe-5 ps-5 pt-1 pb-1"
            variant=""
            size="xl"
          >
            <a href="#">Register</a>
          </Button>{" "}
        </div>
      </div>
    </div>
  );
}

export function RightData() {
  return (
    <div className="Right">
      <div className="Login">
        <h1>Login</h1>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <div className="d-grid gap-2 mt-5">
            <Button variant="danger" size="lg">
              Login
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}
