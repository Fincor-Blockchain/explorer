import React from 'react';
import { FoundationAddressesTable } from './components';
import styled from 'styled-components';
import { Container } from 'reactstrap';
import { Row, Col } from 'reactstrap';
import { PageContainer, ScreenTitle } from 'src/components';

// card
const TopWrapper = styled.div`
  height: 100%;
  min-height: 130px;
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
`;
const CardHeading = styled.h1`
  font-family: 'GilroyBold';
  font-size: 18px;
  color: #111827;
  @media (max-width: 320px) {
    font-size: 14px;
  }
`;

const BoldText = styled.p`
  font-size: 14px;
  font-family: 'GilroyBold';
  color: #24234d;
`;
const LightText = styled(CardHeading)`
  opacity: 0.4;
  font-size: 14px;
  line-height: 22.4px;
  font-family: 'GilroyMedium';
`;

const FoundationAddresses = () => {
  return (
    <>
      <Container>
        <TopWrapper>
          <ScreenTitle
            title="Foundation Addresses"
            subTitle="Home/Foundation Address"
          />
        </TopWrapper>
        <>
          <Row>
            <Col lg="6">
              <Card>
                <Content>
                  <BoldText>33,177,933,703.066</BoldText>
                  <LightText>Total number of frozen TRX</LightText>
                </Content>
              </Card>
            </Col>
            <Col lg="6">
              <Card>
                <Content>
                  <BoldText>2020-01-01 (UTC)</BoldText>
                  <LightText>Unfreeze time</LightText>
                </Content>
              </Card>
            </Col>
          </Row>
        </>
      </Container>
      <PageContainer heading="Foundation addresses">
        <FoundationAddressesTable />
      </PageContainer>
    </>
  );
};

export default FoundationAddresses;
