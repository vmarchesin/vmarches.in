import React from 'react'
import ReactDOM from 'react-dom'
import { browserHistory, BrowserRouter } from 'react-router-dom'
import Favicon from 'react-favicon'

import Konami from 'components/Konami'
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
    <React.Fragment>
      <Favicon url={require('images/favicon.ico')}/>
      <Konami />
      <App/>
    </React.Fragment>
  </BrowserRouter>,
  document.getElementById('app')
)