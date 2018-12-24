import React, { Component } from 'react'
import connect from 'react-redux/es/connect/connect'
import cx from 'classnames'
import Area from '../../container/Area/Area'
import './fourth-area.scss'

class FourthArea extends Component {
  render () {
    const className = cx('fourth-area', {
      'area-loaded': this.props.isLoaded && this.props.pageList[this.props.currentPage] === 'contact'
    })
    return (
      <Area
        className={className}>
        <h2 className="fourth-area-frame-1">
          Contact
        </h2>
        <p className="fourth-area-frame-2">
          <a href="mailto:tsaistorm@gmail.com">
            tsaistorm@gmail.com
          </a>
        </p>
      </Area>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    currentPage: state.pagination.currentPage,
    isLoaded: state.loading.isLoaded,
    pageList: state.pagination.pageList
  }
}

export default connect(
  mapStateToProps
)(FourthArea)
