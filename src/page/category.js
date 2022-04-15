import { Button, Table, Card, Row } from "react-bootstrap";
import { NavbarListAdmin } from "./Homepage";

export function Category() {
  const handleDeleteRow = (btn) => {
    var row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
  };
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
                <th style={{ width: "30%" }}>No</th>
                <th style={{ width: "30%" }}>Category Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Computer</td>
                <td>
                  <Button
                    variant="success"
                    size="sm"
                    active
                    style={{ padding: "3px 40px" }}
                  >
                    Edit
                  </Button>{" "}
                  <Button
                    variant="danger"
                    size="sm"
                    active
                    onClick={handleDeleteRow()}
                    style={{ padding: "3px 30px" }}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}
