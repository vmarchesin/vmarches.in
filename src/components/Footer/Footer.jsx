import React from 'react'
import styled from 'styled-components'
import { Col, Row } from "reactstrap"

import FontAwesome from "components/FontAwesome"

import dimensions from "scss/dimensions"
import colors from "scss/colors"

const Footer = styled.footer`
  background-color: ${colors.primary};
  min-height: ${dimensions.footerMinHeight};
`
const Component = () => (
  <Footer>
    <div className="container">
      <Row className="justify-content-md-center">
        <Col xs="6">
          <FontAwesome
            hoverColor={colors.github} 
            href="https://github.com/vmarchesin" 
            icon={["fab", "github"]} 
            size="3x"
          />
        </Col>
      </Row>
    </div>
  </Footer>
)

export default Component
