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
      try {
        const response = await axios.get(`http://localhost:3000/vehiculos/${vehiculoId}`);
        const vehiculoData = response.data;
        setVehiculo(vehiculoData);
      } catch (error) {
        console.error('Error al obtener el vehículo:', error);
      }
    };

    obtenerVehiculo();
  }, [vehiculoId]);

  if (!vehiculo) {
    return null;
  }

  const { name, model, manufacturer } = vehiculo;

  const redirectToDetalle = () => {
    navigate(`/views/detallevehiculo/vehicles/${encodeURIComponent(vehiculoId)}`);
  };

  const agregarAFavoritos = () => {
    agregarFavorito('vehiculo', vehiculoId);
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








