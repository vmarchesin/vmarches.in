import React from 'react'
import styled from 'styled-components'

const Image = styled.img`
  max-height: 200px;
  max-width: 200px;

  height: ${props => props.h};
  width: ${props => props.w};
`
const Component = ({
  h = "auto",
  src,
  w = "auto",
}) => (
  <Image 
    h={h}
    src={src}
    w={w}
  />
)

export default Component
