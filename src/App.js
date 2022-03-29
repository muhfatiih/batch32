import "./components/App.css";
import { LeftData, RightData } from "./page/login";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <div className="App">
        <LeftData />

        <RightData />
      </div>
    </>
  );
}

export default App;
