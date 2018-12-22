import React, { Component } from 'react'
import Area from './Area'
import Portfolio from '../Portfolio/Portfolio'
import './second-area.scss'
import tourRingImage from '../../assets/images/portfolio/iStaging-TourRing.png'
import threeDDollHouseImage from '../../assets/images/portfolio/iStaging-3DDollHouse.png'

class SecondArea extends Component {
  render () {
    return [
      <Area
        key="SecondArea1"
        className="second-area">
        <Portfolio
          text="iStaging"
          title="TourRing"
          image={tourRingImage}
          color="#BBEA86">
        </Portfolio>
      </Area>,
      <Area
        key="SecondArea2"
        className="second-area">
        <Portfolio
          text="iStaging"
          title="3D DollHouse"
          image={threeDDollHouseImage}
          color="#dac9ff">
        </Portfolio>
        {/*FF9BB4*/}
      </Area>
    ]
  }
}

export default SecondArea
