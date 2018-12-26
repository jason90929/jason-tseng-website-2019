import React, { PureComponent } from 'react'
import connect from 'react-redux/es/connect/connect'
import cx from 'classnames'
import './portfolio-navigator.scss'

class PortfolioNavigator extends PureComponent {
  render () {
    const startFrom = this.props.pageList.findIndex(page => page === 'portfolio')
    const className = cx('portfolio-navigator', {
      'portfolio-navigator-active': this.props.pageList[this.props.currentPage] === 'portfolio'
    })
    let translateY = `-${(this.props.currentPage - startFrom) * 1.4}em` // same as $size in scss file
    return (
      <div className={className}>
        <div className="current-count-wrapper">
          <div className="current-count-inner">
            <div
              className="current-count-inside"
              style={{ transform: `translateY(${translateY})` }}>
              <span className="current-count">1</span>
              <span className="current-count">2</span>
              <span className="current-count">3</span>
              <span className="current-count">4</span>
              <span className="current-count">5</span>
            </div>
          </div>
        </div>
        <div className="divider" />
        <div className="portfolio-count">
          <div className="portfolio-count-inner">
            5
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    currentPage: state.pagination.currentPage,
    isPaginationChanging: state.pagination.isPaginationChanging,
    pageList: state.pagination.pageList
  }
}

export default connect(
  mapStateToProps
)(PortfolioNavigator)
