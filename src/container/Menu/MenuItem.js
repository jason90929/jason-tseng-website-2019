import React, { Component } from 'react'
import {
  Link as ALink,
} from 'react-router-dom';
import Btn from '../../components/Btn/Btn'
import PropTypes from 'prop-types'
import './menu-item.scss'

class MenuItem extends Component {
  static defaultProps = {
    text: '',
    to: ''
  }

  static propTypes = {
    text: PropTypes.string,
    to: PropTypes.string
  }

  render () {
    let liInner = (
      <Btn
        className="btn-no-default">
        {this.props.text}
      </Btn>
    )
    if (this.props.to) {
      liInner = (
        <ALink>

        </ALink>
      )
    }
    return (
      <li className="menu-item">
        {liInner}
      </li>
    )
  }
}

export default MenuItem
