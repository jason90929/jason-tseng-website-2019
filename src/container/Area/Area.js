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
      [this.props.className]: this.props.className,
      'area-loaded': this.props.isLoaded
    })
    return (
      <FullCenter className="loading">
        <Background
          lineActive={this.props.isLoaded}
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
    isLoaded: state.loading.isLoaded
  };
};

export default connect(
  mapStateToProps
)(Area)
