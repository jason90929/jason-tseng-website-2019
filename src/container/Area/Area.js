import React, { Component } from 'react'
import connect from 'react-redux/es/connect/connect'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './area.scss'
import FullCenter from '../../components/FullCenter/FullCenter'
import Background from '../Background/Background'

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
          lineActive={this.props.isLoadingComplete}
          key="Background" />
        <section className={className}>
          {this.props.children}
        </section>
      </FullCenter>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isLoadingComplete: state.loading.isLoadingComplete
  };
};

export default connect(
  mapStateToProps
)(Area)
