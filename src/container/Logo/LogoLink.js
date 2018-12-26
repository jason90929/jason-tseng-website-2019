import React, { PureComponent } from 'react'
import connect from 'react-redux/es/connect/connect'
import cx from 'classnames'
import pagination from '../../actions/pagination'
import Icon from '../../components/Icon/Icon'
import Logo from './Logo'
import logoJOrange from '../../assets/images/logo/j-without-bg-orange.png'
import './logo-link.scss'

class LogoLink extends PureComponent {
  render () {
    const className = cx('logo-link', {
      'logo-link-to-corner': this.props.isLoaded
    })
    const logoBgClass = this.props.isLoaded ? '' : 'logo-pulse-effect'
    const logoJClass = this.props.isLoaded ? '' : 'logo-j-rotate-effect'
    const logoJOrangeClass = cx('load-progress logo-j-rotate-effect', {
      'load-progress-finished': this.props.isLoaded
    })
    const homePage = this.props.pageList.findIndex(page => page === 'home')
    const progress = (this.props.currentLoading / this.props.maxLoading) * 100
    const clipPath = this.props.isLoaded ? '' : `polygon(0 100%, 100% 100%, 100% ${100 - progress}%, 0 ${100 - progress}%)`
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
          <Icon
            className={logoJOrangeClass}
            style={{
              WebkitClipPath: clipPath,
              clipPath
            }}
            width="144px"
            height="144px"
            image={logoJOrange}
          />
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
