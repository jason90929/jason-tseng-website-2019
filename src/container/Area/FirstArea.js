import React, { Component } from 'react'
import Area from './Area'
import './first-area.scss'

class FirstArea extends Component {
  render () {
    return (
      <Area className="first-area">
        <h2>Hello.</h2>
      </Area>
    )
  }
}

export default FirstArea
