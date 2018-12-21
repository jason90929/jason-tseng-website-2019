import React, { Component } from 'react'
import Btn from '../../components/Btn/Btn'
import Icon from '../../components/Icon/Icon'
import vrViewerImage from '../../assets/images/portfolio/iStaging-VR-Viewer.png'
import './portfolio.scss'
import FullCenter from '../../components/FullCenter/FullCenter'
import Stroke from '../../components/Effects/Stroke'

class Portfolio extends Component {
  render () {
    return (
      <FullCenter className="portfolio">
        <div className="portfolio-content">
          <p className="portfolio-content-text">iStaging</p>
          <h1 className="portfolio-content-title">VR Viewer</h1>
          <div className="portfolio-btn-position">
            <Btn className="btn-no-default">
              <Stroke className="portfolio-btn-stroke-padding">
                <p className="portfolio-btn-text">SEE SHOWCASE</p>
              </Stroke>
            </Btn>
          </div>
        </div>
        <div className="portfolio-color-block"></div>
        <figure className="portfolio-figure">
          <Icon
            className="portfolio-image"
            height="100%"
            width="100%"
            style={{ backgroundSize: 'cover' }}
            image={vrViewerImage}>
          </Icon>
        </figure>
      </FullCenter>
    )
  }
}

export default Portfolio
