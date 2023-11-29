import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useFavoritos } from '../store/FavoritosContext';

const Vehiculo = ({ vehiculoId }) => {
  const [vehiculo, setVehiculo] = useState(null);
  const navigate = useNavigate();
  const { agregarFavorito } = useFavoritos();

  useEffect(() => {
    const obtenerVehiculo = async () => {
      // Intenta obtener el vehículo del localStorage
      const storedVehiculo = localStorage.getItem(`vehiculo-${vehiculoId}`);

      if (storedVehiculo) {
        setVehiculo(JSON.parse(storedVehiculo));
      } else {
        try {
          const response = await axios.get(`https://www.swapi.tech/api/vehicles/${vehiculoId}`);
          const vehiculoData = response.data;
          // Guarda el vehículo en el localStorage
          localStorage.setItem(`vehiculo-${vehiculoId}`, JSON.stringify(vehiculoData));
          setVehiculo(vehiculoData);
        } catch (error) {
          console.error('Error al obtener el vehículo:', error);
        }
      }
    };

    obtenerVehiculo();
  }, [vehiculoId]);

  if (!vehiculo) {
    return null;
  }

  const properties = vehiculo.result && vehiculo.result.properties;

  if (!properties) {
    console.error('Las propiedades del vehículo son nulas.');
    return null;
  }

  const { name, model, manufacturer } = properties;

  const redirectToDetalle = () => {
    navigate(`/views/detallevehiculo/vehicles/${encodeURIComponent(name)}`);
  };

  const agregarAFavoritos = () => {
    agregarFavorito({
      id: vehiculoId,
      name,
    });
  };

  return (
    <div className="card">
      <img src="http://placehold.it/400x200" className="card-img-top" alt="Placehold.it" />
      <div className="card-body">
        <h5 className="card-title">{name || 'N/A'}</h5>
        <p className="card-text">
          <strong>Modelo:</strong> {model || 'N/A'}<br />
          <strong>Fabricante:</strong> {manufacturer || 'N/A'}
        </p>
        <button className="btn btn-outline-primary" type="button" onClick={redirectToDetalle}>
          Acerca de
        </button>
        <button className="btn btn-outline-warning" type="button" onClick={agregarAFavoritos}>
          <i className="bi bi-heart"></i> Favoritos
        </button>
      </div>
    </div>
  );
};

export default Vehiculo;






