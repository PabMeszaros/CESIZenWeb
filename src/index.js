import React from 'react';
import ReactDOM from 'react-dom/client'; // Notez l'utilisation de react-dom/client
import App from './App';
import './index.css';




const root = ReactDOM.createRoot(document.getElementById('root')); // Créez un root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
