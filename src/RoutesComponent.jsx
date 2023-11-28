import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DetallePersonaje from './components/DetallePersonaje';
import DetalleVehiculo from './components/DetalleVehiculo';
import DetallePlaneta from './components/DetallePlaneta';  
import App from './App';

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/detallepersonaje/people/:id" element={<DetallePersonaje />} />
      <Route path="/detallevehiculo/vehicles/:id" element={<DetalleVehiculo />} />
      <Route path="/detalleplaneta/planets/:id" element={<DetallePlaneta />} /> 
    </Routes>
  );
};

export default RoutesComponent;





