import React, { Component } from 'react'
import Loading from '../../../container/Loading/Loading'
import FirstArea from '../../../container/Area/FirstArea'
import SecondArea from '../../../container/Area/SecondArea'

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
