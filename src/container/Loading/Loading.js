import React, { Component } from 'react'
import connect from 'react-redux/es/connect/connect'
import cx from 'classnames'
import loading from '../../actions/loading'
import pagination from '../../actions/pagination'
import Logo from '../Logo/Logo'
import './loading.scss'

class Loading extends Component {
  componentDidMount () {
    window.setTimeout(() => {
      this.props.increment()
    }, 2000)
  }

  render () {
    const className = cx('logo-position', {
      'logo-position-to-corner': this.props.isLoaded
    })
    const logoBgClass = this.props.isLoaded ? '' : 'logo-pulse-effect'
    const logoJClass = this.props.isLoaded ? '' : 'logo-j-rotate-effect'
    const homePage = this.props.pageList.findIndex(page => page === 'home')
    return (
      <a // eslint-disable-line
        className={className}
        role="button"
        onClick={() => {
          this.props.setPage(homePage)
        }}>
        <Logo
          logoBgClass={logoBgClass}
          logoJClass={logoJClass}
          size="144px">
        </Logo>
      </a>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    currentLoading: state.loading.currentLoading,
    isLoaded: state.loading.isLoaded,
    maxLoading: state.loading.maxLoading,
    pageList: state.pagination.pageList
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    increment: () => dispatch(loading.increment()),
    setPage: (page) => dispatch(pagination.setPage(page))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Loading)
