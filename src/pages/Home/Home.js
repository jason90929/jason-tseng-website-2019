import React, { Component } from 'react'
import FirstArea from '../../container/Area/FirstArea'
import SecondArea from '../../container/Area/SecondArea'

class App extends Component {
  render () {
    return [
      <FirstArea key="FirstArea" />,
      <SecondArea key="SecondArea" />
    ]
  }
}

export default App
