import React, { Component } from 'react'
import Loading from '../Loading/Loading'
import FirstArea from '../Area/FirstArea'
import SecondArea from '../Area/SecondArea'

class Main extends Component {
  render () {
    return (
      <main className="main">
        <Loading />
        <FirstArea />
        <SecondArea />
      </main>
    )
  }
}

export default Main
