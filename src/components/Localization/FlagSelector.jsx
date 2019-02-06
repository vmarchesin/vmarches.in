import React from 'react';
import { withLocalize } from 'react-localize-redux';
import styled from 'styled-components';

import Image from 'components/Image';

const Flag = styled(Image)`
  cursor: pointer;
`;

const FlagSelector = ({
  languages,
  activeLanguage,
  setActiveLanguage,
  ...props
}) => {
  if (!activeLanguage) {
    return false;
  }

  const currentLanguage = languages.filter(lang => lang.code === activeLanguage.code)[0];

  return activeLanguage ? (
    <Flag
      src={currentLanguage.flag}
      onClick={() => setActiveLanguage(currentLanguage.next)}
      w="32px"
      h="32px"
      {...props}
    />
  ) : false;
};

export default withLocalize(FlagSelector);
