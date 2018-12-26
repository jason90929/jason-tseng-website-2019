import { PureComponent } from 'react'
import connect from 'react-redux/es/connect/connect'
import loading from '../../actions/loading'

import {
  isMobile,
  loadImage
} from '../../resources/utility'

class Loading extends PureComponent {
  constructor () {
    super()
    let imageContext = require.context('../../assets/images', true, /\.(png|jpe?g|svg)$/)
    const filePaths = []
    imageContext.keys().forEach(key => {
      filePaths.push(imageContext(key))
    })
    if (!isMobile) {
      let videoContext = require.context('../../assets/videos', true, /\.mp4$/)
      videoContext.keys().forEach(key => {
        filePaths.push(videoContext(key))
      })
    }
    this.state = {
      filePaths
    }
  }

  componentDidMount () {
    this.props.setMaxLoading(this.state.filePaths.length)
    this.state.filePaths.forEach(data => {
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
