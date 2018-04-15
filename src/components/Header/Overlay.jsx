import React from 'react'
import styled from 'styled-components'
import { Col, Row } from 'reactstrap'
import { Link } from 'react-router-dom'
import cs from 'classnames'

import { createIcon } from 'utils'

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
  @keyframes swoosh { 
    0% { transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -300, 0, 0, 1); }
    1.3% { transform: matrix3d(3.905, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -237.02, 0, 0, 1); }
    2.55% { transform: matrix3d(4.554, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -182.798, 0, 0, 1); }
    4.1% { transform: matrix3d(4.025, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -125.912, 0, 0, 1); }
    5.71% { transform: matrix3d(3.039, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -79.596, 0, 0, 1); }
    8.11% { transform: matrix3d(1.82, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -31.647, 0, 0, 1); }
    8.81% { transform: matrix3d(1.581, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -21.84, 0, 0, 1); }
    11.96% { transform: matrix3d(1.034, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 4.825, 0, 0, 1); }
    12.11% { transform: matrix3d(1.023, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 5.53, 0, 0, 1); }
    15.07% { transform: matrix3d(0.947, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 12.662, 0, 0, 1); }
    16.12% { transform: matrix3d(0.951, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 13.007, 0, 0, 1); }
    27.23% { transform: matrix3d(1.001, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 2.352, 0, 0, 1); }
    27.58% { transform: matrix3d(1.001, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 2.121, 0, 0, 1); }
    38.34% { transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -0.311, 0, 0, 1); }
    40.09% { transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -0.291, 0, 0, 1); }
    50% { transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -0.048, 0, 0, 1); }
    60.56% { transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0.007, 0, 0, 1); }
    82.78% { transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
    100% { transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); } 
  }

  &.animate {
    animation: swoosh 2s ease-in both;
    animation-delay: ${props => props.animationdelay};
  }
  
  > a {
    background-color: ${colors.primaryDark};
    padding: 20px;
    color: white;
    font-size: 20px;
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
      {createIcon({
        icon: ['fas', 'times'],
        size: 'xs',
      })}
    </span>
    <div className='container'>
      <Section animationdelay={'0.2s'} className={cs({ animate: isOpen })}>
        <Link to='/' className='col-xs-12 col-md-8 hvr-forward' onClick={onClose}>
          {createIcon({
            color: '#fff',
            icon: ['fas', 'home'],
            size: 'xs',
          })} home
        </Link>
      </Section>
      <Section animationdelay={'0.4s'} className={cs({ animate: isOpen })}>
        <Link to='/projects' className='col-xs-12 col-md-8 hvr-forward' onClick={onClose}>
          {createIcon({
            color: '#fff',
            icon: ['fas', 'boxes'],
            size: 'xs',
          })} projects
        </Link>
      </Section>
    </div>
  </Overlay>
)

export default Menu