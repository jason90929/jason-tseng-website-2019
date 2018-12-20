import React, { Component } from 'react'
import './background.scss'

class Background extends Component {
  constructor () {
    super()
    this.state = {
      boxActive: false
    }
  }

  componentDidMount () {
    window.setTimeout(() => {
      this.setState(() => ({
        boxActive: true
      }))
    }, 3000)
  }

  render () {
    let boxClass = 'box'
    if (this.state.boxActive === true) {
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
