import React from 'react'
import ReactDOM from 'react-dom'

import fontawesome from '@fortawesome/fontawesome'
import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook'
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub'
import faLinkedin from '@fortawesome/fontawesome-free-brands/faLinkedin'
import faTelegram from '@fortawesome/fontawesome-free-brands/faTelegram'
import faWhatsapp from '@fortawesome/fontawesome-free-brands/faWhatsapp'

import App from 'routes'

import 'bootstrap/dist/css/bootstrap.min.css'

fontawesome.library.add(faFacebook, faGithub, faLinkedin, faTelegram, faWhatsapp)

ReactDOM.render(
  <App/>,
  document.getElementById('app')
)