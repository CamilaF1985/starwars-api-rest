import React, { createContext, useContext, useState, useEffect } from 'react';

const FavoritosContext = createContext();

export const FavoritosProvider = ({ children }) => {
  // Lee favoritos del localStorage al cargar la página
  const storedFavoritos = localStorage.getItem('favoritos');
  const initialFavoritos = storedFavoritos ? JSON.parse(storedFavoritos) : [];

  const [favoritos, setFavoritos] = useState(initialFavoritos);

  const agregarFavorito = (elemento) => {
    setFavoritos((prevFavoritos) => [...prevFavoritos, elemento]);
  };

  const eliminarFavorito = (elemento) => {
    setFavoritos((prevFavoritos) =>
      prevFavoritos.filter((fav) => fav.id !== elemento.id)
    );
  };

  // Guarda favoritos en el localStorage cuando cambie
  useEffect(() => {
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
  }, [favoritos]);

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




