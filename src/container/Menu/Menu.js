import React, { Component } from 'react'
import MenuItem from './MenuItem'
import './menu.scss'

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
