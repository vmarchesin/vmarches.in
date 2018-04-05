import React from 'react'
import cs from "classnames"
import styled from "styled-components"
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

const Colored = styled.span`
  color: ${props => props.color}
  padding: 5px;

  min-width: 35px;
  min-height: 35px;
  &:hover {
    color: ${props => props.hoverColor};
  }
`

const Component = ({
  color = "#757575",
  customClass = "",
  icon,
  hoverColor = "white",
  pulse = false,
  size = "2x",
  spin = false,
}) => (
  <Colored
    color={color}
    hoverColor={hoverColor}
  >
    <FontAwesomeIcon
      className={customClass}
      icon={icon}
      pulse={pulse}
      size={size}
      spin={spin}
    />
  </Colored>
)

export default Component