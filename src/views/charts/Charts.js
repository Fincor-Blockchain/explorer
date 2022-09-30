import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import styled from 'styled-components';
import { swap, token, sr } from 'src/assets/fincoreassests';
import {
  UsdjTrxRecordChart,
  TrxTotalSupplyMarketChart,
  TrxHistoryPriceChart,
  UsdtTrxRecordChart,
  TotalTransactionsChart,
  DailyTransactionsChart,
  CoreTokenTrxVolumnChart,
  OverallFreezingRateBarChart,
  OverallFreezingRateLineChart,
  AccountsHoldingTrxChart,
  ActiveAccountDistributionChart,
  AccountGrowthChart,
  DailyAvgBlockSizeChart,
  CumulativeBlockSizeChart,
  DailyEnergyConsumptionChart,
  ContractCallingChart,
  SRContractCallingChart,
  SROverallFreezingRateLineChart,
  DailyContractCallingProfileChart,
  SRDailyContractCallingProfileChart
} from './allcharts';
import { ScreenTitle } from 'src/components';

const Wrapper = styled.div`
  margin-bottom: 30px;
`;

const Header = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  min-height: 20px;
  margin: 12px 0px;
`;
const TableHeading = styled.h1`
  font-family: GilroyLight;
  font-size: 18px;
  letter-spacing: 0.54px;
  padding: 0px 0px;
`;
const BlockIcon = styled.img`
  margin-right: 12px;
  width: 16px;
  height: 18px;
`;
const MainWrapper = styled.div`
  height: 90%;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width: 992px) {
    justify-content: space-around;
  }
  @media (max-width: 768px) {
    justify-content: center;
  }
`;
const Title = styled.h1`
  font-size: 18px;
  font-family: GilroyBold;
`;
const Card = styled.div`
  padding: 1rem;
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  border: none;
  color: #24234d;
  margin: 4px 0px;
  cursor: pointer;
  transition: all 0.2s ease-out;
  :hover {
    color: #d5da43;
    transform: translateY(-10px);
    box-shadow: 0 16px 20px 0 rgba(0, 0, 0, 0.11);
  }
  @media (max-width: 992px) {
    margin: 10px 4px;
  }
`;
const TopWrapper = styled.div`
  // height: 100%;
  min-height: 130px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 30px;
  margin-top: -200px;
  @media (max-width: 768px) {
    margin-top: -200px;
  }
`;
const Main = () => {
  return (
    <>
      <Container fluid="xl">
        <TopWrapper>
          <ScreenTitle title="Charts" subTitle="Home/Data/Charts" />
        </TopWrapper>
        <>
          <CardWrapper>
            <Card>
              <Title>Transaction</Title>
            </Card>
            <Card>
              <Title>StableCoin Transaction</Title>
            </Card>
            <Card>
              <Title>Circulation</Title>
            </Card>
            <Card>
              <Title>Tokens</Title>
            </Card>
            <Card>
              <Title>Account</Title>
            </Card>
            <Card>
              <Title>Block</Title>
            </Card>
            <Card>
              <Title>Content</Title>
            </Card>
            <Card>
              <Title>SR</Title>
            </Card>

            <Card>
              <Title>Network</Title>
            </Card>
          </CardWrapper>
        </>
        <Wrapper>
          <Row>
            <Col lg="6">
              <MainWrapper>
                <Header>
                  <BlockIcon src={swap} alt="icon" />
                  <TableHeading>Transaction</TableHeading>
                </Header>
                <DailyTransactionsChart />
              </MainWrapper>
            </Col>
            <Col lg="6">
              <MainWrapper>
                <Header>
                  <TableHeading></TableHeading>
                </Header>
                <TotalTransactionsChart />
              </MainWrapper>
            </Col>
          </Row>
        </Wrapper>
        <Wrapper>
          <Row>
            <Col lg="6">
              <MainWrapper>
                <Header>
                  <BlockIcon src={swap} alt="icon" />
                  <TableHeading>Stable Coin Transactions</TableHeading>
                </Header>
                <UsdtTrxRecordChart />
              </MainWrapper>
            </Col>
            <Col lg="6">
              <MainWrapper>
                <Header>
                  <TableHeading></TableHeading>
                </Header>
                <UsdjTrxRecordChart />
              </MainWrapper>
            </Col>
          </Row>
        </Wrapper>
        <Wrapper>
          <Row>
            <Col lg="4">
              <MainWrapper>
                <Header>
                  <BlockIcon src={swap} alt="icon" />
                  <TableHeading>Circulation</TableHeading>
                </Header>
                <TrxHistoryPriceChart />
              </MainWrapper>
            </Col>
            <Col lg="4">
              <MainWrapper>
                <Header>
                  <TableHeading></TableHeading>
                </Header>
                <TrxTotalSupplyMarketChart />
              </MainWrapper>
            </Col>
            <Col lg="4">
              <MainWrapper>
                <Header>
                  <TableHeading></TableHeading>
                </Header>
                <OverallFreezingRateBarChart />
              </MainWrapper>
            </Col>
          </Row>
        </Wrapper>
        <Wrapper>
          <Row>
            <Col lg="4">
              <MainWrapper>
                <Header>
                  <BlockIcon src={swap} alt="icon" />
                  <TableHeading>Circulation</TableHeading>
                </Header>
                <OverallFreezingRateLineChart />
              </MainWrapper>
            </Col>
            <Col lg="8">
              <MainWrapper>
                <Header>
                  <BlockIcon src={token} alt="icon" />
                  <TableHeading>Tokens</TableHeading>
                </Header>
                <CoreTokenTrxVolumnChart />
              </MainWrapper>
            </Col>
          </Row>
        </Wrapper>
        <Wrapper>
          <Row>
            <Col lg="4">
              <MainWrapper>
                <Header>
                  <BlockIcon src={swap} alt="icon" />
                  <TableHeading>Account</TableHeading>
                </Header>
                <AccountGrowthChart />
              </MainWrapper>
            </Col>
            <Col lg="4">
              <MainWrapper>
                <Header>
                  <TableHeading></TableHeading>
                </Header>
                <AccountsHoldingTrxChart />
              </MainWrapper>
            </Col>
            <Col lg="4">
              <MainWrapper>
                <Header>
                  <TableHeading></TableHeading>
                </Header>
                <ActiveAccountDistributionChart />
              </MainWrapper>
            </Col>
          </Row>
        </Wrapper>
        <Wrapper>
          <Row>
            <Col lg="6">
              <MainWrapper>
                <Header>
                  <BlockIcon src={swap} alt="icon" />
                  <TableHeading>Block</TableHeading>
                </Header>
                <DailyAvgBlockSizeChart />
              </MainWrapper>
            </Col>
            <Col lg="6">
              <MainWrapper>
                <Header></Header>
                <CumulativeBlockSizeChart />
              </MainWrapper>
            </Col>
          </Row>
        </Wrapper>
        <Wrapper>
          <Row>
            <Col lg="4">
              <MainWrapper>
                <Header>
                  <BlockIcon src={swap} alt="icon" />
                  <TableHeading>Contract</TableHeading>
                </Header>
                <DailyEnergyConsumptionChart />
              </MainWrapper>
            </Col>
            <Col lg="4">
              <MainWrapper>
                <Header>
                  <TableHeading></TableHeading>
                </Header>
                <ContractCallingChart />
              </MainWrapper>
            </Col>
            <Col lg="4">
              <MainWrapper>
                <Header>
                  <TableHeading></TableHeading>
                </Header>
                <DailyContractCallingProfileChart />
              </MainWrapper>
            </Col>
          </Row>
        </Wrapper>
        <Wrapper>
          <Row>
            <Col lg="4">
              <MainWrapper>
                <Header>
                  <BlockIcon src={sr} alt="icon" />
                  <TableHeading>SR</TableHeading>
                </Header>
                <SRDailyContractCallingProfileChart />
              </MainWrapper>
            </Col>
            <Col lg="4">
              <MainWrapper>
                <Header>
                  <TableHeading></TableHeading>
                </Header>
                <SRContractCallingChart />
              </MainWrapper>
            </Col>
            <Col lg="4">
              <MainWrapper>
                <Header>
                  <BlockIcon src={sr} alt="icon" />
                  <TableHeading>Network</TableHeading>
                </Header>
                <SROverallFreezingRateLineChart />
              </MainWrapper>
            </Col>
          </Row>
        </Wrapper>
      </Container>
    </>
  );
};

export default Main;
