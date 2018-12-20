import React, { Component } from 'react'
import './menu.scss'
import MenuItem from './MenuItem'

class Menu extends Component {
  render () {
    return (
      <ul className="menu">
        <MenuItem text="About" />
        <MenuItem text="Work" />
        <MenuItem text="Contact" />
      </ul>
    )
  }
}

export default Menu
