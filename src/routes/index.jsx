import React from 'react'
import styled from 'styled-components'
import { hot } from 'react-hot-loader'
import { browserHistory, BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from 'routes/Home'
import Projects from 'routes/Projects'

import Footer from 'components/Footer'
import GithubCorner from 'components/GithubCorner'

import colors from 'scss/colors'

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

const main = children => <main>{children}</main>

const HomeRoute = () => main(<Home />)
const ProjectsRoute = () => main(<Projects />)

const App = () => (
  <Flex>
    <GithubCorner />
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path='/' component={HomeRoute} />
        <Route exact path='/projects' component={ProjectsRoute} />
      </Switch>
    </BrowserRouter>
    <Footer />
  </Flex>
)

export default hot(module)(App)