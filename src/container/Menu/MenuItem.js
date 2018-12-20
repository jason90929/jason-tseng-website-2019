import React, { Component } from 'react'
import './menu-item.scss'

class MenuItem extends Component {
  render () {
    return (
      <li className="menu-item">
        <a
          role="button">
          {this.props.text}
        </a>
      </li>
    )
  }
}

export default MenuItem
