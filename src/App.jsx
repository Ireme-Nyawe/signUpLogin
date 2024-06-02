import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./components/Login";
import Signup from "./components/Signup";
const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Login></Login>} />
      <Route path="/login" element={<Login></Login>} />
      <Route path="/signup" element={<Signup></Signup>} />
    </Routes>
  </Router>
);

export default App;