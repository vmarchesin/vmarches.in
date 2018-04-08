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
  }

  > div .align-left {
    text-align: left;

    > div {
      padding: 5px 0;
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
      <Col className='logo' xs='4'>
        <BoxedImage src={image} w='100px' />
      </Col>
      <Col className='align-left' xs='8'>
        <Row><h4>{title}</h4></Row>
        <Row>{description}</Row>
        {url
          ? <Row>
              <a href={url} target='_blank'>{url}</a>
            </Row>
          : false}
      </Col>
    </Row>
  </Box>
)

export default Project
