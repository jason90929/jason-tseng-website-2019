import React, { Component } from 'react'
import connect from 'react-redux/es/connect/connect'
import pagination from '../../actions/pagination'
import './main.scss'

class Main extends Component {
  constructor () {
    super()
    this.onMousewheel = this.onMousewheel.bind(this)
  }

  componentDidMount () {
    if (this.refs.main) {
      this.refs.main.addEventListener('mousewheel', this.onMousewheel)
      this.refs.main.addEventListener('DOMMouseScroll', this.onMousewheel)
    }
    // window.setTimeout(() => {
    //   this.props.setPage(1)
    // }, 3000)
  }

  componentWillUnmount () {
    if (this.refs.main) {
      this.refs.main.removeEventListener('mousewheel', this.onMousewheel)
      this.refs.main.removeEventListener('DOMMouseScroll', this.onMousewheel)
    }
  }

  onMousewheel (event) {
    if (this.props.isPaginationChanging) {
      return
    }
    // firefox使用detail:下3上-3,其他瀏覽器使用wheelDelta:下-120上120
    const page = (event.wheelDelta ? event.wheelDelta : -event.detail) >= 0 ? -1 : 1
    // 下滾
    if (page > 0) {
      this.props.setPage(this.props.currentPage + page)
    }
    //上滾
    if (page < 0) {
      this.props.setPage(this.props.currentPage + page)
    }
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
