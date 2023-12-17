import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';  
import RoutesComponent from '../routes/RoutesComponent';

const root = document.getElementById('root');
const reactRoot = createRoot(root);

reactRoot.render(
  <React.StrictMode>
    <BrowserRouter>
      <RoutesComponent />
    </BrowserRouter>
  </React.StrictMode>
);








