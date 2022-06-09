import { Button, Form, Row, Col } from "react-bootstrap";
import { NavbarList } from "./Homepage";

export function EditForm() {
  return (
    <div>
      <NavbarList />
      <button>Upload image</button>
      <div>
        <Col>
          <Col>
            <Form.Control type="text" placeholder="Normal text" />
          </Col>
          <Col>
            <Form.Control type="text" placeholder="Normal text" />
          </Col>{" "}
          <Col>
            <Form.Control type="text" placeholder="Normal text" />
          </Col>{" "}
          <Col>
            <Form.Control type="text" placeholder="Normal text" />
          </Col>
        </Col>
      </div>
    </div>
  );
}
