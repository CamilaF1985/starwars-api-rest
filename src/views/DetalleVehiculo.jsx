import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const DetalleVehiculo = () => {
  const { id } = useParams();
  const [vehiculo, setVehiculo] = useState(null);

  useEffect(() => {
    const obtenerVehiculo = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/vehiculos/${id}`); // Reemplaza con tu endpoint local

        if (response.data) {
          const vehiculoEncontrado = response.data;
          setVehiculo(vehiculoEncontrado);
        } else {
          console.error(`No se encontró el vehículo con el ID ${id}`);
        }
      } catch (error) {
        console.error(`Error al obtener el vehículo:`, error);
      }
    };

    obtenerVehiculo();
  }, [id]);

  if (!vehiculo) {
    return <p>Cargando...</p>;
  }

  const { name, description, ...restProperties } = vehiculo;

  return (
    <div>
      <Navbar />

      <div className="container mt-4">
        <div className="row">
          <div className="col-md-4">
            <img src="http://placehold.it/400x300" alt="Imagen de muestra" className="img-fluid" />
          </div>

          <div className="col-md-8">
            <h2>{name || 'N/A'}</h2>
            <p>{description || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}</p>
          </div>
        </div>

        <div className="my-4"></div>

        <div className="row">
          {Object.entries(restProperties).map(([key, value]) => (
            <div className="col-md-3" key={key}>
              <strong style={{ color: 'red' }}>{key}:</strong> {value || 'N/A'}
            </div>
          ))}
        </div>

        <div className="row">
          <div className="col-md-12">
            <Link to="/">Volver al inicio</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetalleVehiculo;







