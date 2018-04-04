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

const createIcon = ({ color, href, icon }) => (
  <FontAwesome
    hoverColor={color} 
    href={href}
    icon={icon} 
  />
)

const Route = () => (
  <Container>
    <Row>
      <Col xs="12">
        <RoundImage src={Profile}/>
      </Col>
    </Row>
    <Row>
      <Col xs="12">
        <center>
          {[
            { color: colors.facebook, href: URLS.facebook , icon: ["fab", "facebook-f"] },
            { color: colors.github, href: URLS.github , icon: ["fab", "github"] },
            { color: colors.linkedin, href: URLS.linkedin , icon: ["fab", "linkedin-in"] },
            { color: colors.github, href: URLS.mail , icon: ["fas", "at"] },
          ].map(i => createIcon(i))}
        </center>
      </Col>    
    </Row>
  </Container>
)

export default Route