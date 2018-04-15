import React from 'react'
import styled from 'styled-components'
import { Col, Row } from 'reactstrap'

import colors from 'scss/colors'
import { URLS } from 'utils/constants'
import { createIcon, wrapAnchor } from 'utils'

const Footer = styled.footer`
  background-color: ${colors.primary};
  color: white;
  min-height: 50px;
`

const Reverse = styled(Row)`
  flex-direction: row-reverse;
`

const Bottom = styled(Col)`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  text-align: right;

  > span {
    padding: 10px;
  }
`

const Padded = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
`

const Component = () => (
  <Footer>
    <div>
      <Reverse className='justify-content-between'>
        <Bottom xs='12' md='8'>
          <span>
            <div>
              <small>
                Copyright © {new Date().getFullYear()} 
              </small>
            </div>
            <div>
              <small>
              Vinicius Marchesin Araujo
              </small>
            </div>
          </span>
        </Bottom>
      </Reverse>
    </div>
  </Footer>
)

export default Component
