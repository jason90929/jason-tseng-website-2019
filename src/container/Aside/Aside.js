import React, { Component } from 'react'
import DoubleColorHoverText from '../../components/Effects/DoubleColorHoverText'
import './aside.scss'

class Aside extends Component {
  render () {
    return (
      <aside className="aside">
        <div className="scroll-position">
          <DoubleColorHoverText
            className="scroll-text"
            text="My portfolio">
          </DoubleColorHoverText>
        </div>
      </aside>
    )
  }
}

export default Aside
