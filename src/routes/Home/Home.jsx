import React from 'react'
import { Col, Row } from 'reactstrap'
import Typist from 'react-typist'

import { RoundImage } from 'components/Image'

import colors from 'scss/colors'
import { URLS } from 'utils/constants'
import icons from 'tools/loaders/fontAwesome'
import { createIcon } from 'components/FontAwesome'
import { wrapAnchor, wrapMain } from 'utils'

const HomeRoute = () => wrapMain(
  <div style={{ width: "100%" }}>
    <Row>
      <Col xs='12'>
        <center>
          <Row>
            <Col xs='12'>
              <RoundImage src={require('assets/images/profile.png')} w='200px' h='200px'/>
            </Col>
          </Row>
        </center>
      </Col>
      <Col xs='12' className='mt10'>
        <center>
          <Typist
            cursor={{ element: '_' }}
            startDelay={1000}
          >
            Frontend Develpoer
            <Typist.Backspace count={4} delay={500} />
            <Typist.Delay ms={1000} />
            {'oper '}<a href={URLS.ARQUIVEI} target='_blank'>@Arquivei</a>
          </Typist>
        </center>
      </Col>
    </Row>
    <Row className='mt10'>
      <Col xs='12'>
        <center>
          {[
            { customClass: 'hvr-buzz-out', icon: icons.github, hoverColor: colors.github, href: URLS.GITHUB },
            { customClass: 'hvr-buzz-out', icon: icons.linkedin, hoverColor: colors.linkedin, href: URLS.LINKEDIN },
            { customClass: 'hvr-buzz-out', icon: icons.at, hoverColor: colors.github, href: URLS.MAIL },
            { customClass: 'hvr-buzz-out', icon: icons.facebook, hoverColor: colors.facebook, href: URLS.FACEBOOK },
            { customClass: 'hvr-buzz-out', icon: icons.telegram, hoverColor: colors.telegram, href: URLS.TELEGRAM },
          ].map((i, index) => wrapAnchor(i.href, createIcon(i), index))}
        </center>
      </Col>
    </Row>
  </div>
)

export default HomeRoute