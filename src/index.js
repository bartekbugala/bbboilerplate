import './styles/index.scss';

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';

const rootDiv = document.getElementById('root')

render(
  <Router>
    <App />
  </Router>,
  rootDiv.getElementById('root')
);
