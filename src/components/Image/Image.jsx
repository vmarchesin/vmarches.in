import React from 'react';
import styled from 'styled-components';
import { ifProp, prop } from 'styled-tools';

export const Boxed = styled.img`
  max-height: 256px!important;
  max-width: 256px!important;

  height: ${prop('h')}!important;
  width: ${prop('w')}!important;

  ${ifProp('round', 'border-radius: 50px;')}
  ${ifProp('circle', 'border-radius: 256px;')}

  ${ifProp('shadow', 'box-shadow: 0px 0px 25px 10px rgba(0,0,0,0.1);')}
`;

const Component = ({
  className = '',
  h = 'auto',
  src,
  w = 'auto',
  ...props,
}) => (
  <Boxed
    className={className}
    h={h}
    src={src}
    w={w}
    {...props}
  />
);

export default Component;
