import React from 'react';
// import Loadable from 'react-loadable';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Home from './pages/Home/Home'
import AppComponent from './container/AppComponent'

const routes = (
  <Router>
    <AppComponent>
      <Route exact path="/" component={Home} />
    </AppComponent>
  </Router>
);

export default routes;
