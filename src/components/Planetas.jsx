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
      const storedPlanetas = localStorage.getItem('planetas');

      if (storedPlanetas) {
        setPlanetas(JSON.parse(storedPlanetas));
      } else {
        const response = await axios.get('http://localhost:3000/planetas');
        const planetasData = response.data;
        localStorage.setItem('planetas', JSON.stringify(planetasData));
        setPlanetas(planetasData);
      }
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
          <Planeta planetaId={planeta.id} />
        </div>
      ))}
    </div>
  );
};

export default Planetas;


