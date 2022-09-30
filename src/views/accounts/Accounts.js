import React from 'react';
import { PageContainer, ScreenTitle } from 'src/components';
import { AccountsTable } from './components';
import styled from 'styled-components';
import { Container, Row, Col } from 'reactstrap';

// card
const TopWrapper = styled.div`
  height: 100%;
  min-height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: -200px;
`;

const Card = styled.div`
  display: flex;
  justify-content: space-between;
  background: #ffffff;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 23px 28px;
  // height: calc(100% - 16px);
  min-height: 70px;
  margin: 10px 0px;
  .rightAlign {
    text-align: right;
  }
  @media (max-width: 768px) {
    padding: 12px 14px;
  }
`;
const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

const CardHeading = styled.h1`
  font-family: 'GilroyBold';
  font-size: 18px;
  color: #111827;
  @media (max-width: 320px) {
    font-size: 14px;
  }
`;
const LightText = styled(CardHeading)`
  opacity: 0.4;
  font-family: 'GilroyLight';
  font-size: 18px;

  @media (max-width: 576px) {
    text-align: center;
  }
`;

// card

const Accounts = () => {
  return (
    <>
      <Container>
        <TopWrapper>
          <ScreenTitle title="Accounts" subTitle="Home/Accounts" />
        </TopWrapper>
        <>
          <Row>
            <Col lg="6">
              <Card>
                <Content>
                  <CardHeading>95,063</CardHeading>
                  <LightText>New accounts from the previous day</LightText>
                </Content>
              </Card>
            </Col>
            <Col lg="6">
              <Card>
                <Content>
                  <CardHeading>93,063</CardHeading>
                  <LightText>Real-time number of accounts</LightText>
                </Content>
              </Card>
            </Col>
          </Row>
        </>
      </Container>
      <PageContainer heading="Accounts">
        <AccountsTable />
      </PageContainer>
    </>
  );
};

export default Accounts;
