import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Btn from '../../components/Btn/Btn'
import Icon from '../../components/Icon/Icon'
import Stroke from '../../components/Effects/Stroke'
import './portfolio.scss'
import cx from 'classnames'

class Portfolio extends Component {
  static defaultProps = {
    text: '',
    title: '',
    image: '',
    color: '',
    textClass: '',
    titleClass: '',
    btnClass: '',
    imageClass: '',
    colorClass: ''
  }

  static propTypes = {
    text: PropTypes.string,
    title: PropTypes.string,
    image: PropTypes.string,
    color: PropTypes.string,
    textClass: PropTypes.string,
    titleClass: PropTypes.string,
    btnClass: PropTypes.string,
    imageClass: PropTypes.string,
    colorClass: PropTypes.string
  }

  render () {
    const textClass = cx('portfolio-content-text', {
      [this.props.textClass]: this.props.textClass
    })
    const titleClass = cx('portfolio-pad-white portfolio-pad-white-active', {
      [this.props.titleClass]: this.props.titleClass
    })
    const btnClass = cx('btn-no-default', {
      [this.props.btnClass]: this.props.btnClass
    })
    const imageClass = cx('portfolio-image', {
      [this.props.imageClass]: this.props.imageClass
    })
    const colorClass = cx('portfolio-color-block', {
      [this.props.colorClass]: this.props.colorClass
    })
    return (
      <div className="portfolio">
        <div className="portfolio-content">
          <p className={textClass}>{this.props.text}</p>
          <div className="portfolio-content-title">
            <h1 className={titleClass}>
              {this.props.title}
            </h1>
          </div>
          <div className="portfolio-btn-position">
            <Btn className={btnClass}>
              <Stroke className="portfolio-btn-stroke-padding">
                <p className="portfolio-btn-text">SEE SHOWCASE</p>
              </Stroke>
            </Btn>
          </div>
        </div>
        <div
          className={colorClass}
          style={{ backgroundColor: this.props.color }}>
        </div>
        <figure className="portfolio-figure">
          <Icon
            className={imageClass}
            style={{ backgroundSize: 'cover' }}
            image={this.props.image}>
          </Icon>
        </figure>
      </div>
    )
  }
}

export default Portfolio
