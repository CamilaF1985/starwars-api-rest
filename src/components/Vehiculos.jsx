import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Vehiculo from './Vehiculo';

const Vehiculos = () => {
  const [vehiculos, setVehiculos] = useState([]);
  const [loading, setLoading] = useState(false);

  const cargarVehiculos = async () => {
    if (loading) return;
    setLoading(true);

    try {
      // Intenta obtener los vehículos del localStorage
      const storedVehiculos = localStorage.getItem('vehiculos');

      if (storedVehiculos) {
        setVehiculos(JSON.parse(storedVehiculos));
      } else {
        const response = await axios.get('http://localhost:3000/vehiculos');
        const vehiculosData = response.data;
        // Guarda los vehículos en el localStorage
        localStorage.setItem('vehiculos', JSON.stringify(vehiculosData));
        setVehiculos(vehiculosData);
      }
    } catch (error) {
      console.error('Error al cargar vehículos:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    cargarVehiculos();
  }, []);

  return (
    <div className="vehiculos-container">
      {vehiculos.map((vehiculo, index) => (
        <div key={index} className="vehiculo-card">
          <Vehiculo vehiculoId={vehiculo.id} />
        </div>
      ))}
    </div>
  );
};

export default Vehiculos;



