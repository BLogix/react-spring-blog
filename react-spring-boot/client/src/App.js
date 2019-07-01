import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Survey from './pages/Survey';
import './styles/App.css';

export const App = () => (
  <Router>
      <Route to={'/'} component={Survey}/>
  </Router>
);
