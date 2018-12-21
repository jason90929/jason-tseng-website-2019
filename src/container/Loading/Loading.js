import React, { Component } from 'react'
import loading from '../../actions/loading'
import connect from 'react-redux/es/connect/connect'
import Background from '../Background/Background'

class Loading extends Component {
  componentDidMount () {
    window.setTimeout(() => {
      this.props.increment()
    }, 2000)
  }

  render () {
    return (
      <div className="loading">
        <Background
          boxActive={this.props.isLoadingComplete}
          key="Background" />
      </div>
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
