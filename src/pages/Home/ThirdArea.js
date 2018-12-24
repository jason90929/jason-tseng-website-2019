import React, { Component } from 'react'
import connect from 'react-redux/es/connect/connect'
import cx from 'classnames'
import Area from '../../container/Area/Area'
import Portfolio from '../../container/Portfolio/Portfolio'
import tourRingImage from '../../assets/images/portfolio/iStaging-TourRing.png'
import threeDDollHouseImage from '../../assets/images/portfolio/iStaging-3DDollHouse.png'
import nongDesignImage from '../../assets/images/portfolio/NongDesign.png'
import cnewsImage from '../../assets/images/portfolio/CNEWS.png'
import homeIntegrationImage from '../../assets/images/portfolio/Home-Integration.png'
import './third-area.scss'

class ThirdArea extends Component {
  state = {
    portfolio: [{
      text: 'iStaging',
      title: 'TourRing',
      image: tourRingImage,
      color: '#BBEA86'
    }, {
      text: 'iStaging',
      title: '3D DollHouse',
      image: threeDDollHouseImage,
      color: '#dac9ff'
    }, {
      text: 'Nong Design',
      title: 'Nong Design',
      image: nongDesignImage,
      color: '#ffe500'
    }, {
      text: 'Nong Design',
      title: 'CNEWS',
      image: cnewsImage,
      color: '#21D8DA'
    }, {
      text: 'Nong Design',
      title: 'Home Integration',
      image: homeIntegrationImage,
      color: '#acacac'
    }]
  }

  render () {
    const startFrom = this.props.pageList.findIndex(page => page === 'portfolio')
    const shouldLoaded = this.props.isLoaded && this.props.pageList[this.props.currentPage] === 'portfolio'
    return this.state.portfolio.map((portfolio, index) => {
      const className = cx('third-area', {
        'area-loaded': shouldLoaded && this.props.currentPage - startFrom === index
      })
      return (
        <Area
          key={`ThirdArea${index}`}
          className={className}>
          <Portfolio
            text={portfolio.text}
            title={portfolio.title}
            image={portfolio.image}
            color={portfolio.color}
            textClass="third-area-frame-text"
            titleClass="third-area-frame-title"
            btnClass="third-area-frame-btn"
            imageClass="third-area-frame-image"
            colorClass="third-area-frame-color">
          </Portfolio>
        </Area>
      )
    })
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    currentPage: state.pagination.currentPage,
    isLoaded: state.loading.isLoaded,
    pageList: state.pagination.pageList
  };
};

export default connect(
  mapStateToProps
)(ThirdArea)
