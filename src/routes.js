import React from 'react';
// import Loadable from 'react-loadable';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Home from './pages/Home/Home'
import AppComponent from './container/AppComponent'
import Aside from './container/Aside/Aside'
import Footer from './container/Footer/Footer'
import Header from './container/Header/Header'
import Loading from './container/Loading'
import LogoLink from './container/Logo/LogoLink'
import Main from './container/Main/Main'

const routes = (
  <Router>
    <AppComponent>
      <Loading />
      <LogoLink />
      <Header />
      <Aside />
      <Main className="main">
        <Route exact path="/" component={Home} />
      </Main>
      <Footer />
    </AppComponent>
  </Router>
);

export default routes;
