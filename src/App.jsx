// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BarraNavegacion from './components/Navbar';
import Personajes from './components/Personajes';
import TodosLosPersonajes from './views/TodosLosPersonajes';

function App() {
  return (
    <Router>
      <div>
        <BarraNavegacion />
        <Routes>
          <Route path="/" element={<Personajes />} />
          <Route path="/todos-los-personajes" element={<TodosLosPersonajes />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;










