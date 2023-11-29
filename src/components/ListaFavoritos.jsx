import React from 'react';

const ListaFavoritos = ({ favoritos, onEliminarClick }) => (
  <div className="position-absolute end-0 mt-2 dropdown-personalizado">
    <div className="card bg-light dropdown-menu">
      <div className="card-body">
        {favoritos.length === 0 ? (
          <p className="dropdown-item">No hay elementos en favoritos.</p>
        ) : (
          favoritos.map((elemento, index) => (
            <div key={index} className="dropdown-item d-flex align-items-center">
              <span className="col-10">{elemento.name}</span>
              <i
                className="bi bi-trash text-dark col-2"
                onClick={() => onEliminarClick(elemento)}
                style={{ cursor: 'pointer' }}
              ></i>
            </div>
          ))
        )}
      </div>
    </div>
  </div>
);

export default ListaFavoritos;

