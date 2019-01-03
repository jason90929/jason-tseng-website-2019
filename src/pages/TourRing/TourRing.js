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
        <h1>Tour Ring</h1>
        <h2>iStaging</h2>
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
