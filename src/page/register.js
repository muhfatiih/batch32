import logo from "../logo.svg";
import "../components/App.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
            <a href="/">Login</a>
          </Button>{" "}
          <Button
            className="Btn mt-5 ms-3 pe-5 ps-5 pt-1 pb-1"
            variant=""
            size="xl"
          >
            <a href="/register">Register</a>
          </Button>{" "}
        </div>
      </div>
    </div>
  );
}

export function RightData() {
  const [datas, setDatas] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const changeDatas = (e) => {
    setDatas({
      ...datas,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(datas));
  }, [datas]);

  console.log(datas);
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="Right">
      <div className="Login">
        <h1>Register</h1>
        <Form onSubmit={submitHandler}>
          <Form.Control
            name="fullname"
            onChange={changeDatas}
            value={datas.fullname}
            className="mb-3"
            type="text"
            placeholder="Enter name"
          />
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              name="email"
              onChange={changeDatas}
              value={datas.email}
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              name="password"
              onChange={changeDatas}
              value={datas.password}
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <div className="d-grid gap-2 mt-5">
            <Button href="/" variant="danger" size="lg">
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
      <LeftData />

      <RightData />
    </>
  );
}
