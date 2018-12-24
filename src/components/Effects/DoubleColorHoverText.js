import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './double-color-hover-text.scss'

class DoubleColorHoverText extends Component {
  static defaultProps = {
    className: '',
    text: 'Hover me.'
  }

  static propTypes = {
    className: PropTypes.string,
    text: PropTypes.string
  }

  render () {
    const className = cx('loader-wrapper', {
      [this.props.className]: this.props.className
    })
    return (
      <div className={className}>
        <p className="loader-text--model">{this.props.text}</p>
        <div className="loader-text-outer">
          <p className="loader-text loader-text--sizing">{this.props.text}</p>
          <div className="loader-text-inner"><p className="loader-text loader-text--mask">{this.props.text}</p>
          </div>
        </div>
        <div className="loader-text-outer-second">
          <p className="loader-text loader-text--sizing">{this.props.text}</p>
          <div className="loader-text-inner">
            <p className="loader-text loader-text--mask">{this.props.text}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default DoubleColorHoverText
