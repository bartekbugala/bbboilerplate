import React, { useEffect, useState, useRef, createContext } from 'react';
/* import { Switch, Route, Redirect, useLocation } from 'react-router-dom'; */

import axios from 'axios';

export const AppContext = createContext(null);

export default function Transformer() {
  
  return (
    <AppContext.Provider value={null}>
      <main>
        <h1>BBBoilerplate</h1>
        <p>A custom React boilerplate</p>
        <h2>Features</h2>
        <ul>
          <li>Webpack</li>
          <li>Sass</li>
          <li>Styled-Components</li>
          <li>React-Router</li>
          <li>Axios</li>
          <li>Browser-Sync</li>
        </ul>
      </main>
    </AppContext.Provider>
  );
}
