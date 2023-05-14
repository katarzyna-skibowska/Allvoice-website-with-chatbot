import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/NavBar/NavBar";
import { HomePage } from "./components/HomePage/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <HomePage />
    </BrowserRouter>
  );
}

export default App;
