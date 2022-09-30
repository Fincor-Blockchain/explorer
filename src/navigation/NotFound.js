import React from 'react';
import { Container } from 'reactstrap';
import styled from 'styled-components';
import { wireBreak, Background } from 'src/assets/fincoreassests';
const MainWrapper = styled.div`
  background: url(${Background});
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  display: flex;
  /* justify-content: center; */
  align-items: center;
`;
const Wrapper = styled.div`
  display: flex;
  /* justify-content: center; */
  flex-direction: column;
  align-items: center;
  // display: flex;
  // justify-content: center;
  // align-items: center;
  // flex-direction: column;
  // padding: 5rem 0;
`;
const FourOFour = styled.h1`
  // color: #d5da43;
  color: #d5da43;
  font-size: 80px;
  font-family: 'GilroyExtraBold';
`;
const WireBreak = styled.img`
  max-width: 100%;
`;
const Content = styled.p`
  font-size: 24px;
  text-align: center;
  margin: 20px 0px;
  color: #d5da43;
  font-family: GilroyBold;
`;
const NotFound = () => {
  return (
    <MainWrapper>
      <Container>
        <Wrapper>
          <FourOFour>404</FourOFour>
          <Content>Whoops ... page not found :(</Content>
          <WireBreak src={wireBreak} />
        </Wrapper>
      </Container>
    </MainWrapper>
  );
};

export default NotFound;
