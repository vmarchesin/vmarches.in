import React from 'react'
import styled from 'styled-components'
import { Col, Row } from "reactstrap"
import cs from 'classnames'

import Overlay from './Overlay'
import { createIcon, wrapAnchor } from 'utils'

import colors from "scss/colors"

const Nav = styled.nav`
  padding: 20px;
  min-height: 50px;

  > div div span {
    cursor: pointer;
    transition: .5s ease-in-out;

    &.hide {
      transform:rotate(359deg) scale(0);
    }
  }
`

class Navbar extends React.Component {
  state = {
    overlayIsOpen: false,
  }

  toggleOverlay = () => {
    console.log(this.state.overlayIsOpen)
    this.setState({ overlayIsOpen: !this.state.overlayIsOpen })
  }

  render = () => (
    <Nav>
      <Overlay isOpen={this.state.overlayIsOpen} onClose={this.toggleOverlay}/>
      <div className="container">
        <Row className="justify-content-start">
          <span className={cs({ hide: this.state.overlayIsOpen })} onClick={this.toggleOverlay}>
            {createIcon({
              hoverColor: colors.primary,
              icon: ["fas", "bars"],
            })}
          </span>
        </Row>
      </div>
    </Nav>
  )
}

export default Navbar
