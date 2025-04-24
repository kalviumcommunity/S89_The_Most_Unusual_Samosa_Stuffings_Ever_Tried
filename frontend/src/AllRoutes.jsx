import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './About';
import HomePage from './Homepage';
import SamosaList from './SamosaList';
import AddEntity from './AddEntity'; 

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<About />} />
      <Route path="/add-entity" element={<AddEntity />} /> 
    </Routes>
  );
}

export default AllRoutes;