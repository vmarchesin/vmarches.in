import React from 'react'
import { BoxedImage } from 'components/Image'
import styled from 'styled-components'
import turnDown from 'turn-down-for-what'

import toastyImage from 'assets/images/toasty.png'
import toastyAudio from 'assets/audio/toasty.mp3'

const ToastyImage = styled(BoxedImage)`
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 9999;

  animation: slide-in .5s ease-in-out;
`

export default (() => {
  const audio = new Audio(toastyAudio)
  const image = <ToastyImage src={toastyImage} />

  return ~~(Math.random() * 2) ? {
    action: () => {
      turnDown(['img', 'svg.fa-2x'], {
        jitterAmount: 20,
        numKeyframes: 20,
      })
    },
    timeout: 0,
  } : { action: () => audio.play(), image, timeout: 1000 }
})()