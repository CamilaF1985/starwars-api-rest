// ListaFavoritos.jsx

import React from 'react';
import { useFavoritos } from '../store/FavoritosContext';

const ListaFavoritos = () => {
  const { favoritos, eliminarFavorito } = useFavoritos();

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
          {favoritos.length === 0 ? (
            <p className="dropdown-item">No hay elementos en favoritos.</p>
          ) : (
            favoritos.map((favorito, index) => (
              <div key={index} className="dropdown-item d-flex align-items-center">
                <span className="col-10">{favorito.elemento_nombre || 'N/A'}</span>
                <i
                  className="bi bi-trash text-dark col-2"
                  onClick={() => handleEliminarClick(favorito)}
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












