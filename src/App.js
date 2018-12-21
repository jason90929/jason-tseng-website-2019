import React, { Component } from 'react'
import Footer from './container/Footer'
import Header from './container/Header/Header'
import Main from './container/Main'

class App extends Component {
  render () {
    return [
      <Header key="Header" />,
      <Main key="Main" />,
      <Footer key="Footer" />
    ]
  }
}

export default App