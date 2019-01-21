import React from 'react';
import { Col, Row } from 'reactstrap';
import Typist from 'react-typist';

import Image from 'components/Image';

import colors from 'scss/colors';
import { URLS } from 'utils/constants';
import icons from 'tools/loaders/fontAwesome';
import { createIcon } from 'components/FontAwesome';
import Flip from 'components/Flip';
import { wrapAnchor, wrapMain } from 'utils';

import styled from 'styled-components';

import profileImage from 'assets/images/profile.png';
import logo from 'assets/images/logo_256.png';

const Center = styled.div`
  text-align: center;
  margin: auto;
`;

const HomeRoute = () => wrapMain(
  <div style={{ width: '100%' }}>
    <Row>
      <Col xs="12">
        <Row>
          <Col xs="12">
            <Flip
              style={{ margin: 'auto' }}
              height="200px"
              width="200px"
              front={<Image src={logo} w="200px" h="200px" circle shadow />}
              back={<Image src={profileImage} w="200px" h="200px" circle shadow />}
            />
          </Col>
        </Row>
      </Col>
      <Col xs="12" className="mt10">
        <Center>
          <Typist
            cursor={{ element: '_' }}
            startDelay={1000}
          >
            Frontend Develpoer
            <Typist.Backspace count={4} delay={500} />
            <Typist.Delay ms={1000} />
            {'oper '}<a href={URLS.ARQUIVEI} target="_blank" rel="noopener noreferrer">@Arquivei</a>
          </Typist>
        </Center>
      </Col>
    </Row>
    <Row className="mt10">
      <Col xs="12">
        <Center>
          {[
            {
              customClass: 'hvr-buzz-out', icon: icons.github, hoverColor: colors.github, href: URLS.GITHUB,
            },
            {
              customClass: 'hvr-buzz-out', icon: icons.linkedin, hoverColor: colors.linkedin, href: URLS.LINKEDIN,
            },
            {
              customClass: 'hvr-buzz-out', icon: icons.at, hoverColor: colors.github, href: URLS.MAIL,
            },
            {
              customClass: 'hvr-buzz-out', icon: icons.telegram, hoverColor: colors.telegram, href: URLS.TELEGRAM,
            },
          ].map((i, index) => wrapAnchor(i.href, createIcon(i), index))}
        </Center>
      </Col>
    </Row>
  </div>,
);

export default HomeRoute;
