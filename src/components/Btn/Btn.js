import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './btn.scss'

class Btn extends PureComponent {
  static defaultProps = {
    className: '',
    onClick: () => {},
    children: null
  }

  static propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.node
  }

  render () {
    return (
      <button
        className={`btn ${this.props.className}`}
        onClick={this.props.onClick}>
        {this.props.children}
      </button>
    )
  }
}

export default Btn
