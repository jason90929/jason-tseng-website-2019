import React, { Component } from 'react'
import connect from 'react-redux/es/connect/connect'
import loading from '../../actions/loading'
import Background from '../Background/Background'
import FullCenter from '../../components/FullCenter/FullCenter'
import Logo from '../Logo'
import './loading.scss'

class Loading extends Component {
  componentDidMount () {
    window.setTimeout(() => {
      this.props.increment()
    }, 2000)
  }

  render () {
    return (
      <div className="logo-position">
        <Logo />
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
