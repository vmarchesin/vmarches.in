import React from 'react'
import { KONAMI } from 'utils/constants'

const getSecret = () => KONAMI[new Date().getDay() % KONAMI.length]

const jumpImage = ref => {
  ref.style.top = `${Math.round(Math.random() * window.innerHeight)}px`
  ref.style.left = `${Math.round(Math.random() * window.innerWidth)}px`
}

const setup = (() => {
  const secret = getSecret()
  const audio = new Audio(secret.audio)
  let _ref

  return {
    image: (
      <img
        ref={img => _ref = img}
        src={require(`images/${secret.image}`)} 
        style={{ position: 'fixed', zIndex: 999 }}
      />
    ),
    action: () => {
      audio.play()
      audio.loop = true
      setInterval(() => {
        jumpImage(_ref)
      }, 500)
    },
  }
})()

export default setup