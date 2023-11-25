// Personajes.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Personaje from './Personaje';

const Personajes = () => {
  const [personajes, setPersonajes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const cargarPrimerosPersonajes = async () => {
    if (loading) return;
    setLoading(true);

    try {
      const response = await axios.get('https://www.swapi.tech/api/people?page=1&limit=3');
      setPersonajes(response.data.results);
      setTotalPages(Math.ceil(response.data.total_records / 10));
      setCurrentPage(1);
    } catch (error) {
      console.error('Error al cargar primeros personajes:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    cargarPrimerosPersonajes();
  }, []);

  return (
    <div className="container mt-3">
      <div className="row">
        {personajes.map((personaje, index) => (
          <div key={index} className="col-md-4 mb-4">
            <Personaje personajeId={personaje.uid} />
          </div>
        ))}
      </div>
      {totalPages > 1 && (
        <div className="text-center mt-3">
          <Link to="/todos-los-personajes" className="btn btn-primary mx-1">
            Ver Más
          </Link>
        </div>
      )}
    </div>
  );
};

export default Personajes;






















