import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar.jsx";
import About from "./pages/About.jsx";
import Education from "./pages/Education.jsx";
import Experience from "./pages/Experience.jsx";
import Project from "./pages/Project.jsx";
import Contact from "./pages/Contact.jsx";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="main-content" style={{ backgroundColor: "#e6e8e8" }}>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/about" element={<About />} />
            <Route path="/education" element={<Education />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/project" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
