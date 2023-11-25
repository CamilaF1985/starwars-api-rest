// Personaje.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Personaje = ({ personajeId }) => {
  const [personaje, setPersonaje] = useState(null);

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
    return null; // Puedes mostrar un mensaje de carga si lo deseas
  }

  const properties = personaje.result && personaje.result.properties;

  if (!properties) {
    return null; // Manejar el caso cuando no hay propiedades
  }

  const { name, gender, hair_color, eye_color } = properties;

  return (
    <div className="card" style={{ width: '18rem' }}>
      <img
        src="http://placehold.it/400x200"
        className="card-img-top"
        alt="Placehold.it"
      />
      <div className="card-body">
        <h5 className="card-title">{name || 'N/A'}</h5>
        <p className="card-text">
          <strong>Género:</strong> {gender || 'N/A'}<br />
          <strong>Color de pelo:</strong> {hair_color || 'N/A'}<br />
          <strong>Color de ojos:</strong> {eye_color || 'N/A'}
        </p>
        <button className="btn btn-outline-primary" type="button">
          Acerca de
        </button>
        <button className="btn btn-outline-warning" type="button">
          <i className="bi bi-heart"></i> Favoritos
        </button>
      </div>
    </div>
  );
};

export default Personaje;









