import React from 'react';
import { useParams } from 'react-router-dom';

const RutaConNombre = ({ element: ElementoComponente }) => {
  const { id } = useParams();

  return <ElementoComponente name={id} />;
};

export default RutaConNombre;

















