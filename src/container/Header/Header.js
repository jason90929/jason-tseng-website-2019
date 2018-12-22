import React, { Component } from 'react'
import PortfolioNavigator from '../Portfolio/PortfolioNavigator'
import Menu from '../Menu/Menu'
import './header.scss'

class Header extends Component {
  render () {
    return (
      <header className="header">
        <Menu />
        <PortfolioNavigator />
      </header>
    )
  }
}

export default Header
