import "./components/App.css";
import { Login } from "./page/login";
import { Register } from "./page/register";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* <Route path="/profile" element={<Profile />} />
          <Route path="/signin" element={<SignIn />} /> */}
        </Routes>
      </div>
    </>
  );
}

export default App;
