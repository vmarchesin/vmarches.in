import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Favicon from 'react-favicon';
import Konami from 'react-konami-code';
import favicon from 'assets/images/favicon.ico';
import App from 'routes';

// Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import 'scss/animations';
import 'scss/layout';
import 'scss/fonts';

// Loaders
import 'tools/loaders/fontAwesome';
import konami from 'tools/loaders/konami';

ReactDOM.render(
  <BrowserRouter>
    <React.Fragment>
      <Favicon url={favicon} />
      <Konami action={konami.action} timeout={konami.timeout}>
        {konami.image}
      </Konami>
      <App />
    </React.Fragment>
  </BrowserRouter>,
  document.getElementById('app'),
);
