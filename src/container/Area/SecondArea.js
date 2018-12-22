import React, { Component } from 'react'
import Area from './Area'
import './second-area.scss'

class SecondArea extends Component {
  render () {
    return (
      <Area
        key="SecondArea1"
        className="second-area">
        About me
      </Area>
    )
  }
}

export default SecondArea
