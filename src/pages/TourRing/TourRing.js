import React, { PureComponent } from 'react'
import cx from 'classnames'
import connect from 'react-redux/es/connect/connect'
import { isMobile } from '../../resources/utility'
import Area from '../../container/Area/Area'
import Loading from '../../container/Loading/Loading'
import video from '../../assets/videos/tourring-preview-720.mp4'
import './tour-ring.scss'

class TourRing extends PureComponent {
  constructor () {
    super()

    this.state = {
      filePaths: []
    }
  }

  componentWillMount () {
    let imageContext = require.context('../../assets/images', true, /\.(png|jpe?g|svg)$/)
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
        <article className="tour-ring-area-article">
          <h1>TourRing</h1>
          <h2>iStaging</h2>
          <p>

          </p>
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
        </article>
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
