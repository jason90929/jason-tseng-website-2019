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
    const pageAbout = this.props.pageList[this.props.currentPage] === 'about'
    const pagePortfolio = this.props.pageList[this.props.currentPage] === 'portfolio'
    const pageContact = this.props.pageList[this.props.currentPage] === 'contact'
    console.log('pageAbout\n' +
      'pagePortfolio\n' +
      'pageContact', pageAbout,
    pagePortfolio,
    pageContact)
    return (
      <div className="menu-position">
        <ul className={className}>
          <MenuItem
            text="About"
            className={pageAbout ? 'menu-item-active' : ''}
            onClick={() => this.props.setPage(aboutMePage)}
          />
          <MenuItem
            text="Portfolio"
            className={pagePortfolio ? 'menu-item-active' : ''}
            onClick={() => this.props.setPage(portfolioPage)}
          />
          <MenuItem
            text="Contact"
            className={pageContact ? 'menu-item-active' : ''}
            onClick={() => this.props.setPage(contactPage)}
          />
        </ul>
      </div>
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

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setPage: (page) => dispatch(pagination.setPage(page))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu)
