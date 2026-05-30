import React from 'react';
import ReactDOM from 'react-dom/client';

// Imports des styles
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './styles/custom.css';

import App from './App';

// Montage de l'application dans l'élément HTML avec l'id "root"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);