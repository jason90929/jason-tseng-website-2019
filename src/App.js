import React, { Component } from 'react'
import Footer from './container/Footer'
import Header from './container/Header'
import Main from './container/Main'
import Background from './container/Background'

class App extends Component {
  render () {
    return [
      <Header key="Header" />,
      <Main key="Main" />,
      <Background key="Background" />,
      <Footer key="Footer" />
    ]
  }
}

export default App