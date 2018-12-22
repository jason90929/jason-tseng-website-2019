import React, { Component } from 'react'
import Area from './Area'
import Portfolio from '../Portfolio/Portfolio'
import './second-area.scss'
import tourRingImage from '../../assets/images/portfolio/iStaging-TourRing.png'
import threeDDollHouseImage from '../../assets/images/portfolio/iStaging-3DDollHouse.png'
import nongDesignImage from '../../assets/images/portfolio/NongDesign.png'
import cnewsImage from '../../assets/images/portfolio/CNEWS.png'
import homeIntegrationImage from '../../assets/images/portfolio/Home-Integration.png'

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
      </Area>,
      <Area
        key="SecondArea3"
        className="second-area">
        <Portfolio
          text="NongDesign"
          title="NongDesign"
          image={nongDesignImage}
          color="#ffe500">
        </Portfolio>
      </Area>,
      <Area
        key="SecondArea4"
        className="second-area">
        <Portfolio
          text="NongDesign"
          title="CNEWS"
          image={cnewsImage}
          color="#21D8DA">
        </Portfolio>
      </Area>,
      <Area
        key="SecondArea5"
        className="second-area">
        <Portfolio
          text="NongDesign"
          title="Home Integration"
          image={homeIntegrationImage}
          color="#acacac">
        </Portfolio>
      </Area>
    ]
  }
}

export default SecondArea
