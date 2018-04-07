import React from 'react'
import ReactDOM from 'react-dom'
import { browserHistory, BrowserRouter } from 'react-router-dom'

import App from 'routes'

// Styles
import 'bootstrap/dist/css/bootstrap.min.css'
import 'scss/animations'
import 'scss/layout'
import 'scss/fonts'

// Loaders
import 'tools/loaders/fontAwesome'

ReactDOM.render(
  <BrowserRouter history={browserHistory}>
    <App/>
  </BrowserRouter>,
  document.getElementById('app')
)