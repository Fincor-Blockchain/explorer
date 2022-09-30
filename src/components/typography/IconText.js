import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  // justify-content: center;
  align-items: center;
  a,
  span {
    max-width: 150px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
const IconText = ({ children, rest }) => (
  <Wrapper {...rest}>{children}</Wrapper>
);

export default IconText;
