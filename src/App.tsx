import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AboutUs from "./components/Pages/About-Us";
import TechInsight from "./components/Pages/TechInsight";
import ContactUs from "./components/Pages/Contact-Us";
import Service from "./components/Pages/Service";
import Homepage from "./components/Pages/Homepage";

const App: React.FC = () => (
  <Router>
    <nav className="p-4 bg-blue-100" style={{ fontFamily: "'Syne', sans-serif" }}>
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center items-center text-center">
      <Link to="/" className="font-bold text-blue-600 hover:underline">
        Home
      </Link>
      <Link to="/about" className="font-bold text-blue-600 hover:underline">
        About Us
      </Link>
      <Link to="/insights" className="font-bold text-blue-600 hover:underline">
        Tech Insights
      </Link>
      <Link to="/services" className="font-bold text-blue-600 hover:underline">
        Services
      </Link>
      <Link to="/contact" className="font-bold text-blue-600 hover:underline">
        Contact Us
      </Link>
      </div>
    </nav>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/insights" element={<TechInsight />} />
      <Route path="/services" element={<Service />} />
      <Route path="/contact" element={<ContactUs />} />
    </Routes>
  </Router>
);

export default App;