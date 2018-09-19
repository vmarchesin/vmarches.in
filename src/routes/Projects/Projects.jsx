import React from 'react'
import { Col, Row } from 'reactstrap'

import { RoundImage } from 'components/Image'
import Project from 'components/Project'

import { URLS } from 'utils/constants'
import { wrapMain } from 'utils'

const ProjectsRoute = () => wrapMain(
  <div>
    <Row>
      <Col xs='12'>
        <center className='container'>
          <Row>
            <Col xs='12'>
              <h3>Packages</h3>
            </Col>
            <Col>
              {[
                {
                  description: 'Trigger an easter egg by pressing a sequence of keys.',
                  image: require('images/npm.png'),
                  title: 'react-konami-code',
                  url: URLS.npm_konami,
                },
              ].map((p, i) => <span key={i}><Project {...p} /></span>)}
            </Col>
            <Col xs='12'>
              <hr />
            </Col>
          </Row>
          <Row className='mt10'>
            <Col xs='12'>
              <h3>Fun Projects</h3>
            </Col>
            <Col>
              {[
                {
                  description: 'A tool to add emojis to any text, based on context.',
                  image: require('images/whatsapp.png'),
                  title: 'Vem de Zap Bebê',
                  url: URLS.vemdezap,
                },
              ].map((p, i) => <span key={i}><Project {...p} /></span>)}
            </Col>
          </Row>
        </center>
      </Col>
    </Row>
  </div>
)

export default ProjectsRoute