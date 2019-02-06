import React from 'react';
import styled from 'styled-components';
import { Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import { ifProp } from 'styled-tools';
import { Translate } from 'react-localize-redux';

import { URLS } from 'utils/constants';
import icons from 'tools/loaders/fontAwesome';
import { createIcon } from 'components/FontAwesome';
import FlagSelector from 'components/Localization';

import colors from 'scss/colors';

const Overlay = styled.div`
  height: 100%;
  width: ${ifProp('isOpen', '100%', '0%')};
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: ${colors.bgColor};
  overflow-x: hidden;
  transition: 0.5s;
  box-shadow: 0px 0px 25px 0px rgba(0,0,0,0.5);

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
    color: ${colors.icons}!important;
    display: block;
    transition: 0.3s;

    position: absolute;
    top: 20px;
    right: 45px;
    font-size: 60px;

    &:hover, &:focus {
      outline: none;
      > span {
        color: ${colors.icons}!important;
      }
    }
  }
`;

const Section = styled(Row)`
  > a {
    border-radius: 40px;
    background-color: ${colors.bgColor};
    color: ${colors.secondary};
    font-size: 20px;
    margin-bottom: 4px;
    padding: 20px 0;
    text-decoration: none;
    transition: 0.3s;
    white-space: nowrap;

    &:hover {
      background-color: ${colors.secondary};
      color: ${colors.white}!important;
      > span {
        color: ${colors.white}!important;
      }
    }
  }

  justify-content: center;
  margin-top: 5px;
`;

const Component = ({
  isOpen,
  onClose,
}) => (
  <Overlay isOpen={isOpen}>
    <span className="close" onClick={onClose}>
      {createIcon({ icon: icons.times, size: 'xs' })}
    </span>
    <div className="container">
      <FlagSelector w="48px" h="48px" />
      <hr />
      {[
        { icon: icons.home, name: <Translate id="nav.home" />, path: '/' },
        { icon: icons.boxes, name: <Translate id="nav.projects" />, path: '/projects' },
        { icon: icons.info, name: <Translate id="nav.about" />, path: '/about' },
        { icon: icons.medium, name: 'blog', href: URLS.MEDIUM },
      ].map((section, i) => (
        <React.Fragment key={i}>
          <Section key={i}>
            {(() => {
              const content = (
                <React.Fragment>
                  {createIcon({ color: colors.secondary, icon: section.icon, size: 'xs' })}
                  {' '}
                  {section.name}
                </React.Fragment>
              );

              const props = { className: 'col-xs-12 col-md-8', onClick: onClose };

              return section.href ? (
                <a href={section.href} target="_blank" rel="noopener noreferrer" {...props}>
                  {content}
                </a>
              ) : (
                <Link to={section.path} {...props}>
                  {content}
                </Link>
              );
            })()}
          </Section>
          <hr />
        </React.Fragment>
      ))}
    </div>
  </Overlay>
);

export default Component;
