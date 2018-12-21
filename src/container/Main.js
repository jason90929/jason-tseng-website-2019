import React, { Component } from 'react'
import Background from './Background/Background'
import Loading from '../components/Loading'

class Main extends Component {
  render () {
    return (
      <main>
        <Loading key="Loading" />
        <Background key="Background" />
      </main>
    )
  }
}

export default Main
