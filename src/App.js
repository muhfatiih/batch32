import "./styling/App.css";
import { LoginForm } from "./page/login";
import { Register } from "./page/register";
import { Homepage } from "./page/Homepage";
import { DetailItem } from "./page/detailproduct";
import { ProfilePage } from "./page/profile";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/register" element={<Register />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/detail-product/:id" element={<DetailItem />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </>
  );
}

export default App;
