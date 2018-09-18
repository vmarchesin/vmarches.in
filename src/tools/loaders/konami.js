import React from 'react'
import toasty from '../../assets/audio/toasty.mp3'

const setup = (() => {
  const audio = new Audio(toasty)

  return { action: () => audio.play() }
})()

export default setup