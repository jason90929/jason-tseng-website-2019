import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import Btn from '../../components/Btn/Btn'
import Icon from '../../components/Icon/Icon'
// import Stroke from '../../components/Effects/Stroke'
import './portfolio.scss'

class Portfolio extends Component {
  static defaultProps = {
    text: '',
    title: '',
    image: '',
    color: ''
  }

  static propTypes = {
    text: PropTypes.string,
    title: PropTypes.string,
    image: PropTypes.string,
    color: PropTypes.string
  }

  render () {
    return (
      <div className="portfolio">
        <div className="portfolio-content">
          <p className="portfolio-content-text">{this.props.text}</p>
          <h1 className="portfolio-content-title">
            <div className="portfolio-pad-white portfolio-pad-white-active">
              {this.props.title}
            </div>
          </h1>
          {/*<div className="portfolio-btn-position">*/}
            {/*<Btn className="btn-no-default">*/}
              {/*<Stroke className="portfolio-btn-stroke-padding">*/}
                {/*<p className="portfolio-btn-text">SEE SHOWCASE</p>*/}
              {/*</Stroke>*/}
            {/*</Btn>*/}
          {/*</div>*/}
        </div>
        <div
          className="portfolio-color-block"
          style={{ backgroundColor: this.props.color }}>
        </div>
        <figure className="portfolio-figure">
          <Icon
            className="portfolio-image"
            style={{ backgroundSize: 'cover' }}
            image={this.props.image}>
          </Icon>
        </figure>
      </div>
    )
  }
}

export default Portfolio
