import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './image-scroller.scss'

class ImageScroller extends Component {
  static defaultProps = {
    scrollTarget: null,
    image: ''
  }

  static propTypes = {
    scrollTarget: PropTypes.object,
    image: PropTypes.string.isRequired
  }

  componentDidMount () {
    if (this.props.scrollTarget) {
      this.props.scrollTarget.addEventListener('scroll', this.onScroll)
    }
  }

  componentWillUnmount () {
    if (this.props.scrollTarget) {
      this.props.scrollTarget.removeEventListener('scroll', this.onScroll)
    }
  }

  onScroll = (e) => {
    console.log('e', e)
  }

  render () {
    const className = cx('image-scroller', {
    })
    return (
      <div className={className}>
        <div
          className="image-scroller-bg"
          style={{
            backgroundImage: `url('${this.props.image}')`
          }}>
        </div>
      </div>
    )
  }
}

export default ImageScroller
