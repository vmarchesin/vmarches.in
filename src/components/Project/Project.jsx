import React from 'react'
import styled from 'styled-components'
import { Col, Row } from 'reactstrap'

import { BoxedImage } from 'components/Image'

import colors from 'scss/colors'

const Box = styled.div`
  max-width: 400px;
  padding: 10px;

  > div .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
  }

  > div .align-left {
    text-align: left;

    > div {
      padding: 5px 0;
      
      > a {
        word-break: break-all;
      }
    }
  }
`

const Project = ({
  description,
  image,
  title,
  url,
}) => (
  <Box>
    <Row>
      <Col className='logo' xs='12' md='4'>
        <BoxedImage src={image} w='100px' h='100px'/>
      </Col>
      <Col className='align-left' xs='12' md='8'>
        <Row><h4>{title}</h4></Row>
        <Row>{description}</Row>
        {url
          ? <Row>
              <small>
                <a href={url} target='_blank'>{url}</a>
              </small>
            </Row>
          : false}
      </Col>
    </Row>
  </Box>
)

export default Project
