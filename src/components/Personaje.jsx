import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useFavoritos } from '../store/FavoritosContext';

const Personaje = ({ personajeId }) => {
  const [personaje, setPersonaje] = useState(null);
  const navigate = useNavigate();
  const { agregarFavorito, favoritos } = useFavoritos();

  useEffect(() => {
    const obtenerPersonaje = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/personajes/${personajeId}`);
        const personajeData = response.data;
        setPersonaje(personajeData);
      } catch (error) {
        console.error('Error al obtener el personaje:', error);
      }
    };

    obtenerPersonaje();
  }, [personajeId]);

  if (!personaje) {
    return null;
  }

  const { name, height, mass, hair_color, skin_color, eye_color, birth_year, gender } = personaje;

  const redirectToDetalle = () => {
    navigate(`/views/detallepersonaje/people/${encodeURIComponent(personajeId)}`);
  };

  const agregarAFavoritos = () => {
    // Verificar si el personaje ya está en favoritos
    const existeEnFavoritos = favoritos.some((fav) => fav.tipo === 'personaje' && fav.id === personajeId);

    if (!existeEnFavoritos) {
      agregarFavorito('personaje', personajeId);
    }
  };

  return (
    <div className="card">
      <img src="http://placehold.it/400x200" className="card-img-top" alt="Placehold.it" />
      <div className="card-body">
        <h5 className="card-title">{name || 'N/A'}</h5>
        <p className="card-text">
          <strong>Altura:</strong> {height || 'N/A'}<br />
          <strong>Peso:</strong> {mass || 'N/A'}<br />
          <strong>Color de cabello:</strong> {hair_color || 'N/A'}<br />
          <strong>Color de piel:</strong> {skin_color || 'N/A'}<br />
          <strong>Color de ojos:</strong> {eye_color || 'N/A'}<br />
          <strong>Año de nacimiento:</strong> {birth_year || 'N/A'}<br />
          <strong>Género:</strong> {gender || 'N/A'}
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

export default Personaje;

































