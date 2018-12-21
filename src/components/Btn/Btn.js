import React, { Component } from 'react'
import './btn.scss'

class Btn extends Component {
  render () {
    return (
      <button
        className={`btn ${this.props.className}`}
        onClick={this.props.onClick}>
        {this.props.children}
      </button>
    )
  }
}

export default Btn
