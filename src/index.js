// src/index.js or src/App.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BookingProvider } from './context/BookingContext';

ReactDOM.render(
  <React.StrictMode>
    <BookingProvider>
      <App />
    </BookingProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
