import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './circle-effect.scss'
import cx from 'classnames'

class CircleEffect extends Component {
  static defaultProps = {
    active: false,
    className: PropTypes.string
  }

  static propTypes = {
    active: PropTypes.bool,
    className: PropTypes.string
  }

  render () {
    const className = cx('circle', {
      'circle-active': this.props.active,
      [this.props.className]: this.props.className,
    })
    return (
      <svg
        className={className}
        version="1.1" xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="-3 -3 256 256"
        xmlSpace="preserve">
        <path
          fill="none"
          d="M125,0 C56,0,0,56,0,125s56,125,125,125s125-56,125-125S194,0,125,0L125,0z">
        </path>
      </svg>
    )
  }
}

export default CircleEffect
