import React from 'react'
import styled from 'styled-components'
import { hot } from 'react-hot-loader'

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

const App = () => (
  <Flex>
    <GithubCorner />
    <main>
      <Home />
    </main>
    <Footer />
  </Flex>
)

export default hot(module)(App)