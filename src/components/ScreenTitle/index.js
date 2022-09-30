import React from 'react';
import styled from 'styled-components';
const PageHeading = styled.div``;
const PageTitle = styled.h1`
  font-family: 'GilroyBold';
  font-weight: bold;
  font-size: 48px;
  margin-bottom: 10px;
  text-align: center;
  color: #ffffff;
  @media (max-width: 576px) {
    font-size: 34px;
  }
`;

const PageSubTitle = styled(PageTitle)`
  font-family: 'GilroyLight';
  font-size: 14px;
  @media (max-width: 576px) {
    font-size: 12px;
  }
`;
function ScreenTitle(props) {
  return (
    <PageHeading>
      <PageTitle>{props.title} </PageTitle>
      <PageSubTitle>{props.subTitle} </PageSubTitle>
    </PageHeading>
  );
}

export default ScreenTitle;
