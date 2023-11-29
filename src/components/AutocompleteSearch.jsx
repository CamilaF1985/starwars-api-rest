import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const AutocompleteSearch = () => {
  const [inputValue, setInputValue] = useState('');
  const [sugerencias, setSugerencias] = useState([]);
  const navigate = useNavigate();

  const handleInputChange = async (e) => {
    const inputValue = e.target.value;
    setInputValue(inputValue);

    try {
      const response = await axios.get(`https://www.swapi.tech/api/people?name=${inputValue}`);
      const data = response.data.results;

      setSugerencias(data);
    } catch (error) {
      console.error('Error al obtener sugerencias:', error);
      setSugerencias([]);
    }
  };

  const handleSuggestionClick = (name) => {
    navigate(`/views/detallepersonaje/people/${name}`);
  };

  return (
    <div className="autocomplete-search">
      <input
        type="text"
        placeholder="Buscar personajes"
        value={inputValue}
        onChange={handleInputChange}
        className="form-control"
        style={{ borderRadius: '0.25rem' }}
      />

      {sugerencias?.map((sugerencia, index) => (
        <div key={index} onClick={() => handleSuggestionClick(sugerencia.name)}>
          <Link to={`/views/detallepersonaje/people/${sugerencia.name}`}>
            {sugerencia.name || 'Sin nombre'}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default AutocompleteSearch;

















