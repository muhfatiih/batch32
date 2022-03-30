import "./components/App.css";
import { Login } from "./page/login";
import { Register } from "./page/register";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Link } from "react-router-dom";
import { Homepage } from "./page/Homepage";
function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/Landingpage" element={<Homepage />} />
          {/* <Route path="/signin" element={<SignIn />} />  */}
        </Routes>
      </div>
    </>
  );
}

export default App;
