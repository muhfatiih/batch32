import { Button, Table, Card, Row } from "react-bootstrap";
import { NavbarListAdmin } from "./Homepage";
import ReactDeleteRow from "react-delete-row";
import { useEffect, useState } from "react";
import { listItems } from "../components/shopitems";
import "../styling/category.css";
import { ModalShow } from "../components/modal";
import MaterialButton from "@mui/material/Button";
import { Link } from "react-router-dom";

export function Listproductitems() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      <NavbarListAdmin />{" "}
      <div style={{ margin: "100px 70px" }}>
        <div style={{ width: "100%" }}>
          <h4 style={{ color: "white" }}>List </h4>
          <Link to="/edit-product" style={{ textDecoration: "none" }}>
            <MaterialButton
              variant="contained"
              // LinkComponent={{ href: "/edit-product" }}
              style={{ backgroundColor: "#388e3c", justifySelf: "right" }}
            >
              Add Product
            </MaterialButton>
          </Link>
        </div>
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
                <th scope="col">No</th>
                <th>Photo</th>
                <th scope="col">Product Name</th>
                <th>Product Desc</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Action</th>
              </tr>
            </thead>
            {listItems.map((item, i) => {
              return (
                <tbody style={{ height: "50px" }}>
                  <>
                    <td>{item.id}</td>
                    <td></td>
                    <td>{item.name}</td>
                    <td className="desc">{item.description}</td>
                    <td>{item.price}</td>
                    <td>{item.stock}</td>
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
