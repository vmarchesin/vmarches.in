import React from 'react'
import ReactDOM from 'react-dom'

import fontawesome from '@fortawesome/fontawesome'
import { faAt, faChevronCircleRight } from '@fortawesome/fontawesome-free-solid'
import {
  faFacebookF,
  faGithub,
  faLinkedinIn,
  faTelegram,
  faWhatsapp,
} from '@fortawesome/fontawesome-free-brands'

import App from 'routes'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'scss/animations'
import 'scss/layout'

fontawesome.library.add(
  faAt, 
  faChevronCircleRight, 
  faFacebookF, 
  faGithub, 
  faLinkedinIn, 
  faTelegram, 
  faWhatsapp
)

ReactDOM.render(
  <App/>,
  document.getElementById('app')
)