import React from 'react'
import cs from "classnames"
import styled from "styled-components"
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

const A = styled.a`
  color: ${props => props.color}
  padding: 5px;

  min-width: 35px;
  min-height: 35px;
  &:hover {
    color: ${props => props.hoverColor};
  }
`

const Icon = ({
  color = "#757575",
  customClass = "",
  icon,
  hoverColor = "white",
  href,
  pulse = false,
  size = "2x",
  spin = false,
}) => (
  <A 
    color={color}
    hoverColor={hoverColor}
    href={href} 
    target="_blank" 
  >
    <FontAwesomeIcon
      className={customClass}
      icon={icon}
      pulse={pulse}
      size={size}
      spin={spin}
    />
  </A>
)

export default Icon