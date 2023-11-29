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
      // Intenta obtener los personajes del localStorage
      const storedPersonajes = localStorage.getItem('personajes');

      if (storedPersonajes) {
        setPersonajes(JSON.parse(storedPersonajes));
      } else {
        const response = await axios.get('https://www.swapi.tech/api/people');
        const personajesData = response.data.results;
        // Guarda los personajes en el localStorage
        localStorage.setItem('personajes', JSON.stringify(personajesData));
        setPersonajes(personajesData);
      }
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
      {personajes.map((personaje, index) => (
        <div key={index} className="personaje-card">
          <Personaje personajeId={personaje.uid} />
        </div>
      ))}
    </div>
  );
};

export default Personajes;






























