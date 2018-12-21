import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './modal.scss'

class Modal extends Component {
  static defaultProps = {
    closable: false,
    children: null
  }

  static propTypes = {
    closable: PropTypes.bool,
    children: PropTypes.node
  }

  constructor () {
    super()
    this.state = {
      active: false
    }
  }

  componentDidMount () {
    window.addEventListener('keydown', this.modalKeydown)
  }

  componentWillUnmount () {
    window.removeEventListener('keydown', this.modalKeydown)
  }

  modalKeydown (e) {
    if (e.keyCode === 27) { // 27 = esc
      this.closeModal()
    }
  }

  closeModal () {
    this.setState(prevState => ({
      active: false
    }))
  }

  render () {
    return (
      <div
        className="modal"
        onClick={this.props.closable ? this.closeModal : null}>
        {this.props.children}
      </div>
    )
  }
}

export default Modal
