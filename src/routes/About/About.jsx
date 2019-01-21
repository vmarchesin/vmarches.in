import React from 'react';
import { Col, Row } from 'reactstrap';
import { wrapMain } from 'utils';
import { URLS } from 'utils/constants';
import styled from 'styled-components';
import Image from 'components/Image';
import profileImage from 'assets/images/profile.png';

const About = styled.div`
  width: 100%;
  margin-bottom: 32px;

  > div div {
    margin-bottom: -16px;

    > div {
      margin-bottom: 32px;
      text-indent: 32px;
      text-align: justify;

      > hr {
        margin-bottom: 32px;
      }

      &.center {
        text-align: center;
      }
    }
  }
`;

const AboutRoute = () => {
  const age = Math.floor((new Date() - new Date('1994-01-13')) * (1 / 31536000000));

  return wrapMain(
    <About>
      <div>
        <Row>
          <Col className="center" sm={12} md={{ size: 6, offset: 3 }}>
            <Image src={profileImage} w="200px" h="200px" circle />
          </Col>
          <Col sm={12} md={{ size: 6, offset: 3 }}>
            {`My name is Vinicius Marchesin Araujo. I'm a ${age}-year-old developer from Brazil that likes to make fun stuff for the web. I graduated from `}
            <a href={URLS.USP} target="_blank" rel="noopener noreferrer">
              USP (Universidade de São Paulo)
            </a>
            {' in 2018 with a Bachelor in Computer Science. I am currently working at '}
            <a href={URLS.ARQUIVEI} target="_blank" rel="noopener noreferrer">Arquivei</a>
            {', a brazilian startup that handles eletronic invoices and enables companies to transform bureaucracy into opportunities. I live in São Carlos, a city in the state of São Paulo, Brazil.'}
          </Col>
          <Col sm={12} md={{ size: 6, offset: 3 }}>
            {'You can see my open source contributions at '}
            <a href={URLS.GITHUB} target="_blank" rel="noopener noreferrer">Github</a>
            {' and my career achievements in my '}
            <a href={URLS.LINKEDIN} target="_blank" rel="noopener noreferrer">LinkedIn profile</a>
            {'. You can also check my working stack at '}
            <a href={URLS.STACKSHARE} target="_blank" rel="noopener noreferrer">StackShare</a>
            {'. I like to write about code and tech in general, so make sure to read one of my blog posts at '}
            <a href={URLS.MEDIUM} target="_blank" rel="noopener noreferrer">Medium</a>
            {'.'}
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={{ size: 6, offset: 3 }} style={{ marginBottom: 16 }}>
            <hr />
            <h2>About this website</h2>
          </Col>
          <Col sm={12} md={{ size: 6, offset: 3 }}>
            {"This website is built using React and Webpack. It's hosted on "}
            <a href={URLS.NETLIFY} target="_blank" rel="noopener noreferrer">Netlify</a>
            {', an awesome static (and beyond) hosting service that enables continuous integration out of the box for free. You can check the source code at my '}
            <a href={URLS.REPO} target="_blank" rel="noopener noreferrer">repo</a>
            {'.'}
          </Col>
        </Row>
      </div>
    </About>,
  );
};

export default AboutRoute;
