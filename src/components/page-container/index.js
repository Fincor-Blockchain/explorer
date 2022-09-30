import React from 'react';
import { Container } from 'reactstrap';
import colors from 'src/vars/colors';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 23px 28px;
  border-radius: 8px;
  box-shadow: ${colors.shaddow};
  ${({ bg }) => `
  background-color:${bg ? bg : colors.white};
  margin: 10px 0px;
  @media(max-width:768px){
    padding: 12px 14px;
  }
  `}
`;

const Header = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding-bottom: 12px;
  border-bottom: 1px solid #dee2e6;
`;
const TableHeading = styled.h1`
  font-family: GilroyBold;
  font-size: 18px;
  letter-spacing: 0.54px;
  padding: 0px 0px;
`;
const BlockIcon = styled.img`
  margin-right: 6px;
`;
const PageContainer = ({
  marginright,
  alt,
  src,
  heading,
  children,
  ...rest
}) => {
  return (
    <Container>
      <Wrapper {...rest}>
        <Header>
          {src && <BlockIcon src={src} alt={alt} />}
          <TableHeading>{heading}</TableHeading>
        </Header>
        {children}
      </Wrapper>
    </Container>
  );
};

export default PageContainer;
