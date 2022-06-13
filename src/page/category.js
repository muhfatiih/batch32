import { Button, Table, Card, Row } from "react-bootstrap";
import { NavbarListAdmin } from "./Homepage";
import ReactDeleteRow from "react-delete-row";
import { useEffect, useState } from "react";
import { category } from "../components/categoryitems";
import "../styling/category.css";
import { ModalShow } from "../components/modal";
import MaterialButton from "@mui/material/Button";
import { Link } from "react-router-dom";

export function Category() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      <NavbarListAdmin />{" "}
      <div style={{ margin: "100px 70px" }}>
        <h4 style={{ color: "white" }}>List Category</h4>
        <Link to="/edit-category" style={{ textDecoration: "none" }}>
          <MaterialButton
            variant="contained"
            style={{ backgroundColor: "#388e3c", justifySelf: "right" }}
          >
            Add Category
          </MaterialButton>
        </Link>
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
                          active
                          style={{
                            padding: "3px 40px",
                            border: "none",
                            borderRadius: "10px",
                            backgroundColor: "green",
                            color: "white",
                          }}
                        >
                          Edit
                        </button>{" "}
                        <button
                          onClick={() => setOpenModal(true)}
                          style={{
                            padding: "3px 30px",
                            border: "none",
                            borderRadius: "10px",
                            backgroundColor: "red",
                            color: "white",
                          }}
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

// export function deleteArray(index:) {
//   const deleteItems = [...Category];
//   deleteItems.splice(index, 1);
// }
