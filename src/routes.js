import React from 'react';
// import Loadable from 'react-loadable';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Home from './pages/Home/Home'
import AppComponent from './container/AppComponent'
import Header from './container/Header/Header'
import Footer from './container/Footer'
import Loading from './container/Loading/Loading'
import Aside from './container/Aside/Aside'
import './routes.scss'

const routes = (
  <Router>
    <AppComponent>
      <Loading />
      <Header />
      <Aside/>
      <main className="main">
        <Route exact path="/" component={Home} />
      </main>
      <Footer />
    </AppComponent>
  </Router>
);

export default routes;