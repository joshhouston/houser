import React from 'react';
import Header from './Components/Header/Header';
import Dashboard from './Components/Dashboard/Dashboard';
import Wizard from './Components/Wizard/Wizard';
import {HashRouter} from 'react-router-dom';
import routes from './route';

import './App.css';

function App() {
  return (
    <HashRouter>
      <div>
        <Header />
        {routes}
      </div>
    </HashRouter>

  );
}

export default App;
