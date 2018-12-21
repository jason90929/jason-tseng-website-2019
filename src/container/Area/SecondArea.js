import React, { Component } from 'react'
import Area from './Area'
import Portfolio from '../Portfolio/Portfolio'
import './second-area.scss'

class SecondArea extends Component {
  render () {
    return (
      <Area className="second-area">
        <Portfolio>
        </Portfolio>
      </Area>
    )
  }
}

export default SecondArea
