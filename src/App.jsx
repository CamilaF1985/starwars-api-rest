import React, { useState } from 'react';
import BarraNavegacion from './components/Navbar';
import Personajes from './components/Personajes';
import Vehiculos from './components/Vehiculos';
import Planetas from './components/Planetas'; // Importa el componente de Planetas
import './assets/css/App.css';

function App() {
  const [mostrarPersonajes, setMostrarPersonajes] = useState(false);
  const [mostrarVehiculos, setMostrarVehiculos] = useState(false);
  const [mostrarPlanetas, setMostrarPlanetas] = useState(false);

  const toggleMostrarPersonajes = () => {
    setMostrarPersonajes(!mostrarPersonajes);
    setMostrarVehiculos(false);
    setMostrarPlanetas(false);
  };

  const toggleMostrarVehiculos = () => {
    setMostrarVehiculos(!mostrarVehiculos);
    setMostrarPersonajes(false);
    setMostrarPlanetas(false);
  };

  const toggleMostrarPlanetas = () => {
    setMostrarPlanetas(!mostrarPlanetas);
    setMostrarPersonajes(false);
    setMostrarVehiculos(false);
  };

  return (
    <div>
      <BarraNavegacion />
      <div className="content-container">
        <div className="personajes-header" onClick={toggleMostrarPersonajes}>
          <h2>Personajes</h2>
          {mostrarPersonajes && (
            <div className="personajes-container">
              <Personajes />
            </div>
          )}
        </div>
        <div className="vehiculos-header" onClick={toggleMostrarVehiculos}>
          <h2>Vehículos</h2>
          {mostrarVehiculos && (
            <div className="vehiculos-container">
              <Vehiculos />
            </div>
          )}
        </div>
        <div className="planetas-header" onClick={toggleMostrarPlanetas}>
          <h2>Planetas</h2>
          {mostrarPlanetas && (
            <div className="planetas-container">
              <Planetas />
            </div>
          )}
        </div>
      </div>
    </div>
  );  
}

export default App;



























