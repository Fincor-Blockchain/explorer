import React, { useEffect, useState } from 'react';
import { ComingSoon, PageContainer, ScreenTitle } from 'src/components';
import { TransactionsTable } from './components';
import styled from 'styled-components';
import { Container, Row, Col } from 'reactstrap';
import { latestblock } from 'src/assets/fincoreassests';

import { getAllTransactions, getGraphData } from 'src/redux/actions';

import history from '../../utils/history';
import queryString from 'query-string';
import { useDispatch, useSelector } from 'react-redux';
import { Pagination } from 'src/components';

// card
const TopWrapper = styled.div`
  height: 100%;
  min-height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: -200px;
`;
const FlexCloumn = styled.div`
  display: flex;
  flex-direction: column;
  // align-items: flex-start;
`;

const Card = styled.div`
  position: relative;
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
// will be used later

// const PieChartCard = styled(Card)`
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   justify-content: flex-start;
//   height: calc(100% - 20px);
// `;
const Content = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
const Body1 = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const CardHead = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 8px;
  @media (max-width: 320px) {
    align-items: center;
  }
`;
const HeadContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
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
  font-family: 'GilroyMedium';
  opacity: 0.4;
  font-size: 11px;
  margin: 6px 0px;
  @media (max-width: 320px) {
    margin: 0px 0px;
    font-size: 10px;
  }
`;
const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;
const SemiBoldText = styled(CardHeading)`
  font-family: 'GilroySemiBold';
  font-size: 14px;
  margin: 4px 0px;
  @media (max-width: 320px) {
    font-size: 10px;
  }
`;
const SemiLightText = styled(SemiBoldText)`
  font-family: 'GilroyLight';
  @media (max-width: 576px) {
    font-size: 10px;
  }
`;

// const PieChartWrapper = styled.div`
//   display: flex;
//   width: 100%;
//   align-items: center;
//   justify-content: space-between;
//   display: flex;
//   min-height: 214px;
//   margin: 10px 0px;
//   align-items: center;
//   @media (max-width: 992px) {
//     justify-content: space-around;
//   }
//   @media (max-width: 480px) {
//     flex-direction: column-reverse;
//     align-items: center;
//   }
// `;
// const ChartLabelsWrapper = styled.div`
//   max-height: 150px;
//   width: 290px;
//   display: flex;
//   flex-direction: column;
//   flex-wrap: wrap;
//   @media (max-width: 1200px) {
//     flex-direction: row;
//   }
//   @media (max-width: 992px) {
//     flex-direction: column;
//   }
//   @media (max-width: 480px) {
//     width: 100%;
//     flex-direction: row;
//     flex-wrap: wrap;
//     max-height: 100%;
//   }
// `;
// const InfoLableWrapper = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: flex-start;
//   padding: 4px 8px;
// `;
// const InfoText = styled.p`
//   font-family: 'GilroyBold';
//   font-size: 10px;
//   color: #24234d;
//   margin-left: 4px;
//   @media (max-width: 576px) {
//     font-size: 9px;
//   }
// `;
// const Dot = styled.span`
//   height: 8px;
//   width: 8px;
//   background-color: green;
//   border-radius: 50%;
//   display: inline-block;
// `;

const Footer = styled.div`
  display: flex;
  justify-content: row;
  justify-content: flex-end;
  padding: 16px 12px;
`;

const Transactions = (props) => {
  const dispatch = useDispatch();

  // const supply = useSelector((state) => state.supply.totalSupply);
  const { location } = props;
  const { page = 1, limit = 10 } = queryString.parse(location.search);
  const [state, setState] = useState({ limit: limit, currentPage: page - 1 });
  const {
    totalTxsData
    // totalTxsDataLoading
  } = useSelector((state) => state.graph);
  const { allTxs, allTxsLoading } = useSelector((state) => state.txs);

  let txs = allTxs && allTxs.data.txs;

  const pageHandler = (e, index) => {
    e.preventDefault();

    history.push(`/txs?page=${index}`);

    setState({
      ...state,
      currentPage: index - 1
    });
  };
  const changeLimit = (limit) => {
    let totalCount = (state.currentPage + 1) * state.limit;
    if (totalCount > allTxs.data.total_count) {
      totalCount = allTxs.data.total_count;
    }
    let currentPage = totalCount / limit;
    currentPage = Math.ceil(currentPage);
    if (currentPage) {
      setState({ ...state, limit, currentPage: currentPage - 1 });
    }
    history.push(`/blocks?page=${currentPage}&&limit=${limit}`);
  };
  useEffect(() => {
    const { page = 1, limit = 10 } = queryString.parse(location.search);
    const filter = {
      page: page - 1,
      limit: limit
    };
    dispatch(getAllTransactions(filter));
    dispatch(getGraphData());
  }, [page, limit, location, dispatch]);

  return (
    <>
      <Container>
        <TopWrapper>
          <ScreenTitle title="Transactions" subTitle="Home/Transactions" />
        </TopWrapper>
        <>
          <Row>
            <Col lg="12">
              <Row>
                <Col lg="6">
                  <Card>
                    <Content>
                      <Body1>
                        <CardHead>
                          <HeadContent>
                            <CardHeading>Txn Count</CardHeading>
                          </HeadContent>
                          <LightText className="rightAlign">
                            Updated 1 sec ago
                          </LightText>
                        </CardHead>
                        <TextWrapper>
                          <LightText>New Txns Yesterday</LightText>
                          <LightText className="rightAlign">
                            Total Txn Count
                          </LightText>
                        </TextWrapper>
                        <TextWrapper>
                          <SemiBoldText>
                            +{' '}
                            {totalTxsData &&
                              totalTxsData.graphData[5]?.totalTrx}
                          </SemiBoldText>
                          <SemiBoldText className="rightAlign">
                            {totalTxsData && totalTxsData.totalTrx}
                          </SemiBoldText>
                        </TextWrapper>
                      </Body1>
                    </Content>
                  </Card>
                </Col>
                <Col lg="6">
                  <Card>
                    <ComingSoon />
                    <Content>
                      <Body1>
                        <CardHead>
                          <HeadContent>
                            <CardHeading>Trading Volumn</CardHeading>
                          </HeadContent>
                          <LightText className="rightAlign">
                            Updated 1 sec ago
                          </LightText>
                        </CardHead>
                        <TextWrapper>
                          <FlexCloumn>
                            <SemiBoldText>289.729867 B TRX</SemiBoldText>
                            <SemiLightText>
                              (≈21,804,268,705.541 USD)
                            </SemiLightText>
                          </FlexCloumn>
                          <FlexCloumn>
                            <SemiBoldText className="rightAlign">
                              1,138,284.557334 B TRX
                            </SemiBoldText>
                            <SemiLightText className="rightAlign">
                              (≈85,664,148,605,147.52 USD)
                            </SemiLightText>
                          </FlexCloumn>
                        </TextWrapper>
                      </Body1>
                    </Content>
                  </Card>
                </Col>
              </Row>
            </Col>
            {/* // will be used later */}
            {/*  <Col lg="6">
             <PieChartCard>
                <ComingSoon />
                <CardHeading>Transaction Type Distribution</CardHeading>
                <PieChartWrapper>
                  <TransactionsPieChart />
                  <ChartLabelsWrapper>
                    <InfoLableWrapper>
                      <Dot style={{ backgroundColor: '#D5DA43' }} />
                      <InfoText>Trx Transfer</InfoText>
                    </InfoLableWrapper>
                    <InfoLableWrapper>
                      <Dot style={{ backgroundColor: '#FF2990' }} />
                      <InfoText>TRC10 Transfer</InfoText>
                    </InfoLableWrapper>
                    <InfoLableWrapper>
                      <Dot style={{ backgroundColor: '#7B61FF' }} />
                      <InfoText>Freeze TRX</InfoText>
                    </InfoLableWrapper>
                    <InfoLableWrapper>
                      <Dot style={{ backgroundColor: '#EF2546' }} />
                      <InfoText>Votes</InfoText>
                    </InfoLableWrapper>
                    <InfoLableWrapper>
                      <Dot style={{ backgroundColor: '#38F378' }} />
                      <InfoText>Other</InfoText>
                    </InfoLableWrapper>
                    <InfoLableWrapper>
                      <Dot style={{ backgroundColor: '#627EEA' }} />
                      <InfoText>TK5qtn9x...HCTMx</InfoText>
                    </InfoLableWrapper>
                    <InfoLableWrapper>
                      <Dot style={{ backgroundColor: '#50AF95' }} />
                      <InfoText>TronBetDice</InfoText>
                    </InfoLableWrapper>
                    <InfoLableWrapper>
                      <Dot style={{ backgroundColor: '#2FDCDC' }} />
                      <InfoText>USDT</InfoText>
                    </InfoLableWrapper>
                    <InfoLableWrapper>
                      <Dot style={{ backgroundColor: '#3651DE' }} />
                      <InfoText>TronBet</InfoText>
                    </InfoLableWrapper>
                    <InfoLableWrapper>
                      <Dot style={{ backgroundColor: '#B025E1' }} />
                      <InfoText>TXSjGe7j...N8u2x</InfoText>
                    </InfoLableWrapper>
                    <InfoLableWrapper>
                      <Dot style={{ backgroundColor: '#FA5656' }} />
                      <InfoText>TrxChainInsurance</InfoText>
                    </InfoLableWrapper>
                    <InfoLableWrapper>
                      <Dot style={{ backgroundColor: '#25DDA6' }} />
                      <InfoText>TVKNue1B...ns9iH</InfoText>
                    </InfoLableWrapper>
                    <InfoLableWrapper>
                      <Dot style={{ backgroundColor: '#3BB8FE' }} />
                      <InfoText>TronBetLivePool</InfoText>
                    </InfoLableWrapper>
                    <InfoLableWrapper>
                      <Dot style={{ backgroundColor: '#F83EC4' }} />
                      <InfoText>BankOfTron</InfoText>
                    </InfoLableWrapper>
                    <InfoLableWrapper>
                      <Dot style={{ backgroundColor: '#A5A5A5' }} />
                      <InfoText>TVKNue1B...ns9iH</InfoText>
                    </InfoLableWrapper>
                    <InfoLableWrapper>
                      <Dot style={{ backgroundColor: '#FFB800' }} />
                      <InfoText>Other Smart Contract Transactions </InfoText>
                    </InfoLableWrapper>
                  </ChartLabelsWrapper>
                </PieChartWrapper>
              </PieChartCard> 
            </Col>*/}
          </Row>
        </>
      </Container>
      <PageContainer heading="Latest Transactions" src={latestblock}>
        <TransactionsTable txs={txs} loading={allTxsLoading} />
      </PageContainer>
      <Container>
        {txs && txs?.length >= 10 ? (
          <Footer>
            <Pagination
              pageHandler={pageHandler}
              changeLimit={changeLimit}
              count={allTxs && allTxs.data.total_count}
              limit={limit}
              currentPage={page - 1}
            />
          </Footer>
        ) : (
          ''
        )}
      </Container>
    </>
  );
};

export default Transactions;
