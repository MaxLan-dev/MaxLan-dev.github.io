import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './styles/theme.css';
import App from './App';
import reportWebVitals from './utils/reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();