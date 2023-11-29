// App.jsx
import React, { useState } from 'react';
import BarraNavegacion from './components/Navbar';
import Personajes from './components/Personajes';
import Vehiculos from './components/Vehiculos';
import Planetas from './components/Planetas';
import Footer from './components/Footer'; // Importa el Footer
import './assets/css/App.css';

function App() {
  const [mostrarPersonajes, setMostrarPersonajes] = useState(false);
  const [mostrarVehiculos, setMostrarVehiculos] = useState(false);
  const [mostrarPlanetas, setMostrarPlanetas] = useState(false);

  const toggleMostrarPersonajes = () => {
    setMostrarPersonajes(!mostrarPersonajes);
  };

  const toggleMostrarVehiculos = () => {
    setMostrarVehiculos(!mostrarVehiculos);
  };

  const toggleMostrarPlanetas = () => {
    setMostrarPlanetas(!mostrarPlanetas);
  };

  return (
    <div>
      <BarraNavegacion />
      <div className="content-container">
        <div className="personajes-header">
          <h2 onClick={toggleMostrarPersonajes}>Personajes</h2>
          {mostrarPersonajes && (
            <div className="personajes-container">
              <Personajes />
            </div>
          )}
        </div>
        <div className="vehiculos-header">
          <h2 onClick={toggleMostrarVehiculos}>Vehículos</h2>
          {mostrarVehiculos && (
            <div className="vehiculos-container">
              <Vehiculos />
            </div>
          )}
        </div>
        <div className="planetas-header">
          <h2 onClick={toggleMostrarPlanetas}>Planetas</h2>
          {mostrarPlanetas && (
            <div className="planetas-container">
              <Planetas />
            </div>
          )}
        </div>
      </div>
      <Footer /> {/* Agrega el Footer al final */}
    </div>
  );
}

export default App;





































