import "./styling/App.css";
import { LoginForm } from "./page/login";
import { Register } from "./page/register";
import { Homepage } from "./page/Homepage";
import { DetailItem } from "./page/detailproduct";
import { ProfilePage } from "./page/profile";
import { Category } from "./page/category";
import { Listproductitems } from "./page/listproduct";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Link } from "react-router-dom";
import { ModalShow } from "./components/modal";
// import { PrivateRoute } from "../components/privateRoute";
import { EditForm } from "./page/editCategory";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/register" element={<Register />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/detail-product/:id" element={<DetailItem />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/edit" element={<EditForm />} />
        <Route path="/category" element={<Category />} />
        <Route path="/modal" element={<ModalShow />} />
        <Route path="/list-product" element={<Listproductitems />} />
      </Routes>
    </>
  );
}

export default App;
