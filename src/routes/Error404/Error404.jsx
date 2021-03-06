import React from 'react';
import { Translate } from 'react-localize-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import colors from 'scss/colors';

// Idea taken from https://codepen.io/kaypooma/pen/ehfjC
const Oops = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  color: ${colors.white};

  text-align: center;
  font-style: italic;

  background: #1f1f1f;
  overflow: hidden;

  z-index: 9999;

  & + footer, & + nav {
    display: none;
  }

  .error {
    text-align: center;
    font-size: 95px;
    width: 100px;
    height: 60px;
    line-height: 60px;
    margin: auto;
    position: absolute;
    top: 0;
    bottom: 0;
    left: -86px;
    right: 0;
    animation: noise 2s linear infinite;
    overflow: default;

    &:after {
      content: '404';
      font-size: 105px;
      width: 150px;
      line-height: 60px;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      opacity: 0;
      color: blue;
      animation: noise-1 .2s linear infinite;
    }

    &:before {
      content: '404';
      font-size: 100px;
      width: 100px;
      line-height: 60px;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      opacity: 0;
      color: red;
      animation: noise-2 .2s linear infinite;
    }
  }

  .info {
    font-size: 15px;
    width: 300px;
    height: 60px;
    margin: auto;
    position: absolute;
    top: 140px;
    bottom: 0;
    left: 0;
    right: 0;
    animation: noise-3 1s linear infinite;
  }

  a {
    border: 2px solid ${colors.white};
    border-radius: 4px;
    color: ${colors.white}!important;
    text-decoration: none;

    font-size: 15px;
    width: 200px;
    height: 60px;
    line-height: 58px;
    margin: auto;
    position: absolute;
    top: 280px;
    bottom: 0;
    left: 0;
    right: 0;
  }

  .vibrate {
    &:hover {
      animation: vibrate 0.2s linear infinite;
    }
  }
`;

const Error404 = () => (
  <Oops>
    <div className="error">404</div>
    <div className="info"><Translate id="404.info" /></div>
    <Link className="vibrate" to="/">
      <Translate id={`404.grawlix${~~(Math.random() * 2)}`} />
      <Translate id="404.button" />
    </Link>
  </Oops>
);

export default Error404;
