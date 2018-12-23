import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Icon from '../../components/Icon/Icon'
import logoJ from '../../assets/images/logo/j-without-bg.png'
import logoBg from '../../assets/images/logo/bg.png'
import './logo.scss'

class Logo extends Component {
  static defaultProps = {
    logoBgClass: ''
  }

  static propTypes = {
    logoBgClass: PropTypes.string
  }

  render () {
    return (
      <div className="logo">
        <Icon
          className={this.props.logoBgClass}
          height="36px"
          width="36px"
          image={logoBg}>
        </Icon>
        <Icon
          height="36px"
          width="36px"
          image={logoJ}>
        </Icon>
      </div>
    )
  }
}

export default Logo
