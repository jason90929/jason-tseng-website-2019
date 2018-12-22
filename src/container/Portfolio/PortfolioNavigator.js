import React, { Component } from 'react'
import './portfolio-navigator.scss'

class PortfolioNavigator extends Component {
  render () {
    return (
      <div className="portfolio-navigator">
        <span
          className="current-count-wrapper">
          <span className="current-count">1</span>
          <span className="current-count">2</span>
          <span className="current-count">3</span>
          <span className="current-count">4</span>
          <span className="current-count">5</span>
        </span>
        <span className="divider" />
        <span className="portfolio-count">5</span>
      </div>
    )
  }
}

export default PortfolioNavigator
