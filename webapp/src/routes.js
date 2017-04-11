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


//template examples
import Charts from './views/Examples/Charts/'
import Buttons from './views/Examples/Components/Buttons/'
import Cards from './views/Examples/Components/Cards/'
import Forms from './views/Examples/Components/Forms/'
import Modals from './views/Examples/Components/Modals/'
import SocialButtons from './views/Examples/Components/SocialButtons/'
import Switches from './views/Examples/Components/Switches/'
import Tables from './views/Examples/Components/Tables/'
import Tabs from './views/Examples/Components/Tabs/'
import FontAwesome from './views/Examples/Icons/FontAwesome/'
import SimpleLineIcons from './views/Examples/Icons/SimpleLineIcons/'
import Login from './views/Examples/Pages/Login/'
import Register from './views/Examples/Pages/Register/'
import Page404 from './views/Examples/Pages/Page404/'
import Page500 from './views/Examples/Pages/Page500/'
import Widgets from './views/Examples/Widgets/'

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
        <Route path="buttons" name="Buttons" component={Buttons}/>
      </Route>
      <Route path="about" name="About" component={About}/>
      <Route path="components/" name="Components">
        <IndexRoute component={Buttons}/>
        <Route path="buttons" name="Buttons" component={Buttons}/>
        <Route path="cards" name="Cards" component={Cards}/>
        <Route path="forms" name="Forms" component={Forms}/>
        <Route path="modals" name="Modals" component={Modals}/>
        <Route path="social-buttons" name="Social Buttons" component={SocialButtons}/>
        <Route path="switches" name="Swithces" component={Switches}/>
        <Route path="tables" name="Tables" component={Tables}/>
        <Route path="tabs" name="Tabs" component={Tabs}/>
      </Route>
      <Route path="icons/" name="Icons">
        <IndexRoute component={FontAwesome}/>
        <Route path="font-awesome" name="Font Awesome" component={FontAwesome}/>
        <Route path="simple-line-icons" name="Simple Line Icons" component={SimpleLineIcons}/>
      </Route>
      <Route path="widgets" name="Widgets" component={Widgets}/>
      <Route path="charts" name="Charts" component={Charts}/>
    </Route>
    <Route path="pages/" name="Pages" component={Simple}>
      <IndexRoute component={Page404}/>
      <Route path="login" name="Login Page" component={Login}/>
      <Route path="register" name="Register Page" component={Register}/>
      <Route path="404" name="Page 404" component={Page404}/>
      <Route path="500" name="Page 500" component={Page500}/>
    </Route>
  </Router>
);
