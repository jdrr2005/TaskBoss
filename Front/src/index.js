import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Asegúrate de que esté importando App.js correctamente
import './index.css'; // Opcional: depende de cómo hayas configurado estilos

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
