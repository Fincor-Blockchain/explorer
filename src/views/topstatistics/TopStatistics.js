import React, { useState } from 'react';
import {
  TronNetworkParameterTable,
  Overview,
  Accounts,
  Tokens,
  Contracts
} from './components';
import styled from 'styled-components';
import { Container } from 'reactstrap';
import { TabContent, TabPane, NavLink } from 'reactstrap';
import classnames from 'classnames';
import { ScreenTitle } from 'src/components';

const Main = styled.div`
  .nav-link {
    padding: 0;
    background-color: none;
    color: #24234d;
  }
  .nav-link.active,
  .nav-item.show .nav-link {
    color: #d5da43;
    border: none;
  }
  .nav-link:hover,
  .nav-link:focus {
    border: none;
  }
`;
const TopWrapper = styled.div`
  height: 100%;
  min-height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: -200px;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width: 768px) {
    justify-content: space-evenly;
  }
`;
const Card = styled.div`
  padding: 1rem;
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  border: none;
  // color: #24234d;
  // margin: 4px 0px;
  cursor: pointer;
  min-width: 210px;
  transition: all 0.2s ease-out;
  margin: 10px 0px;
  :hover {
    color: #d5da43;
    transform: translateY(-10px);
    box-shadow: 0 16px 20px 0 rgba(0, 0, 0, 0.11);
  }

  // @media (max-width: 992px) {
  //   min-width: 135px;
  // }
  // @media (max-width: 768px) {
  //   ustify-content: space-evenly;
  // }
  // @media (max-width: 576px) {
  //   width: 100%;
  // }
`;

const Title = styled.p`
  font-size: 18px;
  font-family: GilroyBold;
  text-align: center;
`;

const TopStatistics = () => {
  const [activeTab, setActiveTab] = useState('1');
  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <Main>
      <Container>
        <TopWrapper>
          <ScreenTitle
            title="Top Statistics"
            subTitle="Home/Data/TopStatistics"
          />
        </TopWrapper>
        <CardWrapper>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => {
              toggle('1');
            }}>
            <Card>
              <Title>Over View</Title>
            </Card>
          </NavLink>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => {
              toggle('2');
            }}>
            <Card>
              <Title>Accounts</Title>
            </Card>
          </NavLink>
          <NavLink
            className={classnames({ active: activeTab === '3' })}
            onClick={() => {
              toggle('3');
            }}>
            <Card>
              <Title>Tokens</Title>
            </Card>
          </NavLink>
          <NavLink
            className={classnames({ active: activeTab === '4' })}
            onClick={() => {
              toggle('4');
            }}>
            <Card>
              <Title>Contracts</Title>
            </Card>
          </NavLink>
          <NavLink
            className={classnames({ active: activeTab === '5' })}
            onClick={() => {
              toggle('5');
            }}>
            <Card>
              <Title>Resources</Title>
            </Card>
          </NavLink>
        </CardWrapper>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <Overview />
          </TabPane>
          <TabPane tabId="2">
            <Accounts />
          </TabPane>
          <TabPane tabId="3">
            <Tokens />
          </TabPane>
          <TabPane tabId="4">
            <Contracts />
          </TabPane>
          <TabPane tabId="5">
            <TronNetworkParameterTable />
          </TabPane>
        </TabContent>
      </Container>
    </Main>
  );
};

export default TopStatistics;
