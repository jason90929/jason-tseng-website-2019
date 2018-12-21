import React, { Component } from 'react'
import { connect } from 'react-redux';
import './background.scss'

class Background extends Component {
  constructor () {
    super()
    this.state = {
      boxActive: false
    }
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

export default connect(
  mapStateToProps
)(Background)
