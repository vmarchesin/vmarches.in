import React from 'react';
import { Translate } from 'react-localize-redux';
import { Col, Row } from 'reactstrap';
import { wrapAnchor } from 'utils';
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

  const urls = {
    arquivei: wrapAnchor(URLS.ARQUIVEI, 'Arquivei', 'arquivei'),
    github: wrapAnchor(URLS.GITHUB, 'Github', 'github'),
    linkedin: wrapAnchor(URLS.LINKEDIN, 'LinkedIn', 'linkedin'),
    medium: wrapAnchor(URLS.MEDIUM, 'Medium', 'medium'),
    netlify: wrapAnchor(URLS.NETLIFY, 'Netlify', 'netlify'),
    repo: wrapAnchor(URLS.REPO, 'repo', 'repo'),
    stackshare: wrapAnchor(URLS.STACKSHARE, 'StackShare', 'stackshare'),
    usp: wrapAnchor(URLS.USP, ' USP (Universidade de São Paulo)', 'usp'),
  };

  return (
    <main>
      <About>
        <div>
          <Row>
            <Col className="center" sm={12} md={{ size: 6, offset: 3 }}>
              <Image src={profileImage} w="200px" h="200px" circle />
            </Col>
            <Col sm={12} md={{ size: 6, offset: 3 }}>
              <Translate id="about.me.paragraph.1" data={{ age, ...urls }} />
            </Col>
            <Col sm={12} md={{ size: 6, offset: 3 }}>
              <Translate id="about.me.paragraph.2" data={{ ...urls }} />
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={{ size: 6, offset: 3 }} style={{ marginBottom: 16 }}>
              <hr />
              <h2><Translate id="about.website.title" /></h2>
            </Col>
            <Col sm={12} md={{ size: 6, offset: 3 }}>
              <Translate id="about.website.paragraph.1" data={{ ...urls }} />
            </Col>
          </Row>
        </div>
      </About>
    </main>
  );
};

export default AboutRoute;
