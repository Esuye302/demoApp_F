import React from "react";
import { Routes, Route } from "react-router-dom";
import AddEmployee from "./components/AddEmployee";
import Home from "./components/Home";
import Login from "./components/Login";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AddEmployee />} />
      <Route path="home" element={<Home />} />
      <Route path="login" element={<Login />} />
    </Routes>
  );
};

export default App;
