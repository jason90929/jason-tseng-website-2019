import React, { Component } from 'react'
import CircleEffect from '../components/Effects/CircleEffect'
import Icon from '../components/Icon/Icon'
import logo from '../assets/images/j.png'

class Logo extends Component {
  render () {
    return (
      <Icon
        height="36px"
        width="36px"
        image={logo}>
        <CircleEffect/>
      </Icon>
    )
  }
}

export default Logo
