import React from 'react'
import ReactDOM from 'react-dom'

import fontawesome from '@fortawesome/fontawesome'
import faAt from '@fortawesome/fontawesome-free-solid/faAt'
import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebookF'
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub'
import faLinkedin from '@fortawesome/fontawesome-free-brands/faLinkedinIn'
import faTelegram from '@fortawesome/fontawesome-free-brands/faTelegramPlane'
import faWhatsapp from '@fortawesome/fontawesome-free-brands/faWhatsapp'

import App from 'routes'

import 'bootstrap/dist/css/bootstrap.min.css'

fontawesome.library.add(faAt, faFacebook, faGithub, faLinkedin, faTelegram, faWhatsapp)

ReactDOM.render(
  <App/>,
  document.getElementById('app')
)