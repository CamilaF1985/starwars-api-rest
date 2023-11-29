import React, { createContext, useContext, useState } from 'react';

const FavoritosContext = createContext();

export const FavoritosProvider = ({ children }) => {
  const [favoritos, setFavoritos] = useState([]);

  const agregarFavorito = (elemento) => {
    setFavoritos((prevFavoritos) => [...prevFavoritos, elemento]);
  };

  const eliminarFavorito = (elemento) => {
    setFavoritos((prevFavoritos) =>
      prevFavoritos.filter((fav) => fav.id !== elemento.id)
    );
  };

  return (
    <FavoritosContext.Provider
      value={{ favoritos, agregarFavorito, eliminarFavorito }}
    >
      {children}
    </FavoritosContext.Provider>
  );
};

export const useFavoritos = () => {
  return useContext(FavoritosContext);
};

export default FavoritosContext; 



