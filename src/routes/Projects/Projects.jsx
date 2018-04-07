import React from 'react'
import styled from 'styled-components'
import { Col, Row } from "reactstrap"
import { Link } from 'react-router-dom'

import { RoundImage } from "components/Image"

import Profile from "images/profile.jpeg"
import colors from "scss/colors"
import { URLS } from "utils/constants"
import { createIcon, wrapAnchor } from 'utils'

const ProjectsRoute = () => (
  <div>
    <Row>
      <Col xs="12">
        <center>
          <Row>
            <Col xs="12">
              <RoundImage src={Profile}/>
            </Col>
          </Row>
        </center>
      </Col>
    </Row>
  </div>
)

export default ProjectsRoute