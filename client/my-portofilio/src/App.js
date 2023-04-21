import "./App.css";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import Projects from "./Components/Projects/Projects";
import Contact from "./Pages/Contact/Contact";
import AboutPage from "./Pages/AboutPage/AboutPage";

function App() {
  return (
    <div className="app-container-everything">
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={< AboutPage/>} />
        <Route path="/work" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      
    </div>
  );
}

export default App;
