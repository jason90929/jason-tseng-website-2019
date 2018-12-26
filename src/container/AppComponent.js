import React from 'react'
import PropTypes from 'prop-types'

class AppComponent extends React.PureComponent {
  constructor (props, context) {
    super(props, context)

    this.state = {}
  }

  render () {
    return this.props.children
  }
}

AppComponent.propTypes = {
  children: PropTypes.node.isRequired
}

export default AppComponent
