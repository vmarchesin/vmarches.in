import React from 'react'
import styled from 'styled-components'
import { Row } from 'reactstrap'

import { createIcon } from 'utils'

import colors from "scss/colors"

const Overlay = styled.div`
  height: 100%;
  width: ${props => props.isOpen ? '100%' : '0%'};
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: ${colors.overlay};
  overflow-x: hidden;
  transition: 0.5s;

  > div {
    position: relative;
    top: 25%;
    width: 100%;
    text-align: center;
    margin-top: 30px;
  }

  > .close {
    padding: 8px;
    text-decoration: none;
    font-size: 36px;
    color: ${colors.icons};
    display: block;
    transition: 0.3s;

    position: absolute;
    top: 20px;
    right: 45px;
    font-size: 60px;

    &:hover, &:focus {
      color: #fff;
    }
  }
`

const Menu = ({
  isOpen,
  onClose,
}) => (
  <Overlay isOpen={isOpen}>
    <span className="close" onClick={onClose}>
      {createIcon({
        icon: ["fas", "times"],
        size: "xs",
      })}
    </span>
    <div>
    </div>
  </Overlay>
)

export default Menu