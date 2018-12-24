import React, { Component } from 'react'
import connect from 'react-redux/es/connect/connect'
import cx from 'classnames'
import pagination from '../../actions/pagination'
import MenuItem from './MenuItem'
import './menu.scss'

class Menu extends Component {
  render () {
    const className = cx('menu', {
      'menu-loaded': this.props.isLoaded
    })
    const aboutMePage = this.props.pageList.findIndex(page => page === 'about')
    const portfolioPage = this.props.pageList.findIndex(page => page === 'portfolio')
    const contactPage = this.props.pageList.findIndex(page => page === 'contact')
    return (
      <div className="menu-position">
        <ul className={className}>
          <MenuItem
            text="About"
            onClick={() => this.props.setPage(aboutMePage)}
          />
          <MenuItem
            text="Portfolio"
            onClick={() => this.props.setPage(portfolioPage)}
          />
          <MenuItem
            text="Contact"
            onClick={() => this.props.setPage(contactPage)}
          />
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isLoaded: state.loading.isLoaded,
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
)(Menu)
