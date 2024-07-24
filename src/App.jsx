import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavbarComponent from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Home from "./components/HomePage";
import AboutUs from "./components/AboutUs";
import Academics from "./components/Academics";
import Admissions from "./components/Admissions";
import Faculty from "./components/Faculty";
import Students from "./components/Students";
import Gallery from "./components/Gallery";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <Router>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/students" element={<Students />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
