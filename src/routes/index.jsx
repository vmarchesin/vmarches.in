import React from 'react';
import styled from 'styled-components';
import { hot } from 'react-hot-loader'; /* eslint-disable-line */
import { Route, Switch } from 'react-router-dom';
import { renderToStaticMarkup } from 'react-dom/server';
import { withLocalize } from 'react-localize-redux';

import About from 'routes/About';
import Home from 'routes/Home';
import Projects from 'routes/Projects';
import Error404 from 'routes/Error404';

import Footer from 'components/Footer';
import GithubCorner from 'components/GithubCorner';
import Header from 'components/Header';

import colors from 'scss/colors';

import globalTranslations from '../translations/index.json';
import languages from '../translations/languages';

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
  constructor(props) {
    super(props);

    const defaultLanguage = localStorage.getItem('languageCode') || languages[0].code;

    this.props.initialize({
      languages,
      translation: globalTranslations,
      options: { defaultLanguage, renderToStaticMarkup },
    });
  }

  componentDidMount() {
    const consoleStyle = [
      `color: ${colors.secondary};`,
      'font-size: x-medium;',
      'font-weight: 900;',
      "'HK Nova Medium Narrow', 'Roboto', sans-serif",
    ].join(' ');

    console.log('%cHi there. You can buy me a coffee if you like my stuff :) https://www.buymeacoffee.com/vmarchesin', consoleStyle);
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.activeLanguage) {
      return;
    }

    const currLangCode = this.props.activeLanguage.code;
    const hasLanguageChanged = prevProps.activeLanguage.code !== currLangCode;

    if (hasLanguageChanged) {
      localStorage.setItem('languageCode', currLangCode);
    }
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

export default hot(module)(withLocalize(App));
