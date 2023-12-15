import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Personaje from './Personaje';

const Personajes = () => {
  const [personajes, setPersonajes] = useState([]);
  const [loading, setLoading] = useState(false);

  const cargarPersonajes = async () => {
    if (loading) return;
    setLoading(true);

    try {
      const response = await axios.get('http://localhost:3000/personajes');
      const personajesData = response.data;
      setPersonajes(personajesData);
    } catch (error) {
      console.error('Error al cargar personajes:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    cargarPersonajes();
  }, []);

  return (
    <div className="personajes-container">
      {personajes.map((personaje) => (
        <div key={personaje.id} className="personaje-card">
          <Personaje personajeId={personaje.id} />
        </div>
      ))}
    </div>
  );
};

export default Personajes;































