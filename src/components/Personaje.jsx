import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useFavoritos } from '../store/FavoritosContext'; 

const Personaje = ({ personajeId }) => {
  const [personaje, setPersonaje] = useState(null);
  const navigate = useNavigate();
  const { agregarFavorito } = useFavoritos(); 

  useEffect(() => {
    const obtenerPersonaje = async () => {
      try {
        const response = await axios.get(`https://www.swapi.tech/api/people/${personajeId}`);
        setPersonaje(response.data);
      } catch (error) {
        console.error('Error al obtener el personaje:', error);
      }
    };

    obtenerPersonaje();
  }, [personajeId]);

  if (!personaje) {
    return null;
  }

  const properties = personaje.result && personaje.result.properties;

  if (!properties) {
    console.error('Las propiedades del personaje son nulas.');
    return null;
  }

  const { name, gender, hair_color, eye_color } = properties;

  const redirectToDetalle = () => {
    navigate(`/views/detallepersonaje/people/${encodeURIComponent(name)}`);
  };

  const agregarAFavoritos = () => {
    agregarFavorito({
      id: personajeId,
      name,
    });
  };

  return (
    <div className="card">
      <img src="http://placehold.it/400x200" className="card-img-top" alt="Placehold.it" />
      <div className="card-body">
        <h5 className="card-title">{name || 'N/A'}</h5>
        <p className="card-text">
          <strong>Género:</strong> {gender || 'N/A'}<br />
          <strong>Color de pelo:</strong> {hair_color || 'N/A'}<br />
          <strong>Color de ojos:</strong> {eye_color || 'N/A'}
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



























