import React from 'react'
import { Col, Row } from 'reactstrap'

import { RoundImage } from 'components/Image'
import Project from 'components/Project'

import { URLS } from 'utils/constants'
import { wrapMain } from 'utils'

import whatsappImage from 'assets/images/whatsapp.png'
import konamiCodeImage from 'assets/images/konami-code.jpg'
import turnDownForWhatImage from 'assets/images/turn-down-for-what.jpg'
import nfeImage from 'assets/images/nfe-logo.png'
// import npmImage from 'assets/images/npm.png'

const ProjectsRoute = () => wrapMain(
  <div>
    <Row>
      <Col xs='12'>
        <center className='container'>
          <Row>
            <Col xs='12'>
              <h3>npm Packages</h3>
            </Col>
            <Col>
              {[
                {
                  description: 'Trigger an easter egg by pressing a sequence of keys.',
                  image: konamiCodeImage,
                  title: 'react-konami-code',
                  url: URLS.NPMKONAMI,
                },
                {
                  description: 'Fire up that loud, Another round of shots.',
                  image: turnDownForWhatImage,
                  title: 'turn-down-for-what',
                  url: URLS.NPMTURNDOWN,
                },
                {
                  description: 'Vlidate Access Keys from Brazil\'s Treasury Office.',
                  image: nfeImage,
                  title: 'br-validate-dfe-access-key',
                  url: URLS.NPMVALIDATEACCESSKEY,
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
                  image: whatsappImage,
                  title: 'Vem de Zap Bebê',
                  url: URLS.VEMDEZAP,
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