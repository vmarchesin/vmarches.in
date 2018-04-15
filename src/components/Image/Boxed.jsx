import React from 'react'
import styled from 'styled-components'

export const Boxed = styled.img`
  max-height: 256px!important;
  max-width: 256px!important;

  height: ${props => props.h}!important;
  width: ${props => props.w}!important;
`
const Component = ({
  className = '',
  h = 'auto',
  src,
  w = 'auto',
}) => (
  <Boxed
    className={className}
    h={h}
    src={src}
    w={w}
  />
)

export default Component
