import React, { Component } from 'react'
import Area from './Area'
import DoubleColorHoverText from '../../components/Effects/DoubleColorHoverText'
import './first-area.scss'

class FirstArea extends Component {
  render () {
    return (
      <Area className="first-area">
        <h1 className="first-area-title">
          Hello.
          <br />
          It's nice to see you here.
        </h1>
        <p className="first-area-text">
          I make a good project structure and smooth website developing.
        </p>
        <div className="scroll-down-position">
          <DoubleColorHoverText
            className="scroll-down-text"
            text="My portfolio">
          </DoubleColorHoverText>
        </div>
      </Area>
    )
  }
}

export default FirstArea
