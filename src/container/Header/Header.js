import React, { Component } from 'react'
import './header.scss'
import Menu from '../Menu/Menu'

class Header extends Component {
  render () {
    return (
      <header className="header">
        <Menu />
      </header>
    )
  }
}

export default Header
