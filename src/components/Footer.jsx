import React, { useState } from 'react';
import AutocompleteSearchPersonajes from './AutocompleteSearchPersonajes';
import AutocompleteSearchPlanetas from './AutocompleteSearchPlanetas';
import AutocompleteSearchVehiculos from './AutocompleteSearchVehiculos';

const Footer = () => {
  const [tieneSugerenciasPersonajes, setTieneSugerenciasPersonajes] = useState(false);
  const [tieneSugerenciasPlanetas, setTieneSugerenciasPlanetas] = useState(false);
  const [tieneSugerenciasVehiculos, setTieneSugerenciasVehiculos] = useState(false);

  const actualizarSugerenciasPersonajes = (haySugerencias) => {
    setTieneSugerenciasPersonajes(haySugerencias);
  };

  const actualizarSugerenciasPlanetas = (haySugerencias) => {
    setTieneSugerenciasPlanetas(haySugerencias);
  };

  const actualizarSugerenciasVehiculos = (haySugerencias) => {
    setTieneSugerenciasVehiculos(haySugerencias);
  };

  return (
    <footer className={`bg-dark p-5 fixed-bottom ${tieneSugerenciasPersonajes || tieneSugerenciasPlanetas || tieneSugerenciasVehiculos ? 'con-sugerencias' : ''}`}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-6 col-md-4">
            <AutocompleteSearchPersonajes className="form-control" actualizarSugerencias={actualizarSugerenciasPersonajes} />
          </div>
          <div className="col-12 col-sm-6 col-md-4">
            <AutocompleteSearchPlanetas className="form-control" actualizarSugerencias={actualizarSugerenciasPlanetas} />
          </div>
          <div className="col-12 col-sm-6 col-md-4">
            <AutocompleteSearchVehiculos className="form-control" actualizarSugerencias={actualizarSugerenciasVehiculos} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;








