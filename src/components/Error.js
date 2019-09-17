import React from 'react';
import styled from 'styled-components';

import HeaderText from './styled/Heading';

const ErrorText = styled.div`
  max-width: 550px;
  font-size: 1rem;
`

const Error = ({ error }) => {
  return (
    <div>
      <HeaderText>Error</HeaderText>
      <ErrorText>{error}</ErrorText>
    </div>
  );
}

export default Error;