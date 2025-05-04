import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import './styles/theme.css';
import App from './App';
import reportWebVitals from './utils/reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();