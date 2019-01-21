import React from 'react';
import styled from 'styled-components';
import { hot } from 'react-hot-loader'; /* eslint-disable-line */
import { Route, Switch } from 'react-router-dom';

import About from 'routes/About';
import Home from 'routes/Home';
import Projects from 'routes/Projects';
import Error404 from 'routes/Error404';

import Footer from 'components/Footer';
import GithubCorner from 'components/GithubCorner';
import Header from 'components/Header';

import colors from 'scss/colors';
// import { wrapMain } from 'utils'

const Flex = styled.div`
  background-color: ${colors.bgColor};
  display: flex;
  font-family: 'HK Nova Medium Narrow', 'Roboto', sans-serif;
  min-height: 100vh;
  flex-direction: column;

  a {
    color: ${colors.secondary};

    &:hover {
      color: ${colors.secondaryDarker};
    }
  }
`;

class App extends React.Component {
  componentDidMount() {
    const consoleStyle = [
      `color: ${colors.secondary};`,
      'font-size: x-medium;',
      'font-weight: 900;',
      '\'HK Nova Medium Narrow\', \'Roboto\', sans-serif',
    ].join(' ');

    console.log('%cHi there. You can buy me a coffee if you like my stuff :) https://www.buymeacoffee.com/vmarchesin', consoleStyle);
  }

  render() {
    return (
      <Flex>
        <Header />
        <GithubCorner />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/about" component={About} />
          <Route component={Error404} />
        </Switch>
        <Footer />
      </Flex>
    );
  }
}

export default hot(module)(App);
