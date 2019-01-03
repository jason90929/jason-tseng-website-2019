import React, { Component } from 'react'
import { Router, Route } from 'react-router-dom'
import AppComponent from './container/AppComponent'
import Loading from './container/Loading/Loading'
import LogoLink from './container/Logo/LogoLink'
import Main from './container/Main/Main'
import Home from './pages/Home/Home'
import TourRing from './pages/TourRing/TourRing'
import Footer from './container/Footer/Footer'

class App extends Component {
  render () {
    return (
      <Router history={this.props.history}>
        <AppComponent>
          <Loading/>
          <LogoLink/>
          <Main className="main">
            <Route exact path="/" component={Home}/>
            <Route exact path="/tour-ring" component={TourRing}/>
          </Main>
          <Footer/>
        </AppComponent>
      </Router>
    )
  }
}

export default App