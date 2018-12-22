import React, { Component } from 'react'
import Menu from '../Menu/Menu'
import './aside.scss'

class Aside extends Component {
  render () {
    return (
      <aside className="aside">
        <Menu />
      </aside>
    )
  }
}

export default Aside
