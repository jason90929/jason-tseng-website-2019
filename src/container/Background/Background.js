import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './background.scss'

class Background extends Component {
  static defaultProps = {
    boxActive: false
  }

  static propTypes = {
    boxActive: PropTypes.bool
  }

  render () {
    const boxClass = cx('box', {
      'box-active': this.props.boxActive
    })
    return (
      <div className="background">
        <div className="box-container">
          <span className={boxClass} />
          <span className={boxClass} />
          <span className={boxClass} />
          <span className={boxClass} />
          <span className={boxClass} />
          <span className={boxClass} />
        </div>
      </div>
    )
  }
}

export default Background
