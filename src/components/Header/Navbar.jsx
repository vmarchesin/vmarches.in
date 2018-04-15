import React from 'react'
import styled from 'styled-components'
import { Col, Row } from 'reactstrap'
import cs from 'classnames'
import { Link } from 'react-router-dom'

import Overlay from './Overlay'
import { createIcon, wrapAnchor } from 'utils'

import colors from 'scss/colors'

const Nav = styled.nav`
  padding: 20px;
  min-height: 50px;

  > div div #burger-menu {
    cursor: pointer;
    transition: .5s ease-in-out;

    &.hide {
      transform:rotate(359deg) scale(0);
    }
  }

  > div div #menu {
    padding: 5px;
    
    > a {
      color: inherit;
      margin-left: 10px;
      padding-bottom: 4px;
      text-decoration: none;
    }
  }
`

class Navbar extends React.Component {
  state = {
    overlayIsOpen: false,
  }

  toggleOverlay = () => { this.setState({ overlayIsOpen: !this.state.overlayIsOpen }) }

  render = () => {
    const location = window.location.pathname

    return (
      <Nav>
        <Overlay isOpen={this.state.overlayIsOpen} onClose={this.toggleOverlay}/>
        <div>
          <Row className='justify-content-start'>
            <span
              className={cs({ hide: this.state.overlayIsOpen }, 'd-md-none')} 
              id='burger-menu'
              onClick={this.toggleOverlay}
            >
              {createIcon({
                hoverColor: colors.primary,
                icon: ['fas', 'bars'],
              })}
            </span>
            <span className='d-none d-md-block' id='menu'>
              {[
                { name: 'home', path: '/' },
                { name: 'projects', path: '/projects' },
                // { name: 'skills', path: '/skills' },
              ].map((l, i) => (
                <Link 
                  className={cs('hvr-underline-reveal', { 'underline-reveal': location === l.path })}
                  key={i}
                  to={l.path}
                >{l.name}</Link>
              ))}
            </span>
          </Row>
        </div>
      </Nav>
    )
  }
}

export default Navbar
