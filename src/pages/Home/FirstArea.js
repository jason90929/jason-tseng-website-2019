import React, { Component } from 'react'
import Area from '../../container/Area/Area'
import './first-area.scss'

class FirstArea extends Component {
  render () {
    return (
      <Area className="first-area">
        <h1 className="first-area-title first-area-frame-1">
          Hello.
          <br />
          It's nice to see you here.
        </h1>
        <p className="first-area-text first-area-frame-2">
          I make a good project structure and smooth website developing.
        </p>
      </Area>
    )
  }
}

export default FirstArea
