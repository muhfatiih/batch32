import "./styling/App.css";
import { LoginForm } from "./page/login";
import { Register } from "./page/register";
import { Homepage } from "./page/Homepage";
import { DetailItem } from "./page/detailproduct";
import { ProfilePage } from "./page/profile";
import { Category } from "./page/category";
import { Listproductitems } from "./page/listproduct";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { ModalShow } from "./components/modal";
import { PrivateRouteAdmin, PrivateRouteCos } from "./components/privateRoute";
import { EditCategory, EditProduct } from "./page/editForm";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path="/register" element={<Register />} />

      {/* costumer private page */}
      <Route element={<PrivateRouteCos />}>
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/detail-product/:id" element={<DetailItem />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Route>
      {/* costumer private page end */}

      {/* admin private page */}
      {/* <Route element={<PrivateRouteAdmin />}> */}
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/edit-category" element={<EditCategory />} />
      <Route path="/edit-product" element={<EditProduct />} />
      <Route path="/category" element={<Category />} />
      <Route path="/modal" element={<ModalShow />} />
      <Route path="/list-product" element={<Listproductitems />} />
      {/* </Route> */}
      {/* admin private page end */}
    </Routes>
  );
}

export default App;
