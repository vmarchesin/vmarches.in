import React from 'react'
import styled from 'styled-components'
import { Col, Row } from 'reactstrap'
import { Link } from 'react-router-dom'

import { RoundImage } from 'components/Image'
import Project from 'components/Project'

import colors from 'scss/colors'
import { URLS } from 'utils/constants'
import { createIcon, wrapAnchor } from 'utils'

const ProjectsRoute = () => (
  <div>
    <Row>
      <Col xs='12'>
        <center className='container'>
          <Row>
            <Col>
              {[
                {
                  description: 'A tool to add emojis to any text, based on context.',
                  image: require('images/whatsapp.png'),
                  title: 'Vem de Zap bebê',
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