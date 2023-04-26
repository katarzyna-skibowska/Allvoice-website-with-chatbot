import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/NavBar/NavBar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
}

export default App;
