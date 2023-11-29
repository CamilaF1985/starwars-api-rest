import React, { useState } from 'react';
import Logo from './Logo';
import BotonFavoritos from './BotonFavoritos';
import ListaFavoritos from './ListaFavoritos';
import { useFavoritos } from '../store/FavoritosContext';

const BarraNavegacion = () => {
  const { favoritos, eliminarFavorito } = useFavoritos();
  const [mostrarFavoritos, setMostrarFavoritos] = useState(false);

  const manejarClicFavoritos = () => {
    setMostrarFavoritos(!mostrarFavoritos);
  };

  const eliminarFavoritoClick = (elemento) => {
    eliminarFavorito(elemento);
  };

  return (
    <nav className="navbar navbar-light bg-light barra-personalizada">
      <div className="container-fluid">
        <Logo />
        <div className="position-relative">
          <BotonFavoritos onClick={manejarClicFavoritos} cantidad={favoritos.length} />
          {mostrarFavoritos && (
            <ListaFavoritos favoritos={favoritos} onEliminarClick={eliminarFavoritoClick} />
          )}
        </div>
      </div>
    </nav>
  );
};

export default BarraNavegacion;

















