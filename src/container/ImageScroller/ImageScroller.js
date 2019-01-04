import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './image-scroller.scss'

class ImageScroller extends Component {
  constructor () {
    super()

    this.state = {
      scrollerEl: null,
      positionY: 0
    }
  }

  static defaultProps = {
    className: '',
    image: ''
  }

  static propTypes = {
    className: PropTypes.string,
    image: PropTypes.string.isRequired
  }

  componentDidMount () {
    document.addEventListener('scroll', this.onScroll)
    this.setState(prevState => ({
      scroller: this.refs.scroller
    }))
    window.setTimeout(() => {
      this.onScroll()
    }, 0)
  }

  componentWillUnmount () {
    document.removeEventListener('scroll', this.onScroll)
    this.setState(prevState => ({
      scroller: 0
    }))
  }

  onScroll = () => {
    if (this.state.scroller) {
      const rect = this.state.scroller.getBoundingClientRect()
      const elementTop = rect.top
      const elementHeight = rect.height
      const positionY = Math.max(0, Math.min(100, (((window.innerHeight / 2) - elementTop) * 100) / elementHeight))
      this.setState(prevState => ({
        positionY
      }))
    }
  }

  render () {
    const className = cx('image-scroller', {
      [this.props.className]: this.props.className,
    })
    return (
      <div className={className}>
        <div
          ref="scroller"
          className="image-scroller-bg"
          style={{
            backgroundPositionY: `${this.state.positionY}%`,
            backgroundImage: `url('${this.props.image}')`
          }}>
        </div>
      </div>
    )
  }
}

export default ImageScroller
