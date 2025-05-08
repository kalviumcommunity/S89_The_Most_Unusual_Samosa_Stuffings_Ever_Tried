import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './About';
import HomePage from './Homepage';
import SamosaList from './SamosaList';
import AddEntity from './AddEntity';
import Signup from './components/Signup'; // Adjust the path as needed
import Login from './components/Login'; // Adjust the path as needed

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<About />} />
      <Route path="/add-entity" element={<AddEntity />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default AllRoutes;