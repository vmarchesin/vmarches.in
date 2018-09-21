import React from 'react'
import styled from 'styled-components'
import { Col, Row } from 'reactstrap'
import { Link } from 'react-router-dom'
import cs from 'classnames'

import { URLS } from 'utils/constants'
import icons from 'tools/loaders/fontAwesome'
import { createIcon } from 'components/FontAwesome'

import colors from 'scss/colors'

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

const Section = styled(Row)`
  &.animate {
    animation: swoosh 2s ease-in both;
    animation-delay: ${props => props.animationdelay}s;
  }

  > a {
    background-color: ${colors.primaryDark};
    border: 2px solid ${colors.white};
    border-radius: 10px;
    color: ${colors.white};
    font-size: 20px;
    margin-bottom: 4px;
    padding: 20px;
    text-decoration: none;
    transition: 0.3s;
    white-space: nowrap;

    &:hover {
      background-color: ${colors.primary};
    }
  }

  justify-content: center;
  margin-top: 5px;
`

const Menu = ({
  isOpen,
  onClose,
}) => (
  <Overlay isOpen={isOpen}>
    <span className='close' onClick={onClose}>
      {createIcon({ icon: icons.times, size: 'xs' })}
    </span>
    <div className='container'>
      {[
        { icon: icons.home, name: 'home', path: '/' },
        { icon: icons.boxes, name: 'projects', path: '/projects' },
        { icon: icons.medium, name: 'blog', href: URLS.MEDIUM },
      ].map((section, i) => (
        <Section animationdelay={(i + 1) / 10} className={cs({ animate: isOpen })} key={i}>
          {(() => {
            const content = (
              <React.Fragment>
                {createIcon({ color: colors.white, icon: section.icon, size: 'xs' })}
                {` ${section.name}`}
              </React.Fragment>
            )
            const props = { className: 'col-xs-12 col-md-8', onClick: onClose }

            return section.href ? (
              <a href={section.href} target='_blank' {...props}>
                {content}
              </a>
            ) : (
              <Link to={section.path} {...props}>
                {content}
              </Link>
            )
          })()}
        </Section>
      ))}
    </div>
  </Overlay>
)

export default Menu