import React, { PureComponent } from 'react'
import cx from 'classnames'
import connect from 'react-redux/es/connect/connect'
import { isMobile } from '../../resources/utility'
import Area from '../../container/Area/Area'
import Loading from '../../container/Loading/Loading'
import ImageScroller from '../../container/ImageScroller/ImageScroller'
import video from '../../assets/videos/tourring-preview-720.mp4'
import landingPageImage from '../../assets/images/tour-ring/landing-page.jpg'
import landingPageMobileImage from '../../assets/images/tour-ring/landing-page-mobile.jpg'
import communityImage from '../../assets/images/tour-ring/community.jpg'
import communityMobileImage from '../../assets/images/tour-ring/community-mobile.jpg'
import lectureRoomImage from '../../assets/images/tour-ring/lecture-room.jpg'
import lectureRoomMobileImage from '../../assets/images/tour-ring/lecture-room-mobile.jpg'
import virtualTourImage from '../../assets/images/tour-ring/virtual-tour.jpg'
import virtualTourMobileImage from '../../assets/images/tour-ring/virtual-tour-mobile.jpg'
// import landingPageMobileImage from './img/landing-page-mobile.jpg'
import './tour-ring.scss'

class TourRing extends PureComponent {
  constructor () {
    super()

    this.state = {
      filePaths: []
    }
  }

  componentWillMount () {
    let imageContext = require.context('../../assets/images/tour-ring', true, /\.(png|jpe?g|svg)$/)
    const filePaths = []
    imageContext.keys().forEach(key => {
      filePaths.push(imageContext(key))
    })
    if (!isMobile) {
      filePaths.push(video)
    }
    this.setState(prevState => ({
      filePaths
    }))
  }

  render () {
    const className = cx('tour-ring-area', {
      'area-loaded': this.props.isLoaded
    })
    return [
      <Loading
        preloadData={this.state.filePaths}
        key="Loading"/>,
      <Area
        className={className}
        key="Area">
        <article className="tour-ring-area-article tour-ring-area-first">
          <h1>TourRing</h1>
          <h2>iStaging</h2>
        </article>
        <div className="tour-ring-area-scroller">
          <ImageScroller
            image={landingPageImage}
            color="#BBEA86">
          </ImageScroller>
        </div>
        <div className="tour-ring-area-scroller">
          <ImageScroller
            className="image-scroller-mobile"
            image={landingPageMobileImage}
            color="#BBEA86">
          </ImageScroller>
        </div>
        <div className="tour-ring-area-scroller">
          <ImageScroller
            image={communityImage}
            color="#BBEA86">
          </ImageScroller>
        </div>
        <div className="tour-ring-area-scroller">
          <ImageScroller
            className="image-scroller-mobile"
            image={communityMobileImage}
            color="#BBEA86">
          </ImageScroller>
        </div>
        <div className="tour-ring-area-scroller">
          <ImageScroller
            image={lectureRoomImage}
            color="#BBEA86">
          </ImageScroller>
        </div>
        <div className="tour-ring-area-scroller">
          <ImageScroller
            className="image-scroller-mobile"
            image={lectureRoomMobileImage}
            color="#BBEA86">
          </ImageScroller>
        </div>
        <div className="tour-ring-area-scroller">
          <ImageScroller
            image={virtualTourImage}
            color="#BBEA86">
          </ImageScroller>
        </div>
        <div className="tour-ring-area-scroller">
          <ImageScroller
            className="image-scroller-mobile"
            image={virtualTourMobileImage}
            color="#BBEA86">
          </ImageScroller>
        </div>
        <div className="tour-ring-area-last">
          <div className="tour-ring-area-links">
            <em>Some introduction of TourRing:</em>
            <a
              href="https://www.youtube.com/watch?v=DmBkWe-g07A"
              target="_blank"
              rel="noopener noreferrer">
              TourRing 看房篇
            </a>
            <a
              href="https://www.youtube.com/watch?v=WfK87CNcvhM"
              target="_blank"
              rel="noopener noreferrer">
              TourRing
            </a>
            <a
              href="https://www.youtube.com/watch?v=zbYUZl02rzc"
              target="_blank"
              rel="noopener noreferrer">
              TourRing FR
            </a>
          </div>
        </div>
      </Area>
    ]
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    isLoaded: state.loading.isLoaded
  }
}

export default connect(
  mapStateToProps
)(TourRing)
