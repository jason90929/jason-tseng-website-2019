import React, { Component } from 'react'
import connect from 'react-redux/es/connect/connect'
import DoubleColorHoverText from '../../components/Effects/DoubleColorHoverText'
import pagination from '../../actions/pagination'
import './aside.scss'

class Aside extends Component {
  render () {
    return (
      <aside className="aside">
        <div className="scroll-position">
          <a // eslint-disable-line
            role="button"
            onClick={this.props.toPortfolio}>
            <DoubleColorHoverText
              className="scroll-text"
              text="My portfolio">
            </DoubleColorHoverText>
          </a>
        </div>
      </aside>
    )
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    toPortfolio: () => dispatch(pagination.setPage(1))
  }
}

export default connect(
  undefined,
  mapDispatchToProps
)(Aside)
