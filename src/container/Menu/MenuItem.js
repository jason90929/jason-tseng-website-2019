import React, { Component } from 'react'
import Btn from '../../components/Btn/Btn'
import './menu-item.scss'

class MenuItem extends Component {
  render () {
    return (
      <li className="menu-item">
        <Btn
          className="btn-no-default">
          {this.props.text}
        </Btn>
      </li>
    )
  }
}

export default MenuItem
