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
      const response = await axios.get('https://www.swapi.tech/api/vehicles');
      setVehiculos(response.data.results);
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
          <Vehiculo vehiculoId={vehiculo.uid} />
        </div>
      ))}
    </div>
  );
};

export default Vehiculos;

