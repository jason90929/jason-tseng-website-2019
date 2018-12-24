import React, { Component } from 'react'
import connect from 'react-redux/es/connect/connect'
import cx from 'classnames'
import Area from '../../container/Area/Area'
import './second-area.scss'
import Email from '../../container/Email'

class SecondArea extends Component {
  render () {
    const className = cx('second-area', {
      'area-loaded': this.props.isLoaded && this.props.pageList[this.props.currentPage] === 'about'
    })
    return (
      <Area
        className={className}>
        <article className="article">
          <div className="article-left">
            <h1 className="second-area-frame-1">
              About me
            </h1>
            <p className="second-area-frame-2">
              My name is Jason Tseng and I have 4 years experience of frontend developer currently based in Taipei, Taiwan.
            </p>
            <p className="second-area-frame-3">
              Currently I'm at iStaging which is developing VR/AR platform, make a perfect user experience for consumer, get income from business
            </p>
            <p className="second-area-frame-4">
              I'm a strong with personal developing in frontend position, make a good structure code project.
            </p>
            <p className="second-area-frame-5">
              I have a good UX sense on developing projects, and sense of RWD, so I usually recommend UI designer a better UI display.
            </p>
            <p className="second-area-frame-6">
              I'm always open to all kind of offers - just drop me a line at <Email />
            </p>
          </div>
        </article>
      </Area>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    currentPage: state.pagination.currentPage,
    isLoaded: state.loading.isLoaded,
    pageList: state.pagination.pageList
  }
}

export default connect(
  mapStateToProps
)(SecondArea)
