import { Component } from 'react'
import connect from 'react-redux/es/connect/connect'
import loading from '../actions/loading'
import { loadImage } from '../resources/utility'
import tourRingImage from '../assets/images/portfolio/iStaging-TourRing.png'
import threeDDollHouseImage from '../assets/images/portfolio/iStaging-3DDollHouse.png'
import nongDesignImage from '../assets/images/portfolio/NongDesign.png'
import cnewsImage from '../assets/images/portfolio/CNEWS.png'
import homeIntegrationImage from '../assets/images/portfolio/Home-Integration.png'
import tourRingVideo from  '../assets/video/tourring-preview-720.mp4'
import threeDDollHouseVideo from  '../assets/video/3ddollhouse-preview-720.mp4'
import nongDesignVideo from  '../assets/video/nong-design-preview-720.mp4'
import homeIntegrationVideo from  '../assets/video/home-i-preview-720.mp4'
import cnewsVideo from  '../assets/video/cnews-preview-720.mp4'

class Loading extends Component {
  state = {
    preloadData: [
      tourRingImage,
      threeDDollHouseImage,
      nongDesignImage,
      cnewsImage,
      homeIntegrationImage,
      tourRingVideo,
      threeDDollHouseVideo,
      nongDesignVideo,
      homeIntegrationVideo,
      cnewsVideo
    ]
  }

  componentDidMount () {
    this.props.setMaxLoading(this.state.preloadData.length)
    this.state.preloadData.forEach(data => {
      loadImage(data, () => {
        this.props.increment()
      })
    })
  }

  render () {
    return null
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    increment: () => dispatch(loading.increment()),
    setMaxLoading: (number) => dispatch(loading.setMaxLoading(number))
  }
}

export default connect(
  undefined,
  mapDispatchToProps
)(Loading)
