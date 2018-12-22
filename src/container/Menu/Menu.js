import React, { Component } from 'react'
import connect from 'react-redux/es/connect/connect'
import pagination from '../../actions/pagination'
import MenuItem from './MenuItem'
import './menu.scss'

class Menu extends Component {
  render () {
    return (
      <div className="menu-position">
        <ul className="menu">
          <MenuItem
            text="About"
          />
          <MenuItem
            text="Portfolio"
            onClick={this.props.toPortfolio}
          />
          <MenuItem
            text="Contact"
          />
        </ul>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    toPortfolio: () => dispatch(pagination.setPage(1))
  }
}

export default  connect(
  undefined,
  mapDispatchToProps
)(Menu)
