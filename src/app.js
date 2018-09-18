import React from 'react'
import ReactDOM from 'react-dom'
import { browserHistory, BrowserRouter } from 'react-router-dom'
import Favicon from 'react-favicon'
import Konami from 'react-konami-code'

import favicon from 'images/favicon.ico'
import App from 'routes'

// Styles
import 'bootstrap/dist/css/bootstrap.min.css'
import 'scss/animations'
import 'scss/layout'
import 'scss/fonts'

// Loaders
import 'tools/loaders/fontAwesome'
import konami from 'tools/loaders/konami'

ReactDOM.render(
  <BrowserRouter history={browserHistory}>
    <React.Fragment>
      <Favicon url={favicon}/>
      <Konami action={konami.action} timeout={1000}>
        {konami.image}
      </Konami>
      <App/>
    </React.Fragment>
  </BrowserRouter>,
  document.getElementById('app')
)