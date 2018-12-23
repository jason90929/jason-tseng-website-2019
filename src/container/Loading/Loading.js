import React, { Component } from 'react'
import connect from 'react-redux/es/connect/connect'
import loading from '../../actions/loading'
import pagination from '../../actions/pagination'
import Logo from '../Logo'
import './loading.scss'

class Loading extends Component {
  componentDidMount () {
    window.setTimeout(() => {
      this.props.increment()
    }, 2000)
  }

  render () {
    const homePage = this.props.pageList.findIndex(page => page === 'home')
    return (
      <div className="logo-position">
        <a // eslint-disable-line
          role="button"
          onClick={() => { this.props.setPage(homePage) }}>
          <Logo />
        </a>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    currentLoading: state.loading.currentLoading,
    isLoadingComplete: state.loading.isLoadingComplete,
    maxLoading: state.loading.maxLoading,
    pageList: state.pagination.pageList
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    increment: () => dispatch(loading.increment()),
    setPage: (page) => dispatch(pagination.setPage(page))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Loading)
