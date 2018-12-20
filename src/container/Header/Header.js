import React, { Component } from 'react'
import './header.scss'

class Header extends Component {
  render () {
    return (
      <header className="header">
        <ul>
          <li>About</li>
          <li>Work</li>
          <li>Contact</li>
        </ul>
      </header>
    )
  }
}

export default Header
