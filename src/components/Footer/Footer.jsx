import React from 'react'
import styled from 'styled-components'
import { Col, Row } from "reactstrap"

import colors from "scss/colors"

const Footer = styled.footer`
  background-color: ${colors.primary};
  color: white;
  min-height: 50px;
`

const Bottom = styled(Col)`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  > span {
    padding: 5px;
  }
`

const Component = () => (
  <Footer>
    <div className="container">
      <Row className="justify-content-between">
        <Bottom xs="12" md="8">
          <span>
            <div>
              <small>
                Copyright © {new Date().getFullYear()} 
              </small>
            </div>
            <div>
              <small>
              Vinicius Marchesin Araujo, Todos os direitos reservados
              </small>
            </div>
          </span>
        </Bottom>
      </Row>
    </div>
  </Footer>
)

export default Component
