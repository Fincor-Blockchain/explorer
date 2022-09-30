import React, { useState } from 'react';
import { TokenTrackerTable } from './components';
import styled from 'styled-components';
import colors from 'src/vars/colors';
import { Container } from 'reactstrap';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';
import { Row, Col } from 'reactstrap';
import { ScreenTitle } from 'src/components';

const Wrapper = styled.div`
  padding: 23px 28px;
  border-radius: 8px;
  box-shadow: ${colors.shaddow};
  ul.nav.nav-tabs {
    justify-content: space-between;
    align-items: center;
    padding-bottom: 15px;
  }
  .nav-tabs .nav-link {
    font-family: 'GilroyBold';
    margin-bottom: 0px;
    color: #24234d;
    font-size: 18px;
    border: none;
  }
  .nav-tabs .nav-link.active,
  .nav-tabs .nav-item.show .nav-link {
    color: #d5da43;
    background-color: #fff;
    border: none;
  }
  ${({ bg }) => `
  background-color:${bg ? bg : colors.white};
  margin: 10px 0px;
  margin-bottom: 70px;
  @media(max-width:768px){
    padding: 12px 14px;
  }
  `}
`;
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

const TabItems = styled.div`
  display: flex;
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
  margin-bottom: 16px;
  @media (max-width: 320px) {
    align-items: center;
  }
`;

const LightText = styled(CardHeading)`
  opacity: 0.4;
  font-size: 11px;
  margin: 6px 0px;
  @media (max-width: 320px) {
    margin: 0px 0px;
  }
`;
const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;

const TokenTracker = () => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  return (
    <>
      <Container>
        <TopWrapper>
          <ScreenTitle
            title="Token Tracker"
            subTitle="Home/Tokens/Token Tracker"
          />
        </TopWrapper>
        <>
          <Row>
            <Col lg="6">
              <Card>
                <Content>
                  <Body1>
                    <CardHead>
                      <CardHeading>40,374</CardHeading>
                      <CardHeading>+939</CardHeading>
                    </CardHead>
                    <TextWrapper>
                      <LightText>Total Tron Tokens</LightText>
                      <LightText className="rightAlign">Last 7 days</LightText>
                    </TextWrapper>
                  </Body1>
                </Content>
              </Card>
            </Col>
            <Col lg="6">
              <Card>
                <Content>
                  <Body1>
                    <CardHead>
                      <CardHeading>22,377</CardHeading>
                      <CardHeading>+574</CardHeading>
                    </CardHead>
                    <TextWrapper>
                      <LightText>Total Tron Scan</LightText>
                      <LightText className="rightAlign">Last 7 days</LightText>
                    </TextWrapper>
                  </Body1>
                </Content>
              </Card>
            </Col>
          </Row>
        </>
        <Wrapper>
          <Nav tabs>
            <TabItems>
              <NavItem>
                <NavLink
                  style={{ paddingLeft: '0px' }}
                  className={classnames({ active: activeTab === '1' })}
                  onClick={() => {
                    toggle('1');
                  }}>
                  All
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === '2' })}
                  onClick={() => {
                    toggle('2');
                  }}>
                  TRC10
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === '3' })}
                  onClick={() => {
                    toggle('3');
                  }}>
                  TRC20
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === '4' })}
                  onClick={() => {
                    toggle('4');
                  }}>
                  TRC721
                </NavLink>
              </NavItem>
            </TabItems>
          </Nav>
          <TabContent activeTab={activeTab}>
            <TabPane tabId="1">
              <TokenTrackerTable />
            </TabPane>
            <TabPane tabId="2">
              <TokenTrackerTable />
            </TabPane>
            <TabPane tabId="3">
              <TokenTrackerTable />
            </TabPane>
            <TabPane tabId="4">
              <TokenTrackerTable />
            </TabPane>
          </TabContent>
        </Wrapper>
      </Container>
    </>
  );
};

export default TokenTracker;
