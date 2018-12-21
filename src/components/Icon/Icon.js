import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './icon.scss'

class Icon extends Component {
  state = {
    backgroundImage: undefined,
    dataSrc: undefined
  }

  static propTypes = {
    image: PropTypes.string,
    className: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    hasLazyload: PropTypes.bool
  }

  static defaultProps = {
    image: '',
    className: '',
    width: '20px',
    height: '20px',
    hasLazyload: false
  }

  componentDidUpdate (prevProps, prevState) {
    const { image } = this.props
    if (prevProps.image !== image) {
      this.loadImage()
    }
  }

  componentDidMount () {
    this.loadImage()
  }

  loadImage () {
    const { hasLazyload, image } = this.props
    if (hasLazyload) {
      if (!image) {
        this.setState({
          backgroundImage: undefined,
          dataSrc: undefined
        })
        return
      }
      this.setState({
        dataSrc: image
      })
      preloadImage(image, () => {
        // don't use base64 file here or IE will not work
        this.setState({
          backgroundImage: `url('${image}')`,
          dataSrc: undefined
        })
      }, () => {
      }, () => {
        this.setState({
          backgroundImage: undefined,
          dataSrc: undefined
        })
      })
    } else if (image) {
      this.setState({
        backgroundImage: `url('${image}')`
      })
    }
  }

  getBackgroundSize () {
    if (this.props.width !== undefined && this.props.height !== undefined) {
      return `${this.props.width} ${this.props.height}`
    }
    return ''
  }

  render () {
    const { hasLazyload, className, width, height } = this.props
    const { backgroundImage, dataSrc } = this.state
    const iconClass = cx('icon', {
      [className]: className,
      'photo-lazyload': hasLazyload
    })
    const backgroundSize = this.getBackgroundSize()
    return (
      <span
        className={iconClass}
        style={{
          backgroundImage,
          backgroundSize,
          width,
          height
        }}
        data-src={dataSrc}
      >
        {this.props.children}
      </span>
    )
  }
}

function preloadImage (url = '', callback = () => {}, onprogress = e => {}, onerror = () => {}) {
  if (typeof url === 'string' || url instanceof String) {
    try {
      const xmlHttp = new XMLHttpRequest() // eslint-disable-line
      xmlHttp.open('GET', url, true)
      xmlHttp.responseType = 'arraybuffer'
      xmlHttp.onload = () => {
        callback()
      }
      xmlHttp.onprogress = e => {
        onprogress(Math.ceil(e.loaded / e.total * 100))
      }
      xmlHttp.onerror = () => {
        onerror()
      }
      xmlHttp.send()
    } catch (e) {
    }
  } else if ((typeof url === 'object' || url instanceof Object) && url.length > 0) {
    url = url.filter(uniUrl => uniUrl)
    const loadAllImages = url.map(uniUrl => {
      return new Promise((resolve, reject) => {
        try {
          const xmlHttp = new XMLHttpRequest() // eslint-disable-line
          xmlHttp.open('GET', uniUrl, true)
          xmlHttp.responseType = 'arraybuffer'
          xmlHttp.onload = () => {
            resolve()
          }
          xmlHttp.onerror = () => {
            onerror()
            reject(new Error('image load error'))
          }
          xmlHttp.send()
        } catch (error) {
          reject(new Error(error))
        }
      })
    })
    Promise.all(loadAllImages).then(() => {
      callback()
    }).catch(error => {
      console.error(error)
    })
  }
}

export default Icon