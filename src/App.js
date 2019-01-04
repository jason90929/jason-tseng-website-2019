import React, { Component } from 'react'
import { Router, Route } from 'react-router-dom'
import AppComponent from './container/AppComponent'
import LogoLink from './container/Logo/LogoLink'
import Home from './pages/Home/Home'
import TourRing from './pages/TourRing/TourRing'
import Footer from './container/Footer/Footer'

class App extends Component {
  render () {
    return (
      <Router history={this.props.history}>
        <AppComponent>
          <LogoLink/>
          <Route exact path="/tour-ring" component={TourRing}/>
          <Route exact path="/" component={Home}/>
          <Footer/>
        </AppComponent>
      </Router>
    )
  }
}

export default App