import { useState } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import { NavbarList, NavbarListAdmin } from "./Homepage";
import "../styling/formEdit.css";

export function EditCategory() {
  return (
    <div>
      <NavbarListAdmin />
      <div className="formInputCategory">
        <h5 style={{ color: "red" }}>Edit Category</h5>
        <input type="text" />
        <button
          type="submit"
          style={{
            backgroundColor: "green",
            color: "white",
            borderRadius: "7px",
            width: "100%",
            lineHeight: "40px",
            marginTop: "40px",
          }}
        >
          Save
        </button>
      </div>
    </div>
  );
}

export function EditProduct() {
  const [image, setImage] = useState(null);

  const handleShowImg = (a) => {
    setImage(a.target.files[0]);
  };

  return (
    <div>
      <NavbarListAdmin />
      <div className="formProduct">
        <form onSubmit={{}}>
          <h5 style={{ marginBottom: "30px", color: "red" }}>Edit Product</h5>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <img
              src={image ? URL.createObjectURL(image) : null}
              alt={image ? image.name : null}
              width="200px"
              style={{ borderRadius: "7px" }}
            />
            <input
              type="file"
              onChange={handleShowImg}
              style={{
                border: "none",
                borderRadius: "7px",
                marginTop: "10px",
              }}
              placeholder="Upload Image"
            />
          </div>

          <div className="formInputPro">
            <input type="text" />
            <textarea />
            <input type="text" />
            <input type="text" />
          </div>
          <button
            type="submit"
            style={{
              backgroundColor: "green",
              color: "white",
              borderRadius: "7px",
              width: "100%",
              lineHeight: "40px",
              marginTop: "40px",
            }}
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
}
