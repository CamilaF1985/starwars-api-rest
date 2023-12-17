import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DetallePersonaje from '../views/DetallePersonaje';
import DetalleVehiculo from '../views/DetalleVehiculo';
import DetallePlaneta from '../views/DetallePlaneta';
import App from '../App';
import { FavoritosProvider } from '../store/FavoritosContext';

const RoutesComponent = () => {
  return (
    <FavoritosProvider>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/vistas/detallepersonajes/:id" element={<DetallePersonaje />} />
        <Route path="/vistas/detallevehiculos/:id" element={<DetalleVehiculo />} />
        <Route path="/vistas/detalleplanetas/:id" element={<DetallePlaneta />} />
      </Routes>
    </FavoritosProvider>
  );
};

export default RoutesComponent;
















