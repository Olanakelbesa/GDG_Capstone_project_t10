// import Front from "./components/Front";
// function App() {
//   return (
//     <div>
//       <Front />
//     </div>
//   );
// }

// export default App;
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Home route */}
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
