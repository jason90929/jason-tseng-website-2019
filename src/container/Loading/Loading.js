import { Component } from 'react'
import connect from 'react-redux/es/connect/connect'
import loading from '../../actions/loading'

import {
  loadImage
} from '../../resources/utility'

class Loading extends Component {
  constructor () {
    super()
    let context = require.context('../../assets/images', true, /\.(png|jpe?g|svg|mp4)$/)
    const imagePaths = []
    context.keys().forEach(key => {
      imagePaths.push(context(key))
    })
    this.state = {
      imagePaths
    }
  }

  componentDidMount () {
    this.props.setMaxLoading(this.state.imagePaths.length)
    this.state.imagePaths.forEach(data => {
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
