import { Component } from 'react'
import PropTypes from 'prop-types'
import connect from 'react-redux/es/connect/connect'
import loading from '../../actions/loading'

import {
  loadImage
} from '../../resources/utility'

class Loading extends Component {
  static defaultProps = {
    preloadData: []
  }

  static propTypes = {
    preloadData: PropTypes.array
  }

  componentDidMount () {
    this.props.initLoading()
    this.props.setMaxLoading(this.props.preloadData.length)
    window.setTimeout(() => { // Wait animation finish
      this.props.preloadData.forEach(data => {
        loadImage(data, () => {
          this.props.increment()
        })
      })
    }, 1000)
  }

  render () {
    return null
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    initLoading: () => dispatch(loading.initLoading()),
    increment: () => dispatch(loading.increment()),
    setMaxLoading: (number) => dispatch(loading.setMaxLoading(number))
  }
}

export default connect(
  undefined,
  mapDispatchToProps
)(Loading)
