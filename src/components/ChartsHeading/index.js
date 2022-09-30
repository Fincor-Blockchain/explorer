import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;
const Title = styled.h1`
  font-family: 'GilroySemiBold';
  font-size: 18px;
  color: #111827;
`;
const Subtitle = styled.span`
  font-family: 'GilroyLight';
  font-size: 18px;
  color: #111827;
  margin: 0px 6px;
`;
const ChartIcon = styled.img``;

function CharsHeading(props) {
  return (
    <Wrapper>
      <Title>{props.title}</Title>
      {props.subtitle && <Subtitle>{props.subtitle}</Subtitle>}
      {props.src && <ChartIcon src={props.src} alt={props.alt} />}
    </Wrapper>
  );
}

export default CharsHeading;
