import React from 'react'
import styled from 'styled-components'
import { Col, Row } from "reactstrap"

import colors from "scss/colors"

const Footer = styled.footer`
  background-color: ${colors.primary};
  color: white;
  min-height: 100px;
`
const Component = () => (
  <Footer>
    <div className="container">
      <Row className="justify-content-md-center">
        <Col xs="12">
          <small>
            Vinicius Marchesin Araujo, Todos os direitos reservados
          </small>
        </Col>
      </Row>
    </div>
  </Footer>
)

export default Component
