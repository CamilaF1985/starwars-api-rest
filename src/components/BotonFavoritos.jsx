import React from 'react';

const BotonFavoritos = ({ onClick, cantidad }) => (
  <button className="btn btn-primary" onClick={onClick}>
    Favoritos ({cantidad})
  </button>
);

export default BotonFavoritos;
