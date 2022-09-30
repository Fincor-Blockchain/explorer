import React, { useEffect } from 'react';
import { Col, Container, Row } from 'reactstrap';
import LatestBlocks from './LatestBlocks';
import LatestTxs from './LatestTxs';
import Statistics from './Statistics';
import DailyTxnsChart from './statscharts/DailyTxnsChart';
import styled from 'styled-components';
import BannerCard from './BannerCards';
// Charts👇 work is in progress will be updated later
// import AccountGrowthChart from './statscharts/AccountGrowthChart';
// import ContractTriggersChart from './statscharts/ContractTriggersChart';
// import ResourseConsumptionChart from './statscharts/ResourseConsumptionChart';
// import DailyTrxFrozenChart from './statscharts/DailyTrxFrozenChart';
import { useDispatch } from 'react-redux';
import { getGraphData } from 'src/redux/actions';

const Wrapper = styled.div`
  margin: 1rem 0rem;
`;

const Main = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGraphData());
  }, [dispatch]);

  return (
    <>
      <BannerCard />
      <Container fluid="xl">
        <Wrapper>
          <Row>
            <Col lg="3" sm="4">
              <Statistics />
            </Col>

            <Col lg="9" sm="8">
              <DailyTxnsChart />
            </Col>
          </Row>
        </Wrapper>
        <Wrapper>
          <Row>
            <Col lg="6">
              <LatestBlocks />
            </Col>
            <Col lg="6">
              <LatestTxs />
            </Col>
          </Row>
        </Wrapper>
        {/* Charts👇 work is in progress will be updated later */}
        {/* <Wrapper>
          <Row>
            <Col lg="6">
              <AccountGrowthChart />
            </Col>
            <Col lg="6">
              <ContractTriggersChart />
            </Col>
          </Row>
        </Wrapper>
        <Wrapper>
          <Row>
            <Col lg="6">
              <ResourseConsumptionChart />
            </Col>
            <Col lg="6">
              <DailyTrxFrozenChart />
            </Col>
          </Row>
        </Wrapper> */}
      </Container>
    </>
  );
};

export default Main;
