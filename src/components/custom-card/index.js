import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardTitle } from 'reactstrap';
import styled from 'styled-components';

const LinkWapper = styled(Link)`
  text-decoration: none !important;
`;
const CardExp = styled(Card)`
  padding: 1rem;
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  border: none;
  width: 143px;
  height: 110px;
  color: #24234d;
  margin: 4px;
  cursor: pointer;
  transition: all 0.2s ease-out;
  :hover {
    color: #d5da43;
    transform: translateY(-10px);
    box-shadow: 0 16px 20px 0 rgba(0, 0, 0, 0.11);
  }
  @media (max-width: 768px) {
    width: 164px;
    margin: 5px;
  }
`;
const CardContent = styled(CardBody)`
  display: flex;
  flex-direction: column;
  padding: 0px;
  justify-content: center;
  align-items: center;
`;
const Title = styled(CardTitle)`
  font-family: GilroyBold;
  font-size: 18px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
`;
const Text = styled(Title)`
  font-size: 11px;
  font-family: GilroyMedium;
  color: #24234d;
  opacity: 0.4;
`;

function CustCard(props) {
  return (
    <LinkWapper to={`/blocks/${props.title}`}>
      <CardExp>
        <CardContent>
          <CardContent>
            <Title>{props.title}</Title>
            <Text>{props.text}</Text>
          </CardContent>
        </CardContent>
      </CardExp>
    </LinkWapper>
  );
}

export default CustCard;
