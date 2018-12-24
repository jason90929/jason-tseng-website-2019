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
  render () {
    const startFrom = this.props.pageList.findIndex(page => page === 'portfolio')
    const shouldLoaded = this.props.isLoaded && this.props.pageList[this.props.currentPage] === 'portfolio'
    const className = cx('third-area', {
      'area-loaded': shouldLoaded && this.props.currentPage - startFrom === 0
    })
    const className1 = cx('third-area', {
      'area-loaded': shouldLoaded && this.props.currentPage - startFrom === 1
    })
    const className2 = cx('third-area', {
      'area-loaded': shouldLoaded && this.props.currentPage - startFrom === 2
    })
    const className3 = cx('third-area', {
      'area-loaded': shouldLoaded && this.props.currentPage - startFrom === 3
    })
    const className4 = cx('third-area', {
      'area-loaded': shouldLoaded && this.props.currentPage - startFrom === 4
    })
    return [
      <Area
        key="ThirdArea1"
        className={className}>
        <Portfolio
          text="iStaging"
          title="TourRing"
          image={tourRingImage}
          color="#BBEA86"
          textClass="third-area-frame-text"
          titleClass="third-area-frame-title"
          btnClass="third-area-frame-btn"
          imageClass="third-area-frame-image"
          colorClass="third-area-frame-color">
        </Portfolio>
      </Area>,
      <Area
        key="ThirdArea2"
        className={className1}>
        <Portfolio
          text="iStaging"
          title="3D DollHouse"
          image={threeDDollHouseImage}
          color="#dac9ff"
          textClass="third-area-frame-text"
          titleClass="third-area-frame-title"
          btnClass="third-area-frame-btn"
          imageClass="third-area-frame-image"
          colorClass="third-area-frame-color">
        </Portfolio>
      </Area>,
      <Area
        key="ThirdArea3"
        className={className2}>
        <Portfolio
          text="Nong Design"
          title="Nong Design"
          image={nongDesignImage}
          color="#ffe500"
          textClass="third-area-frame-text"
          titleClass="third-area-frame-title"
          btnClass="third-area-frame-btn"
          imageClass="third-area-frame-image"
          colorClass="third-area-frame-color">
        </Portfolio>
      </Area>,
      <Area
        key="ThirdArea4"
        className={className3}>
        <Portfolio
          text="Nong Design"
          title="CNEWS"
          image={cnewsImage}
          color="#21D8DA"
          textClass="third-area-frame-text"
          titleClass="third-area-frame-title"
          btnClass="third-area-frame-btn"
          imageClass="third-area-frame-image"
          colorClass="third-area-frame-color">
        </Portfolio>
      </Area>,
      <Area
        key="ThirdArea5"
        className={className4}>
        <Portfolio
          text="Nong Design"
          title="Home Integration"
          image={homeIntegrationImage}
          color="#acacac"
          textClass="third-area-frame-text"
          titleClass="third-area-frame-title"
          btnClass="third-area-frame-btn"
          imageClass="third-area-frame-image"
          colorClass="third-area-frame-color">
        </Portfolio>
      </Area>
    ]
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
