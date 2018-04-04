import React from 'react'
import cs from "classnames"
import styled from "styled-components"
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

const A = styled.a`
  color: ${props => props.color}

  &:hover {
    color: ${props => props.hoverColor};
  }
`

const Icon = ({
  color = "white",
  icon,
  hoverColor = "white",
  href,
  size = "lg",
  spin = false,
}) => (
  <A 
    color={color}
    hoverColor={hoverColor}
    href={href} 
    target="_blank" 
  >
    <FontAwesomeIcon
      className={cs({ [`fa-${size}`]: true, 'fa-spin': spin })}
      icon={icon}
    />
  </A>
)

export default Icon