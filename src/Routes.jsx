// Routes.jsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Personajes from './components/Personajes';
import TodosLosPersonajes from './views/TodosLosPersonajes';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/personajes" element={<Personajes />} />
      <Route path="/todos-los-personajes" element={<TodosLosPersonajes />} />
    </Routes>
  );
};

export default AppRoutes;
