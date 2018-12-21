import React, { Component } from 'react'
import { connect } from 'react-redux';
import loading from '../../actions/loading';
import './background.scss'

class Background extends Component {
  constructor () {
    super()
    this.state = {
      boxActive: false
    }
  }

  componentDidMount () {
    window.setTimeout(() => {
      this.props.increment()
    }, 2000)
  }

  render () {
    let boxClass = 'box'
    if (this.props.isLoadingComplete === true) {
      boxClass += ' box-active'
    }
    return (
      <div className="background">
        <div className="box-container">
          <span className={boxClass} />
          <span className={boxClass} />
          <span className={boxClass} />
          <span className={boxClass} />
          <span className={boxClass} />
          <span className={boxClass} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
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
)(Background)
