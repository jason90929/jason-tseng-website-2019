import React, { PureComponent } from 'react'
import FirstArea from './FirstArea'

class TourRing extends PureComponent {
  render () {
    return [
      <FirstArea key="FirstArea" />
    ]
  }
}

export default TourRing
