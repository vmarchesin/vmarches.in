import React from 'react'
import styled from 'styled-components'

const Image = styled.img`
  border-radius: 50px;

  max-height: 200px;
  max-width: 200px;
`
const Component = ({
  src,
}) => (
  <Image 
    src={src}
  />
)

export default Component
