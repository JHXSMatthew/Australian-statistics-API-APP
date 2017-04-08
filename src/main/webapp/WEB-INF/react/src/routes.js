import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

// Containers
import Full from './containers/Full/'
// import Simple from './containers/Simple/'

import Dashboard from './views/Dashboard/'
import Doc from './views/doc/'
import About from './views/about/'

export default (
  <Router history={hashHistory}>
    <Route path="/" name="Home" component={Full}>
      <IndexRoute component={Dashboard}/>
      <Route path="dashboard" name="Dashboard" component={Dashboard}/>
      <IndexRoute component={Doc}/>
      <Route path="doc" name="Doc" component={Doc}/>
      <IndexRoute component={About}/>
      <Route path="about" name="About" component={About}/>
    </Route>
  </Router>
);
