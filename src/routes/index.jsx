import React from 'react'
import styled from 'styled-components'
import { hot } from 'react-hot-loader'
import { browserHistory, BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from 'routes/Home'
import Footer from "components/Footer"
import GithubCorner from "components/GithubCorner"

import fonts from "scss/fonts"
import colors from "scss/colors"

const Flex = styled.div`
  background-color: ${colors.bgColor};
  display: flex;
  font-family: 'HK Nova Medium Narrow', 'Roboto', sans-serif;
  min-height: 100vh;
  flex-direction: column;

  > main {
    flex: 1;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`

const Main = () => (
  <main>
    <Home />
  </main>
)

const App = () => (
  <Flex>
    <GithubCorner />
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path='/' component={Main} />
      </Switch>
    </BrowserRouter>
    <Footer />
  </Flex>
)

export default hot(module)(App)