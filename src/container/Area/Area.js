import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './area.scss'

class Area extends Component {
  static defaultProps = {
    className: ''
  }

  static propTypes = {
    className: PropTypes.string
  }

  render () {
    const className = cx('area', {
      [this.props.className]: this.props.className
    })
    return (
      <section className={className}>
        {this.props.children}
      </section>
    )
  }
}

export default Area
