import React from 'react'
import styled from 'styled-components'
import { Col, Row } from "reactstrap"

import { RoundImage } from "components/Image"
import FontAwesome from "components/FontAwesome"

import Profile from "images/profile.jpeg"
import colors from "scss/colors"
import { URLS } from "utils/constants"

const Container = styled.div`
`

const createIcon = ({ color, href, icon }, key) => (
  <FontAwesome
    hoverColor={color} 
    href={href}
    key={key}
    icon={icon} 
  />
)

const Route = () => (
  <Container>
    <Row>
      <Col xs="12">
        <center>
          <RoundImage src={Profile}/>
        </center>
      </Col>
      <Col xs="12">
        <center>
          Frontend Developer
        </center>
      </Col>
    </Row>
    <Row>
      <Col xs="12">
        <center>
          {[
            { color: colors.github, href: URLS.github , icon: ["fab", "github"] },
            { color: colors.linkedin, href: URLS.linkedin , icon: ["fab", "linkedin-in"] },
            { color: colors.github, href: URLS.mail , icon: ["fas", "at"] },
            { color: colors.facebook, href: URLS.facebook , icon: ["fab", "facebook-f"] },
            { color: colors.telegram, href: URLS.telegram, icon: ["fab", "telegram-plane"]},
          ].map((i, index) => createIcon(i, index))}
        </center>
      </Col>
    </Row>
  </Container>
)

export default Route