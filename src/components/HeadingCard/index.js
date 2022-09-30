import React from 'react';
import styled from 'styled-components';
const HeadingCard = styled.div`
  display: flex;
  justify-content: space-between;
  background: #ffffff;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 1.5rem;
  height: 100%;
  min-height: 100px;
  height: 100%;
  min-height: 100px;
`;
const Heading = styled.h1`
  font-family: 'GilroyBold';
  font-size: 18px;
  color: #111827;

  line-height: 150%;
`;
const LightText = styled(Heading)`
  opacity: 0.4;
  font-size: 11px;
  line-height: 13px;
`;
const SubHeading = styled(Heading)`
  font-family: GilroyRegular;
  font-size: 14px;
  line-height: 17px;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

function index(props) {
  return (
    <>
      <HeadingCard>
        <Content>
          <Heading>Votes</Heading>
          <LightText>Total in TRONSCAN</LightText>
          <SubHeading>Total in TRONSCAN</SubHeading>
        </Content>
      </HeadingCard>
    </>
  );
}

export default index;
