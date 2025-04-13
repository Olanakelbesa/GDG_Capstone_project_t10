import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Package from "./pages/Package";
import Singleblog from "./pages/Singleblog";
import Contact from "./Contact";



const App = () => {
  return (
    <Router>
      <Routes>
        {/* Home route */}
        <Route path="/" element={<Home />} />
        <Route path="/package" element={<Package />} />
        <Route path="/blog" element={<Singleblog />} />
        <Route path="/blog/:id" element={<Singleblog />}/> 
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </Router>
  );
};

export default App;
