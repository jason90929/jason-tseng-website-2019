import React, { Component } from 'react'
import './background.scss'

class Background extends Component {
  render () {
    let boxClass = 'box'
    if (this.props.boxActive === true) {
      boxClass += ' box-active'
    }
    return (
      <div className="background">
        <div className="box-container">
          <span className={boxClass} />
          <span className={boxClass} />
          <span className={boxClass} />
          <span className={boxClass} />
          <span className={boxClass} />
          <span className={boxClass} />
        </div>
      </div>
    )
  }
}

export default Background
