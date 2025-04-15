import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './About';
import HomePage from './Homepage';
import SamosaList from './SamosaList'; 

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default AllRoutes;