import logo from "../logo.svg";
import { Navbar, Container } from "react-bootstrap";
import "../components/homepage.css";
import { ButtonGroup, Button, Form } from "react-bootstrap";
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
    <div>
      <h1 style={divStyle}>SELAMAT ANDA TELAH LOGIN</h1>
      <Button
        className="Btn mt-5 pe-5 ps-5 pt-1 pb-1"
        variant="danger"
        size="xl"
        onClick={handleClickLogout}
      >
        Logout
      </Button>
    </div>
  );
}
