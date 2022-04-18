import { Button, Form, Row, Col } from "react-bootstrap";

export function EditForm() {
  return (
    <div>
      {" "}
      <button>Upload image</button>
      <div>
        {" "}
        <Row>
          <Form.Label column lg={2}>
            Normal Text
          </Form.Label>
          <Col>
            <Form.Control type="text" placeholder="Normal text" />
          </Col>
        </Row>
      </div>
    </div>
  );
}
