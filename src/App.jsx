import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./components/Login";
import Signup from "./components/Signup";
const App = () => (
  <Router>
    <Routes>
      <Route path="/home" element={<Login></Login>} />
      <Route path="/signup" element={<Signup></Signup>} />
      {/* Add other routes as needed */}
    </Routes>
  </Router>
);

export default App;