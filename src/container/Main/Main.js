import React, { Component } from 'react'
import Loading from '../Loading/Loading'
import FirstArea from '../Area/FirstArea'

class Main extends Component {
  render () {
    return (
      <main>
        <Loading />
        <FirstArea />
      </main>
    )
  }
}

export default Main
