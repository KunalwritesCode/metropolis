import React from 'react';
import ReactDom from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import styles from './styles.css'


import App from './App';

const root = ReactDom.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </React.StrictMode>
)
