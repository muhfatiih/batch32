import { Button, Table, Card, Row } from "react-bootstrap";
import { NavbarListAdmin } from "./Homepage";
import ReactDeleteRow from "react-delete-row";
import { category } from "../components/categoryitems";
import { Modal } from "bootstrap";

// export const

export function ModalDelete(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>apakah kamu yakin?</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>iya</Button>
      </Modal.Footer>
    </Modal>
  );
}

export function Category() {
  return (
    <div>
      <NavbarListAdmin />{" "}
      <div style={{ margin: "100px 70px" }}>
        <h4 style={{ color: "white" }}>List Category</h4>
        <div>
          {" "}
          <Table
            striped
            bordered
            hover
            className="categoryTable"
            variant="dark"
            style={{ width: "100%", marginTop: "20px", height: "50px" }}
          >
            <thead>
              <tr>
                <th scope="col" style={{ width: "30%" }}>
                  No
                </th>
                <th scope="col" style={{ width: "30%" }}>
                  Category Name
                </th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {category.map((item, i) => {
                return (
                  <ReactDeleteRow
                    key={i}
                    data={item}
                    deleteElement={
                      <Button
                        variant="danger"
                        size="sm"
                        active
                        style={{ padding: "3px 30px" }}
                      >
                        Delete
                      </Button>
                    }
                    onDelete={(item) => {
                      return ModalDelete;
                    }}
                  >
                    <td>{item.no}</td>
                    <td>{item.name}</td>
                    <td>
                      <Button
                        variant="success"
                        size="sm"
                        active
                        style={{ padding: "3px 40px" }}
                      >
                        Edit
                      </Button>{" "}
                    </td>
                  </ReactDeleteRow>
                );
              })}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}
