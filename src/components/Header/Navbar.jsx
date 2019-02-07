import React, { useState } from 'react';
import styled from 'styled-components';
import { Row } from 'reactstrap';
import cs from 'classnames';
import { Link } from 'react-router-dom';
import { Translate } from 'react-localize-redux';
import Hammer from 'hammerjs';

import icons from 'tools/loaders/fontAwesome';
import { URLS } from 'utils/constants';
import { createIcon } from 'components/FontAwesome';
import FlagSelector from 'components/Localization';

import colors from 'scss/colors';
import Overlay from './Overlay';

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

      &:hover {
        color: inherit!important;

        > span svg path {
          fill: ${colors.primary};
          transition: .5s ease-in-out;
        }
      }
    }
  }
`;

const handleSwipe = (setOverlay) => {
  const isMobile = window && window.screen.width <= 768;

  if (!isMobile) {
    return;
  }

  const manager = new Hammer.Manager(document.querySelector('body'));
  const Swipe = new Hammer.Swipe();
  manager.add(Swipe);

  const getStartPosition = (e) => {
    const deltaX = e.deltaX;
    const deltaY = e.deltaY;
    const finalX = e.srcEvent.pageX || e.srcEvent.screenX || 0;
    const finalY = e.srcEvent.pageY || e.srcEvent.screenY || 0;

    return {
      x: finalX - deltaX,
      y: finalY - deltaY,
      deltaY,
    };
  };

  const handleEdgeSwipe = (e) => {
    const { x, deltaY } = getStartPosition(e);

    if (x >= 0 && x <= 50 && deltaY < 100) { // swipe from left edge
      setOverlay(true);
    }
  };

  manager.on('swipe', e => handleEdgeSwipe(e));
};

const Navbar = () => {
  const [overlayIsOpen, setOverlay] = useState(false);
  const toggleOverlay = () => setOverlay(!overlayIsOpen);
  const location = window.location.pathname;

  handleSwipe(setOverlay);

  return (
    <Nav>
      <Overlay isOpen={overlayIsOpen} onClose={toggleOverlay} />
      <div>
        <Row className="justify-content-start">
          <span
            role="menu"
            className={cs({ hide: overlayIsOpen }, 'd-md-none')}
            id="burger-menu"
            onClick={toggleOverlay}
          >
            {createIcon({
              hoverColor: colors.primary,
              icon: icons.bars,
            })}
          </span>
          <span className="d-none d-md-block" id="menu">
            {[
              { name: <Translate id="nav.home" />, path: '/' },
              { name: <Translate id="nav.projects" />, path: '/projects' },
              { name: <Translate id="nav.about" />, path: '/about' },
            ].map((l, i) => (
              <Link
                className={cs('hvr-underline-reveal', { 'underline-reveal': location === l.path })}
                key={i}
                to={l.path}
              >{l.name}
              </Link>
            ))}
            <a className="hvr-underline-reveal" href={URLS.MEDIUM}>
              blog
              {createIcon({
                hoverColor: colors.primary,
                color: colors.bgColor,
                size: '1x',
                icon: icons.chevronRight,
              })}
            </a>
            <FlagSelector />
          </span>
        </Row>
      </div>
    </Nav>
  );
};

export default Navbar;
