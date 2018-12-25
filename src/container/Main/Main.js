import React, { Component } from 'react'
import { isMobile } from '../../resources/utility'
import connect from 'react-redux/es/connect/connect'
import pagination from '../../actions/pagination'
import './main.scss'

class Main extends Component {
  constructor () {
    super()
    this.onKeydown = this.onKeydown.bind(this)
    this.onMousewheel = this.onMousewheel.bind(this)
  }

  componentDidMount () {
    const rootEl = document.getElementById('root')
    if (rootEl && !isMobile) {
      window.addEventListener('keydown', this.onKeydown)
      rootEl.addEventListener('mousewheel', this.onMousewheel)
      rootEl.addEventListener('DOMMouseScroll', this.onMousewheel)
    }
    // window.setTimeout(() => {
    //   this.props.setPage(1)
    // }, 3000)
  }

  componentWillUnmount () {
    const rootEl = document.getElementById('root')
    if (rootEl && !isMobile) {
      window.removeEventListener('keydown', this.onKeydown)
      rootEl.removeEventListener('mousewheel', this.onMousewheel)
      rootEl.removeEventListener('DOMMouseScroll', this.onMousewheel)
    }
  }

  onKeydown (event) {
    if (this.props.isPaginationChanging) {
      return
    }
    if (event.keyCode === 37 ||
      event.keyCode === 38) {
      this.props.setPage(this.props.currentPage - 1)
    } else if (event.keyCode === 39 ||
      event.keyCode === 40) {
      this.props.setPage(this.props.currentPage + 1)
    }
  }

  onMousewheel (event) {
    if (this.props.isPaginationChanging) {
      return
    }

    const els = document.querySelectorAll('.area')
    const currentAreaEl = els[this.props.currentPage]
    var hasHorizontalScrollbar = currentAreaEl.scrollHeight > currentAreaEl.clientHeight
    if (hasHorizontalScrollbar) {
      return
    }

    // firefox使用detail:下3上-3,其他瀏覽器使用wheelDelta:下-120上120
    const page = (event.wheelDelta ? event.wheelDelta : -event.detail) >= 0 ? -1 : 1
    // 上滾 : 下滾
    this.props.setPage(this.props.currentPage + page)
  }

  render () {
    const x = this.props.currentPage * -100
    return (
      <main
        ref="main"
        className="main"
        style={{ transform: `translateX(${x}%)` }}>
        {this.props.children}
      </main>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    currentPage: state.pagination.currentPage,
    isPaginationChanging: state.pagination.isPaginationChanging
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setPage: (page) => dispatch(pagination.setPage(page))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main)
