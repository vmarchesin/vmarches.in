import React from 'react'
import styled from 'styled-components'
import { Col, Row } from "reactstrap"
import { Link } from 'react-router-dom'

import { createIcon, wrapAnchor } from 'utils'

import colors from "scss/colors"

const Header = styled.header`
  padding: 20px;
  min-height: 50px;
`

const Component = () => (
  <Header>
    <div className="container">
      <Row className="justify-content-start">
        <Link to="/">
          {createIcon({
            hoverColor: colors.primary,
            icon: ["fas", "home"],
          })}
        </Link>
      </Row>
    </div>
  </Header>
)

export default Component
