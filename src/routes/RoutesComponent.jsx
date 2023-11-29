import React from 'react';
import { Route, Routes } from 'react-router-dom';
import RutaConNombre from './RutaConNombre';
import DetallePersonaje from '../views/DetallePersonaje';
import DetalleVehiculo from '../views/DetalleVehiculo';
import DetallePlaneta from '../views/DetallePlaneta';
import App from '../App';

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route
        path="/views/detallepersonaje/people/:id"
        element={<RutaConNombre element={DetallePersonaje} />} 
      />
      <Route
        path="/views/detallevehiculo/vehicles/:id"
        element={<RutaConNombre element={DetalleVehiculo} />}
      />
      <Route
        path="/views/detalleplaneta/planets/:id"
        element={<RutaConNombre element={DetallePlaneta} />}
      />
    </Routes>
  );
};

export default RoutesComponent;











