import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useFavoritos } from '../store/FavoritosContext';

const Planeta = ({ planetaId }) => {
  const [planeta, setPlaneta] = useState(null);
  const navigate = useNavigate();
  const { agregarFavorito, favoritos } = useFavoritos();

  useEffect(() => {
    const obtenerPlaneta = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/planetas/${planetaId}`);
        const planetaData = response.data;
        setPlaneta(planetaData);
      } catch (error) {
        console.error('Error al obtener el planeta:', error);
      }
    };

    obtenerPlaneta();
  }, [planetaId]);

  if (!planeta) {
    return null;
  }

  const { name, population, gravity } = planeta;

  const redirectToDetalle = () => {
    navigate(`/vistas/detalleplanetas/${planeta.id}`);
  };

  const agregarAFavoritos = () => {
    const existeEnFavoritos = favoritos.some((fav) => fav.tipo === 'planeta' && fav.id === planetaId);

    if (!existeEnFavoritos) {
      agregarFavorito('planeta', planetaId);
    }
  };

  return (
    <div className="card">
      <img src="http://placehold.it/400x200" className="card-img-top" alt="Placehold.it" />
      <div className="card-body">
        <h5 className="card-title">{name || 'N/A'}</h5>
        <p className="card-text">
          <strong>Población:</strong> {population || 'N/A'}<br />
          <strong>Gravedad:</strong> {gravity || 'N/A'}
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

export default Planeta;







