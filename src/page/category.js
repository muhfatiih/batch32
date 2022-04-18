import { Button, Table, Card, Row } from "react-bootstrap";
import { NavbarListAdmin } from "./Homepage";
import ReactDeleteRow from "react-delete-row";
import { useEffect, useState } from "react";
import { category } from "../components/categoryitems";
import "../styling/category.css";
import { ModalShow } from "../components/modal";

export function Category() {
  const [openModal, setOpenModal] = useState(false);
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
            style={{ width: "100%", marginTop: "20px", height: "70px" }}
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
            {category.map((item, i) => {
              return (
                <tbody style={{ height: "50px" }}>
                  <>
                    <td>{item.no}</td>
                    <td>{item.name}</td>
                    <td>
                      <div>
                        <button
                          variant="success"
                          size="sm"
                          active
                          style={{ padding: "3px 40px" }}
                        >
                          Edit
                        </button>{" "}
                        <button
                          variant="danger"
                          size="sm"
                          active
                          onClick={() => setOpenModal(true)}
                          style={{ padding: "3px 30px" }}
                        >
                          Delete
                        </button>
                        <ModalShow
                          open={openModal}
                          onClose={() => setOpenModal(false)}
                        />
                      </div>{" "}
                    </td>
                  </>
                </tbody>
              );
            })}
          </Table>
        </div>
      </div>
    </div>
  );
}

export function deleteArray(index: number) {
  const deleteItems = [...Category];
  deleteItems.splice(index, 1);
}
