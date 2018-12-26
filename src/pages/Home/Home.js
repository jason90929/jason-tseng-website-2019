import React, { PureComponent } from 'react'
import FirstArea from './FirstArea'
import SecondArea from './SecondArea'
import ThirdArea from './ThirdArea'
import FourthArea from './FourthArea'

class App extends PureComponent {
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
