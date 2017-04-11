import React from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory } from 'react-router';
import 'react-select/dist/react-select.css';
import "react-month-picker/css/month-picker.css"
import routes from './routes';

ReactDOM.render(
  <Router routes={routes} history={hashHistory} />, document.getElementById('root')
);
