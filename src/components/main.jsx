// index.jsx o main.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import RoutesComponent from '../RoutesComponent';

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <RoutesComponent />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);





