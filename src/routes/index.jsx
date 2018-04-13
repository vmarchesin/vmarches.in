import React from 'react'
import styled from 'styled-components'
import { hot } from 'react-hot-loader'
import { Route, Switch } from 'react-router-dom'
import Favicon from 'react-favicon'

import Home from 'routes/Home'
import Projects from 'routes/Projects'

import Footer from 'components/Footer'
import GithubCorner from 'components/GithubCorner'
import Header from 'components/Header'

import colors from 'scss/colors'
import { wrapMain } from 'utils'

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

const HomeRoute = () => wrapMain(<Home />)
const ProjectsRoute = () => wrapMain(<Projects />)

const App = () => (
  <Flex>
    <Favicon url={require('images/favicon.ico')}/>
    <Header />
    <GithubCorner />
    <Switch>
      <Route exact path='/' component={HomeRoute} />
      <Route exact path='/projects' component={ProjectsRoute} />
    </Switch>
    <Footer />
  </Flex>
)

export default hot(module)(App)