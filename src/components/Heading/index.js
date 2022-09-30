import React from 'react';
import styled from 'styled-components';
const HeadingWrapper = styled.div`
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-family: 'GilroyBold';
  font-size: 48px;
  line-height: 2;
  letter-spacing: 0.9px;
  text-align: center;
  color: #fff;

  @media (max-width: 768px) {
    font-size: 36px;
  }
  @media (max-width: 576px) {
    font-size: 25px;
  }
`;
const SmallTitle = styled.span`
  font-family: 'GilroyLight';
  font-size: 48px;
  line-height: 2;
  letter-spacing: 0.9px;
  text-align: center;
  color: #fff;
  @media (max-width: 768px) {
    font-size: 36px;
  }
  @media (max-width: 576px) {
    font-size: 25px;
  }
`;
const Paragraph = styled.p`
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: center;
  color: #f1f2f2;
  opacity: 0.7;
`;
function Headings(props) {
  return (
    <HeadingWrapper>
      <Title>
        <SmallTitle>{props.small}</SmallTitle> {props.heading}{' '}
        <SmallTitle>{props.small2}</SmallTitle>
      </Title>
      <Paragraph>{props.para}</Paragraph>
    </HeadingWrapper>
  );
}

export default Headings;
