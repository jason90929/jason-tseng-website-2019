import React, { Component } from 'react'
import connect from 'react-redux/es/connect/connect'
import PropTypes from 'prop-types'
import cx from 'classnames'
import FullCenter from '../../components/FullCenter/FullCenter'
import Background from '../Background/Background'
import './area.scss'

class Area extends Component {
  static defaultProps = {
    className: ''
  }

  static propTypes = {
    className: PropTypes.string
  }

  render () {
    const className = cx('area', {
      [this.props.className]: this.props.className
    })
    return (
      <FullCenter className="loading">
        <Background
          lineActive={this.props.isLoaded}
          key="Background"
        />
        <section className={className}>
          {this.props.children}
        </section>
      </FullCenter>
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
)(Area)
