import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: white;
  opacity: 1;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;

const Text = styled.div`
  color: #24234d;
`;

const ComingSoon = () => {
  return (
    <Wrapper>
      <Text>Coming Soon</Text>
    </Wrapper>
  );
};

export default ComingSoon;
