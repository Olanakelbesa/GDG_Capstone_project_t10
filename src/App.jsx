<<<<<<< HEAD
// import Front from "./components/Front";
// function App() {
//   return (
//     <div>
//       <Front />
//     </div>
//   );
// }

// export default App;
=======
>>>>>>> 8e562f7c554b383e8d5203202593c36b3fd859c5
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Package from "./pages/Package";
import Singleblog from "./pages/Singleblog";



const App = () => {
  return (
    <Router>
      <Routes>
        {/* Home route */}
        <Route path="/" element={<Home />} />
        <Route path="/package" element={<Package />} />
        <Route path="/blog" element={<Singleblog />} />
        
      </Routes>
    </Router>
  );
};

export default App;
