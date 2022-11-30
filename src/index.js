import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './asets/HelveticaNeueCyr-Light.ttf'
import './asets/Akrobat_Bold.ttf';
import './asets/HelveticaNeueCyr-Roman.ttf';
import'./asets/Akrobat-SemiBold.ttf'
import './asets/BebasNeueRegular.ttf';
import './asets/bebasneuecyrillic.ttf'
import {ContextProvider} from "./contexts/dataContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <ContextProvider>
          <Router>
              <App />
          </Router>
      </ContextProvider>
  </React.StrictMode>
);

reportWebVitals();
