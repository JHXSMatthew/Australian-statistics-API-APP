import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

// Containers
import Full from './containers/Full/'
import Simple from './containers/Simple/'

// OUR VIEWS
import Release from './views/Statistics/Release/'
import DataAnalyzer from './views/Statistics/DataAnalyzer'
import DeveloperAPI from './views/Statistics/Doc/DeveloperAPI'
  import ParameterConstraints from './views/Statistics/Doc/DeveloperAPI/ParameterConstraints'
  import Retail from './views/Statistics/Doc/DeveloperAPI/Retail'
  import MerchandiseExports from './views/Statistics/Doc/DeveloperAPI/MerchandiseExports'
  import Errors from './views/Statistics/Doc/DeveloperAPI/Errors'
import About from './views/Others/About/'
import Documentation from './views/Others/Documentation/' //yeh nah
import GettingStarted from './views/Statistics/Doc/GettingStarted'


export default (
  <Router history={hashHistory}>
    <Route path="/" name="Home" component={Full}>
      <IndexRoute component={Release}/>
      <Route path="release" name="Release" component={Release}/>
      <Route path="dataAnalyzer" name="Data Analyzer" component={DataAnalyzer}/>
      <Route path="documentation/" name="Documentation">
        <Route path="doc" name="Documentation" component={Documentation}/>
        <Route path="GettingStarted" name="GettingStarted" component={GettingStarted}/>
        <Route path="developerAPI" name="Developer API" component={DeveloperAPI}/>
          <Route path="ParameterConstraints" name="Parameter Constraints" component={ParameterConstraints}/>
          <Route path="Retail" name="Retail" component={Retail}/>
          <Route path="MerchandiseExports" name="Merchanise Exports" component={MerchandiseExports}/>
          <Route path="Errors" name="Errors" component={Errors}/>
      </Route>
      <Route path="about" name="About" component={About}/>
    </Route>
  </Router>
);
