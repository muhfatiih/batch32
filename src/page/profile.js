import {
  Button,
  Navbar,
  Nav,
  Container,
  Card,
  Row,
  Col,
} from "react-bootstrap";
import { NavbarListcos } from "./Homepage";
import person from "../image/person.jpg";
import "../styling/homepage.css";
import keyboard from "../image/keyboard.jpg";
import logo from "../logo.svg";

export function Transaction() {
  return (
    <div className="transaction">
      {" "}
      <h3 style={{ color: "rgb(207, 15, 15)" }}>My Transaction</h3>
      <div className="card">
        <img src={keyboard} style={{ width: "20%", padding: "10px" }}></img>
        <div className="transactionInfo">
          <h5 style={{ color: "rgb(207, 15, 15)" }}>Keyboard</h5>
          <p style={{ color: "rgb(207, 15, 15)" }}>Saturday, 14 april 2022</p>
          <p>Price: Rp.500.000</p>
          <p style={{ paddingTop: "30px", fontWeight: "bold" }}>
            Sub Total : Rp.500.000
          </p>
        </div>
        <div className="logoCard" style={{ flex: "50%" }}>
          <div style={{ flexDirection: "end" }}>
            {" "}
            <img
              src={logo}
              style={{
                widht: "100px",
                height: "100px",
                paddingLeft: "200px",
                marginTop: "20px",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export function Profile() {
  return (
    <>
      <div className="leftprofile">
        {" "}
        <div>
          {" "}
          <h3 style={{ color: "rgb(207, 15, 15)" }}>My Profile</h3>
          <img style={{ width: "300px", marginTop: "30px" }} src={person}></img>
        </div>
        <div className="profileList">
          <ul>
            <li>
              <h5> Name</h5>
              <p> Muhammad Alfatih </p>
            </li>
            <li>
              <h5> Email </h5>
              <p> muhammmadal99 @gmail.com </p>
            </li>
            <li>
              <h5> Phone </h5>
              <p> 081389664961 </p>
            </li>
            <li>
              <h5>Gender </h5>
              <p> Male </p>
            </li>
            <li>
              <h5> Adress </h5>
              <p> Sukabumi </p>
            </li>
          </ul>
        </div>
        <Transaction />
      </div>
    </>
  );
}

export function ProfilePage() {
  return (
    <>
      <NavbarListcos />;
      <Profile />
    </>
  );
}
