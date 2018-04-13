import React from 'react'
import styled from 'styled-components'

import { BoxedImage } from 'components/Image'

import { KONAMI } from 'utils/constants'

class Konami extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      done: false,
      input: [],
    }

    this._secret = KONAMI[Math.floor(Math.random() * KONAMI.length)]
    this._audio = new Audio(this._secret.audio)
    this._code = props.code 
  }

  componentDidMount() {
    document.addEventListener('keyup', this.onKeyUp)
  }

  onKeyUp = e => {
    const { done, input } = this.state
    input.push(e.keyCode)
    input.splice(-this._code.length - 1, input.length - this._code.length)
    this.setState({ input })

    if (this.state.input.join("").includes(this._code.join("")) && !done) {
      this.setState({ done: true }, () => this._audio.play())
      setInterval(this.jumpImage, 500)
    }
  }

  jumpImage = () => {
    this._img.style.top = `${Math.round(Math.random() * 60)}vh`
    this._img.style.left = `${Math.round(Math.random() * 70)}vw`
  }

  render = () => do {
    if (!this.state.done) {
      null
    } else {
      <img
        ref={img => this._img = img}
        src={require(`images/${this._secret.image}`)} 
        style={{ position: 'fixed', zIndex: 999 }}
      />
    }
  }
}

Konami.defaultProps = {
  code: [38,38,40,40,37,39,37,39,66,65],
}

export default Konami