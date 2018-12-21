import React, { Component } from 'react'
import connect from 'react-redux/es/connect/connect'
import loading from '../../actions/loading'
import Background from '../Background/Background'
import FullCenter from '../../components/FullCenter/FullCenter'
// import Icon from '../../components/Icon/Icon'
// import fakeImage from '../../components/Icon/盧瑞山-1.jpg'
// import CircleEffect from '../../components/Effects/CircleEffect'

class Loading extends Component {
  componentDidMount () {
    window.setTimeout(() => {
      this.props.increment()
    }, 2000)
  }

  render () {
    return (
      <FullCenter className="loading">
        <Background
          boxActive={this.props.isLoadingComplete}
          key="Background" />
        {/*<Icon*/}
          {/*height="60px"*/}
          {/*width="60px"*/}
          {/*image={fakeImage}>*/}
          {/*<CircleEffect/>*/}
        {/*</Icon>*/}
      </FullCenter>
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
