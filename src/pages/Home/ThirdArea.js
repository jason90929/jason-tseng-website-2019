import React, { Component } from 'react'
import connect from 'react-redux/es/connect/connect'
import cx from 'classnames'
import Area from '../../container/Area/Area'
import Portfolio from '../../container/Portfolio/Portfolio'
import tourRingVideo from  '../../assets/video/tourring-preview-720.mp4'
import threeDDollHouseVideo from  '../../assets/video/3ddollhouse-preview-720.mp4'
import nongDesignVideo from  '../../assets/video/nong-design-preview-720.mp4'
import homeIntegrationVideo from  '../../assets/video/home-i-preview-720.mp4'
import cnewsVideo from  '../../assets/video/cnews-preview-720.mp4'
import './third-area.scss'

class ThirdArea extends Component {
  state = {
    portfolio: [{
      text: 'iStaging',
      title: 'TourRing',
      video: tourRingVideo,
      color: '#BBEA86',
      onClick: () => {
        window.open('https://tourring.istaging.com/57ecd104816dfa005668e914')
      }
    }, {
      text: 'iStaging',
      title: '3D DollHouse',
      video: threeDDollHouseVideo,
      color: '#dac9ff',
      onClick: () => {
        window.open('http://3d-dollhouse.avosapps.us/scene/62cb3510-6708-4f62-94c3-f9936db7e20b')
      }
    }, {
      text: 'Nong Design',
      title: 'Nong Design',
      video: nongDesignVideo,
      color: '#ffe500',
      onClick: () => {
        window.open('https://nongdesign.site/')
      }
    }, {
      text: 'Nong Design',
      title: 'CNEWS',
      video: cnewsVideo,
      color: '#21D8DA',
      onClick: () => {
        window.open('https://cnews.com.tw/')
      }
    }, {
      text: 'Nong Design',
      title: 'Home Integration',
      video: homeIntegrationVideo,
      color: '#acacac',
      onClick: () => {
        window.open('http://home-i.com.tw/')
      }
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
            video={portfolio.video}
            color={portfolio.color}
            onClick={portfolio.onClick}
            textClass="third-area-frame-text"
            titleClass="third-area-frame-title"
            btnClass="third-area-frame-btn"
            previewClass="third-area-frame-preview"
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
  }
}

export default connect(
  mapStateToProps
)(ThirdArea)
