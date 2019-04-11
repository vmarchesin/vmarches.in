import React from 'react';
import styled from 'styled-components';
import { prop } from 'styled-tools';

const Flip = styled.div`
  height: ${prop('height', 'auto')};
  width: ${prop('width', 'auto')};
`

const Component = ({
  front,
  back,
  ...props,
}) => (
  <Flip className="flip-container" {...props}>
    <div className="flip">
      <div className="front">
        {front}
      </div>
      <div className="back">
        {back}
      </div>
    </div>
  </Flip>
);

export default Component;
