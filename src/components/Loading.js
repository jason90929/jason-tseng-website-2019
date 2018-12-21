import React, { Component } from 'react'
import loading from '../actions/loading'
import connect from 'react-redux/es/connect/connect'

class Loading extends Component {
  componentDidMount () {
    window.setTimeout(() => {
      this.props.increment()
    }, 2000)
  }

  render () {
    return (
      <progress
        value={this.props.currentLoading}
        max={this.props.maxLoading}>
      </progress>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    currentLoading: state.loading.currentLoading,
    maxLoading: state.loading.maxLoading,
    isLoadingComplete: state.loading.isLoadingComplete
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    increment: () => dispatch(loading.increment())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Loading)
