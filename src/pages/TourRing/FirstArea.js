import React, { Component } from 'react'
import cx from 'classnames'
import connect from 'react-redux/es/connect/connect'
import Area from '../../container/Area/Area'
import './first-area.scss'

class FirstArea extends Component {
  // window.open('https://tourring.istaging.com/57ecd104816dfa005668e914')
  render () {
    const className = cx('first-area area-loaded')
    return (
      <Area className={className}>
        <h1>Tour Ring</h1>
        <h2>iStaging</h2>

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
)(FirstArea)
