import React, { Component } from 'react'
import pagination from '../../actions/pagination'
import connect from 'react-redux/es/connect/connect'
import cx from 'classnames'
import './aside.scss'

class Aside extends Component {
  render () {
    const next = () => {
      this.props.setPage(this.props.currentPage + 1)
    }
    const className = cx('aside', {
      'aside-loaded': this.props.isLoaded
    })
    const nextPageClass = cx('next-page', {
      'next-page-last': this.props.currentPage === this.props.maxPage
    })
    return (
      <aside className={className}>
        <a // eslint-disable-line
          className={nextPageClass}
          role="button"
          onClick={next}>
          <span>Next</span>
        </a>
      </aside>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    currentPage: state.pagination.currentPage,
    isLoaded: state.loading.isLoaded,
    maxPage: state.pagination.maxPage
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setPage: (page) => dispatch(pagination.setPage(page))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Aside)
