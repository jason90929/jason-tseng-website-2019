import React, { Component } from 'react'
import FirstArea from './FirstArea'
import SecondArea from './SecondArea'
import ThirdArea from './ThirdArea'
import FourthArea from './FourthArea'

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
