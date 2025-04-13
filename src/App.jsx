import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Package from "./pages/Package";
import Singleblog from "./pages/Singleblog";
import ErrorPage from "./pages/Error_page";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Home route */}
        <Route path="/" element={<Home />} />
        <Route path="/package" element={<Package />} />
        <Route path="/blog" element={<Singleblog />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact/>}/>
        <Route path="*" element={<ErrorPage />} />

      </Routes>
    </Router>
  );
};

export default App;
