import logo from "../logo.svg";
import "../components/App.css";
import { Homepage } from "./Homepage";
import { ButtonGroup, Button, Form } from "react-bootstrap";
import { useEffect, useState } from "react";

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
    isLogin: false,
    user: {
      email: "",
      password: "",
    },
  });

  useEffect(() => {
    const item = JSON.parse(localStorage.getItem("data"));
    if ((item == datas.user, datas.isLogin == true)) {
      console.log("data is true");
    }
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email);
    setDatas({
      isLogin: true,
      user: {
        email,
        password,
      },
    });
  };

  return datas.isLogin ? (
    <link to="/Landingpage" />
  ) : (
    <div className="Right">
      <div className="Login">
        <h1>Login</h1>
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control id="email" type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="Password">
            <Form.Control
              id="password"
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <div className="d-grid gap-2 mt-5">
            <Button type="submit" variant="danger" size="lg">
              Login
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export function Login() {
  return (
    <>
      <LeftData />

      <RightData />
    </>
  );
}
