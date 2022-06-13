import { NavbarList, NavbarListcos } from "./Homepage";
import keyboard from "../image/keyboard.jpg";
import {
  Button,
  Navbar,
  Nav,
  Container,
  Card,
  Row,
  Col,
} from "react-bootstrap";
import { useLocation, Link } from "react-router-dom";

export function DetailItem() {
  const { state } = useLocation();
  return (
    <div>
      <NavbarListcos />
      <div
        className="itemcard"
        style={{
          width: "100%",
          padding: "30px 100px",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <img style={{ width: "50%", padding: "30px" }} src={keyboard} />
        <div style={{ margin: "60px" }}>
          <h2 style={{ color: "red" }}>Keyboard</h2>
          <p>Stock : 400</p>

          <ul style={{ listStyle: "none", padding: "0px", color: "white" }}>
            <li>- Blue swicth</li>
            <li>- Random RGB Light</li>
            <li>- Bluetooth 3</li>
            <li>- Hotswapable </li>
          </ul>
          <br />
          <p>{state.listItems.description}</p>
          <br />
          <h4 style={{ textAlign: "end", color: "red" }}>Rp.500.000</h4>
          <br />
          <div className="d-grid gap-2">
            <Button variant="danger" size="l">
              Buy
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
