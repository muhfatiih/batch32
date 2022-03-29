import logo from "../logo.svg";
import "../components/App.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
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
            <Link to="/">Login</Link>
          </Button>{" "}
          <Button
            className="Btn mt-5 ms-3 pe-5 ps-5 pt-1 pb-1"
            variant=""
            size="xl"
          >
            <Link to="/register">Register</Link>
          </Button>{" "}
        </div>
      </div>
    </div>
  );
}

export function Example() {
  const [count, setCount] = useState(0);
  console.log(count);
  //   useEffect(() => {
  //     document.title = `You clicked ${count} times`;
  //   });
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export function RightData() {
  return (
    <div className="Right">
      <div className="Login">
        <h1>Register</h1>
        <Form>
          <Form.Control className="mb-3" type="text" placeholder="Enter name" />
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <div className="d-grid gap-2 mt-5">
            <Button variant="danger" size="lg">
              Register
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export function Register() {
  return (
    <>
      <div className="App">
        <LeftData />
        <Example />
        <RightData />
      </div>
    </>
  );
}
