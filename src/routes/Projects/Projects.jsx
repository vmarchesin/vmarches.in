import React from 'react';
import { Translate } from 'react-localize-redux';
import { Col, Row } from 'reactstrap';

import Project from 'components/Project';

import URLS, { npmUrl } from 'utils/urls';

import whatsappImage from 'assets/images/whatsapp.png';
import konamiCodeImage from 'assets/images/konami-code.jpg';
import turnDownForWhatImage from 'assets/images/turn-down-for-what.jpg';
import nfeImage from 'assets/images/nfe-logo.png';
import infinityGauntletImage from 'assets/images/infinity-gauntlet.jpg';
// import npmImage from 'assets/images/npm.png'
import styled from 'styled-components';

const Center = styled.div`
  text-align: center;
`;

const ProjectsRoute = () => (
  <main>
    <div>
      <Row>
        <Col xs="12">
          <Center className="container" style={{ marginBottom: 64 }}>
            <Row>
              <Col xs="12">
                <h3><Translate id="projects.sections.npm" /></h3>
              </Col>
              <Col>
                {[
                  {
                    description: <Translate id="projects.react-konami-code.description" />,
                    image: konamiCodeImage,
                    title: 'react-konami-code',
                    url: npmUrl('react-konami-code'),
                  },
                  {
                    description: <Translate id="projects.turn-down-for-what.description" />,
                    image: turnDownForWhatImage,
                    title: 'turn-down-for-what',
                    url: npmUrl('turn-down-for-what'),
                  },
                  {
                    description: <Translate id="projects.infinity-snap.description" />,
                    image: infinityGauntletImage,
                    title: 'infinity-snap',
                    url: npmUrl('infinity-snap'),
                  },
                  {
                    description: <Translate id="projects.br-validate-dfe-access-key.description" />,
                    image: nfeImage,
                    title: 'br-validate-dfe-access-key',
                    url: npmUrl('br-validate-dfe-access-key'),
                  },
                ].map((p, i) => <span key={i}><Project {...p} /></span>)}
              </Col>
              <Col xs="12">
                <hr />
              </Col>
            </Row>
            <Row className="mt10">
              <Col xs="12">
                <h3><Translate id="projects.sections.fun" /></h3>
              </Col>
              <Col>
                {[
                  {
                    description: <Translate id="projects.vem-de-zap-bebe.description" />,
                    image: whatsappImage,
                    title: 'Vem de Zap Bebê',
                    url: URLS.VEMDEZAP,
                  },
                ].map((p, i) => <span key={i}><Project {...p} /></span>)}
              </Col>
            </Row>
          </Center>
        </Col>
      </Row>
    </div>
  </main>
);

export default ProjectsRoute;
