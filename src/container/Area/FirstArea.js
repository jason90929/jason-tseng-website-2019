import React, { Component } from 'react'
import Area from './Area'
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
      </Area>
    )
  }
}

export default FirstArea
