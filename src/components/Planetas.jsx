import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Planeta from './Planeta';

const Planetas = () => {
  const [planetas, setPlanetas] = useState([]);
  const [loading, setLoading] = useState(false);

  const cargarPlanetas = async () => {
    if (loading) return;
    setLoading(true);

    try {
      const response = await axios.get('https://www.swapi.tech/api/planets');
      setPlanetas(response.data.results);
    } catch (error) {
      console.error('Error al cargar planetas:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    cargarPlanetas();
  }, []);

  return (
    <div className="planetas-container">
      {planetas.map((planeta, index) => (
        <div key={index} className="planeta-card">
          <Planeta planetaId={planeta.uid} />
        </div>
      ))}
    </div>
  );
};

export default Planetas;
