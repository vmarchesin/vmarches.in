import React from 'react'
import styled from 'styled-components'
import { hot } from 'react-hot-loader'

import Footer from "components/Footer"
import GithubCorner from "components/GithubCorner"

import colors from "scss/colors"

const Flex = styled.div`
  background-color: ${colors.bgColor};
  display: flex;
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
      <div>My React App</div>
    </main>
    <Footer />
  </Flex>
)

export default hot(module)(App)