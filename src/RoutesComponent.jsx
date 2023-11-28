import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DetalleProducto from './components/DetalleProducto';
import App from './App';

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/detalleproducto/people/:id" element={<DetalleProducto />} />
    </Routes>
  );
};

export default RoutesComponent;



