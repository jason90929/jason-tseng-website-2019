import React, { Component } from 'react'
import Area from './Area'
import Portfolio from '../Portfolio/Portfolio'
import './third-area.scss'
import tourRingImage from '../../assets/images/portfolio/iStaging-TourRing.png'
import threeDDollHouseImage from '../../assets/images/portfolio/iStaging-3DDollHouse.png'
import nongDesignImage from '../../assets/images/portfolio/NongDesign.png'
import cnewsImage from '../../assets/images/portfolio/CNEWS.png'
import homeIntegrationImage from '../../assets/images/portfolio/Home-Integration.png'

class ThirdArea extends Component {
  render () {
    return [
      <Area
        key="ThirdArea1"
        className="third-area">
        <Portfolio
          text="iStaging"
          title="TourRing"
          image={tourRingImage}
          color="#BBEA86">
        </Portfolio>
      </Area>,
      <Area
        key="ThirdArea2"
        className="third-area">
        <Portfolio
          text="iStaging"
          title="3D DollHouse"
          image={threeDDollHouseImage}
          color="#dac9ff">
        </Portfolio>
      </Area>,
      <Area
        key="ThirdArea3"
        className="third-area">
        <Portfolio
          text="Nong Design"
          title="Nong Design"
          image={nongDesignImage}
          color="#ffe500">
        </Portfolio>
      </Area>,
      <Area
        key="ThirdArea4"
        className="third-area">
        <Portfolio
          text="Nong Design"
          title="CNEWS"
          image={cnewsImage}
          color="#21D8DA">
        </Portfolio>
      </Area>,
      <Area
        key="ThirdArea5"
        className="third-area">
        <Portfolio
          text="Nong Design"
          title="Home Integration"
          image={homeIntegrationImage}
          color="#acacac">
        </Portfolio>
      </Area>
    ]
  }
}

export default ThirdArea
