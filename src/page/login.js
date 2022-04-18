import logo from "../logo.svg";
import "../styling/App.css";
import { Button, Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Homepage } from "./Homepage";

export function LoginForm() {
  const [datas, setDatas] = useState({
    isLogin: false,
    user: {
      email: "",
      password: "",
    },
  });
  let navigate = useNavigate();

  const submitHandler = (e) => {
    const item = JSON.parse(localStorage.getItem("data"));
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    if (email === "admin@email.com" && password === 123) {
      console.log("masuk");
      setDatas({
        isLogin: true,
        user: {
          email,
          password,
        },
      });
      navigate("homepage");
    } else if (item.email === email && item.password === password) {
      setDatas({
        isLogin: true,
        email,
        password,
      });
      navigate("homepage");
    }
    return;
  };

  useEffect(() => {
    const item = JSON.parse(localStorage.getItem("data"));
    console.log("item>>>", item);
    if (item !== null) {
      console.log("masuk item>>>", item);
      return <Link to={{ pathname: "/homepage" }} />;
    }
  }, []);

  return (
    <>
      <div className="app">
        <div className="Left">
          <div className="LeftInfo">
            <img src={logo} className="App-logo" alt="logo" />
            <div>
              <div className="Text">
                {" "}
                <h1>Easy,Fast and Reliable </h1>
                <p>
                  Go shopping for merchandise, just go to dumb merch shopping.
                  the biggest merchandise in Indonesia
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
        <div className="Right">
          <div className="Login">
            <h1>Login</h1>
            <Form onSubmit={submitHandler}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  id="email"
                  type="email"
                  placeholder="Enter email"
                />
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
      </div>
    </>
  );
}
