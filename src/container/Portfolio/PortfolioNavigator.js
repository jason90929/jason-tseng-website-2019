import React, { Component } from 'react'
import connect from 'react-redux/es/connect/connect'
import cx from 'classnames'
import './portfolio-navigator.scss'

class PortfolioNavigator extends Component {
  render () {
    const className = cx('portfolio-navigator', {
      'portfolio-navigator-active': this.props.currentPage >= 1
    })
    let translateY = `-${(this.props.currentPage - 1) * 20}%`
    if (this.props.isPaginationChanging === false) {

    }
    return (
      <div className={className}>
        <span className="current-count-wrapper">
          <span
            className="current-count-inner"
            style={{ transform: `translateY(${translateY})` }}>
            <span className="current-count">1</span>
            <span className="current-count">2</span>
            <span className="current-count">3</span>
            <span className="current-count">4</span>
            <span className="current-count">5</span>
          </span>
        </span>
        <span className="divider" />
        <span className="portfolio-count">5</span>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    currentPage: state.pagination.currentPage,
    isPaginationChanging: state.pagination.isPaginationChanging
  }
}

export default connect(
  mapStateToProps
)(PortfolioNavigator)
