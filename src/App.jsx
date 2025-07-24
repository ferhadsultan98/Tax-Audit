import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from './Languages/i18n'; // Import the i18n configuration
import AppRoutes from './Routes/Routes';
import './App.css';
import ScrollButton from './Components/ScrollButton/ScrollButton';

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <Router>
        <AppRoutes />
        <ScrollButton/>
      </Router>
    </I18nextProvider>
  );
}

export default App;