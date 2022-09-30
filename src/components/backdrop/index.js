import React from 'react';
import styled from 'styled-components';
const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  margin-top: 60px;
  background: rgba(0, 0, 0, 0.5);
  z-index: 100;
  @media (max-width: 320px) {
    margin-top: 72px;
  }
`;
const Backdrop = (props) => <Wrapper onClick={props.click} />;

export default Backdrop;
