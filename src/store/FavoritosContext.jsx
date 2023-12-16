import React, { createContext, useContext, useState, useEffect } from 'react';

const FavoritosContext = createContext();

export const FavoritosProvider = ({ children }) => {
  const storedFavoritos = localStorage.getItem('favoritos');
  const initialFavoritos = storedFavoritos ? JSON.parse(storedFavoritos) : [];

  const [favoritos, setFavoritos] = useState(initialFavoritos);

  const determinarTipo = (favorito) => {
    if (favorito.tipo) {
      return favorito.tipo;
    } else if (favorito.planeta_id) {
      return 'planeta';
    } else if (favorito.personaje_id) {
      return 'personaje';
    } else if (favorito.vehiculo_id) {
      return 'vehiculo';
    } else {
      return null;
    }
  };

  const agregarFavorito = (tipo, id) => {
    const endpoint = `http://localhost:3000/favorito/${tipo}/${id}`;

    fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`Error al agregar a favoritos: ${response.status}`);
        }
        setFavoritos((prevFavoritos) => [...prevFavoritos, { tipo, id }]);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  const eliminarFavorito = (favorito) => {
    const tipoEndpoint = determinarTipo(favorito);

    if (!tipoEndpoint) {
      console.error('Tipo de elemento no válido');
      return;
    }

    const endpoint = `http://localhost:3000/favorito/${tipoEndpoint}/${favorito.id}`;

    fetch(endpoint, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`Error al eliminar de favoritos: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setFavoritos((prevFavoritos) =>
          prevFavoritos.filter((fav) => !(fav.tipo === tipoEndpoint && fav.id === favorito.id))
        );
        console.log('Favorito eliminado exitosamente:', data);
      })
      .catch(error => {
        console.error('Error al eliminar favorito:', error);
      });
  };

  const obtenerFavoritosDesdeAPI = () => {
    const endpoint = 'http://localhost:3000/usuarios/favoritos';

    fetch(endpoint, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`Error al obtener favoritos: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setFavoritos(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  useEffect(() => {
    obtenerFavoritosDesdeAPI();
  }, []); 

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











