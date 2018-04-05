import React from 'react'
import styled from 'styled-components'
import { Col, Row } from "reactstrap"
import { Link } from 'react-router-dom'

import { RoundImage } from "components/Image"
import FontAwesome from "components/FontAwesome"

import Profile from "images/profile.jpeg"
import colors from "scss/colors"
import { URLS } from "utils/constants"

const Next = styled(Link)`
  position: absolute;
  top: 50%;
  left: 80%;
`

const wrapAnchor = (href, children) =>(
  <a href={href} target="_blank">
    {children}
  </a>
)

const createIcon = (props, key) => (
  <FontAwesome
    key={key}
    {...props}
  />
)

const Route = () => (
  <div>
    <Row>
      <Col xs="12">
        <center>
          <RoundImage src={Profile}/>
          <Next to="/projects">
            <FontAwesome 
              customClass="hvr-wobble-horizontal" 
              hoverColor={colors.primary}
              icon={["fas", "chevron-circle-right"]} 
            />
          </Next>
        </center>
      </Col>
      <Col xs="12" className="mt10">
        <center>
          Frontend Developer <a href={URLS.arquivei} target="_blank">@Arquivei</a>
        </center>
      </Col>
    </Row>
    <Row className="mt10">
      <Col xs="12">
        <center>
          {[
            { customClass: "hvr-buzz-out", icon: ["fab", "github"], hoverColor: colors.github, href: URLS.github },
            { customClass: "hvr-buzz-out", icon: ["fab", "linkedin-in"], hoverColor: colors.linkedin, href: URLS.linkedin },
            { customClass: "hvr-buzz-out", icon: ["fas", "at"], hoverColor: colors.github, href: URLS.mail },
            { customClass: "hvr-buzz-out", icon: ["fab", "facebook-f"], hoverColor: colors.facebook, href: URLS.facebook },
            { customClass: "hvr-buzz-out", icon: ["fab", "telegram-plane"], hoverColor: colors.telegram, href: URLS.telegram },
          ].map((i, index) => wrapAnchor(i.href, createIcon(i, index)))}
        </center>
      </Col>
    </Row>
  </div>
)

export default Route