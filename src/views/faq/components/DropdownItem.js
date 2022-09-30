import React from 'react';
import styled from 'styled-components';
import { Collapse } from 'reactstrap';
import { useState } from 'react';
import { arrowDown, arrowUp } from 'src/assets/fincoreassests';
const TopWrapper = styled.div`
  width: 100%;
`;
const Content = styled.div`
  padding: 10px 28px;
`;
const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  display: flex;
  justify-content: space-between;
  background: #ffffff;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 23px 28px;
  // height: calc(100% - 16px);
  min-height: 70px;
  margin-bottom: 20px;
  .rightAlign {
    text-align: right;
  }
  @media (max-width: 768px) {
    padding: 12px 14px;
  }
`;
const AccordianTitle = styled.p`
  font-size: 18px;
  font-family: 'GilroyBold';
  color: #111827;
`;
const SemiBoldText = styled(AccordianTitle)`
  font-size: 14px;
  cursor: pointer;
`;

const Arrow = styled.img`
  margin-left: 6px;
`;
const ArrowWrapper = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
`;
const DropdownItem = (props) => {
  const [state, setState] = useState({
    isDropdownOpen: false,
    dropdownToggleIcon: 'Read'
  });

  const onDropdownClicked = () => {
    setState((prevState) => ({
      isDropdownOpen: !prevState.isDropdownOpen,
      dropdownToggleIcon:
        prevState.dropdownToggleIcon === 'Read' ? 'Close' : 'Read'
    }));
  };

  return (
    <TopWrapper id={props.id}>
      <TitleContainer>
        <AccordianTitle>{props.title}</AccordianTitle>
        <ArrowWrapper onClick={onDropdownClicked}>
          <SemiBoldText>{state.dropdownToggleIcon}</SemiBoldText>
          <Arrow
            src={state.dropdownToggleIcon === 'Read' ? arrowDown : arrowUp}
          />
        </ArrowWrapper>
      </TitleContainer>
      <Collapse isOpen={state.isDropdownOpen}>
        <Content>{props.children}</Content>
      </Collapse>
    </TopWrapper>
  );
};

export default DropdownItem;
