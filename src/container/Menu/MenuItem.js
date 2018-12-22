import React, { Component } from 'react'
import PropTypes from 'prop-types'
import DoubleColorHoverText from '../../components/Effects/DoubleColorHoverText'
import './menu-item.scss'

class MenuItem extends Component {
  static defaultProps = {
    text: '',
    onClick: () => {}
  }

  static propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func
  }

  render () {
    return (
      <li className="menu-item">
        <a // eslint-disable-line
          role="button"
          onClick={this.props.onClick}>
          <DoubleColorHoverText
            className="menu-text"
            text={this.props.text}>
          </DoubleColorHoverText>
        </a>
      </li>
    )
  }
}

export default MenuItem
