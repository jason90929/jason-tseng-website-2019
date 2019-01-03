import React, { PureComponent } from 'react'
import FirstArea from './FirstArea'
import SecondArea from './SecondArea'
import ThirdArea from './ThirdArea'
import FourthArea from './FourthArea'
import Header from '../../container/Header/Header'
import Aside from '../../container/Aside/Aside'
import HorizontalMove from '../../container/HorizontalMove/HorizontalMove'

class Home extends PureComponent {
  render () {
    return [
      <Header key="Header"/>,
      <Aside key="Aside"/>,
      <HorizontalMove key="HorizontalMove">
        <FirstArea/>
        <SecondArea/>
        <ThirdArea/>
        <FourthArea/>
      </HorizontalMove>
    ]
  }
}

export default Home
