import React, { useState, useEffect } from 'react';
import { useFavoritos } from '../store/FavoritosContext';

const ListaFavoritos = () => {
  const { favoritos, eliminarFavorito } = useFavoritos();
  const [nombresFavoritos, setNombresFavoritos] = useState([]);

  useEffect(() => {
    const obtenerNombresFavoritos = async () => {
      const nombres = await Promise.all(
        favoritos.map(async (favorito) => {
          const tipo = favorito.tipo || determinarTipo(favorito);
          const endpoint = `http://localhost:3000/${tipo}s/${favorito.id}`;
          const response = await fetch(endpoint);
          const data = await response.json();
          return data.name; 
        })
      );
      setNombresFavoritos(nombres);
    };

    obtenerNombresFavoritos();
  }, [favoritos]);

  const handleEliminarClick = (favorito) => {
    const confirmarEliminar = window.confirm('¿Estás seguro de que quieres eliminar este favorito?');
    if (confirmarEliminar) {
      eliminarFavorito(favorito);
    }
  };

  return (
    <div className="position-absolute end-0 mt-2 dropdown-personalizado">
      <div className="card bg-light dropdown-menu">
        <div className="card-body">
          {nombresFavoritos.length === 0 ? (
            <p className="dropdown-item">No hay elementos en favoritos.</p>
          ) : (
            nombresFavoritos.map((nombre, index) => (
              <div key={index} className="dropdown-item d-flex align-items-center">
                <span className="col-10">{nombre || 'N/A'}</span>
                <i
                  className="bi bi-trash text-dark col-2"
                  onClick={() => handleEliminarClick(favoritos[index])}
                  style={{ cursor: 'pointer' }}
                ></i>
              </div>
            ))            
          )}
        </div>
      </div>
    </div>
  );
};

export default ListaFavoritos;













