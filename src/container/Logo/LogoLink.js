import React, { Component } from 'react'
import connect from 'react-redux/es/connect/connect'
import cx from 'classnames'
import pagination from '../../actions/pagination'
import Logo from './Logo'
import './logo-link.scss'

class LogoLink extends Component {
  render () {
    const className = cx('logo-link', {
      'logo-link-to-corner': this.props.isLoaded
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
    setPage: (page) => dispatch(pagination.setPage(page))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LogoLink)
