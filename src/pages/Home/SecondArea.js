import React, { Component } from 'react'
import connect from 'react-redux/es/connect/connect'
import cx from 'classnames'
import Area from '../../container/Area/Area'
import './second-area.scss'

class SecondArea extends Component {
  render () {
    const className = cx('second-area', {
      'area-loaded': this.props.isLoaded && this.props.pageList[this.props.currentPage] === 'about'
    })
    return (
      <Area
        className={className}>
        <article>
          <h2 className="second-area-frame-1">
            About me
          </h2>
        </article>
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
)(SecondArea)
