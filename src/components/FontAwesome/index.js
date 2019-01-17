import React from 'react';
import Icon from './Icon';

export const createIcon = (props, key) => (
  <Icon
    key={key || 0}
    {...props}
  />
);

export default Icon;
