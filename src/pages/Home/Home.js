import React, { Component } from 'react'
import FirstArea from '../../container/Area/FirstArea'
import SecondArea from '../../container/Area/SecondArea'
import ThirdArea from '../../container/Area/ThirdArea'
import FourthArea from '../../container/Area/FourthArea'

class App extends Component {
  render () {
    return [
      <FirstArea key="FirstArea" />,
      <SecondArea key="SecondArea" />,
      <ThirdArea key="ThirdArea" />,
      <FourthArea key="FourthArea" />
    ]
  }
}

export default App
