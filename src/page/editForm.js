import { Button, Form, Row, Col } from "react-bootstrap";
import { NavbarList, NavbarListAdmin } from "./Homepage";

export function EditCategory() {
  return (
    <div>
      <NavbarListAdmin />
      <h5 style={{ color: "red" }}>Edit Category</h5>
      <div>
        <Col>
          <Form.Control type="text" placeholder="Normal text" />
        </Col>
      </div>
    </div>
  );
}

export function EditProduct() {
  return (
    <div>
      <NavbarListAdmin />
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
