import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Asegúrate de importar Link desde react-router-dom
import Personaje from '../components/Personaje';

const TodosLosPersonajes = () => {
  const [personajes, setPersonajes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(1);

  const cargarPersonajes = async (page) => {
    if (loading) return;
    setLoading(true);

    try {
      const response = await axios.get(`https://www.swapi.tech/api/people?page=${page}&limit=10`);
      setPersonajes(response.data.results);
      setTotalPages(Math.ceil(response.data.total_records / 10));
      setCurrentPage(page);
    } catch (error) {
      console.error('Error al cargar personajes:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    cargarPersonajes(1); // Cargar la primera página al montar el componente
  }, []);

  const generarEnlaces = () => {
    const enlaces = [];
    for (let i = 1; i <= totalPages; i++) {
      enlaces.push(
        <button key={i} onClick={() => cargarPersonajes(i)} className="btn btn-link mx-1">
          {i}
        </button>
      );
    }
    return enlaces;
  };

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
          {generarEnlaces()}
          <Link to="/" className="btn btn-link mx-1">Inicio</Link>
        </div>
      )}
    </div>
  );
};

export default TodosLosPersonajes;







