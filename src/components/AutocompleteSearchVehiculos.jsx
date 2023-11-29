import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AutocompleteSearchVehiculos = ({ actualizarSugerencias }) => {
  const [inputValue, setInputValue] = useState('');
  const [sugerencias, setSugerencias] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSuggestions = async () => {
      try {
        const response = await axios.get(`https://www.swapi.tech/api/vehicles`);
        const data = response.data.results.filter(vehiculo =>
          vehiculo.name.toLowerCase().includes(inputValue.toLowerCase())
        );
        setSugerencias(data);
        actualizarSugerencias(data.length > 0);
      } catch (error) {
        console.error('Error al obtener sugerencias:', error);
        setSugerencias([]);
        actualizarSugerencias(false);
      }
    };

    if (inputValue.length >= 3) {
      fetchSuggestions();
    } else {
      setSugerencias([]);
      actualizarSugerencias(false);
    }
  }, [inputValue, actualizarSugerencias]);

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setInputValue(inputValue);
  };

  const handleSuggestionClick = (name) => {
    navigate(`/views/detallevehiculo/vehicles/${name}`);
  };

  return (
    <div className="position-relative">
      <input
        type="text"
        id="searchInputVehiculos"
        placeholder="Buscar vehículos"
        value={inputValue}
        onChange={handleInputChange}
        className="form-control"
        style={{ borderRadius: '0.25rem' }}
      />

      {sugerencias?.length > 0 && (
        <div className="position-absolute start-0 mt-2 w-100 dropdown-personalizado" style={{ bottom: '100%' }}>
          <div className="card bg-light dropdown-menu">
            <div className="card-body">
              {sugerencias.map((sugerencia, index) => (
                <div
                  key={index}
                  className="dropdown-item d-flex align-items-center"
                  style={{ cursor: 'pointer' }}
                >
                  <span className="col-10">{sugerencia.name}</span>
                  <button
                    className="btn btn-primary btn-sm ms-auto"
                    onClick={() => handleSuggestionClick(sugerencia.name)}
                  >
                    Detalle
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AutocompleteSearchVehiculos;
