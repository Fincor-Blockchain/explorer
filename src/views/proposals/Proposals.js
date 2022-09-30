import React, { useState } from 'react';
import { TokenTrackerTable, TronNetworkParameterTable } from './components';
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
  font-size: 14px;
  line-height: 22.4px;
  font-family: 'GilroyMedium';
`;
const Proposals = () => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  return (
    <>
      <Container>
        <TopWrapper>
          <ScreenTitle title="Proposals" subTitle="Home/Committee/Proposals" />
        </TopWrapper>
        <>
          <Row>
            <Col lg="12">
              <Card>
                <LightText>
                  The committee is made up of 27 super representatives who are
                  responsible for modifying dynamic parameters such as block
                  rewards and transaction fees on the TRON network. Each SR,
                  super partner and SR candidate is entitled to initiate and
                  vote for proposals. A proposal is adopted as long as it is
                  voted for by at least 19 SRs. The adopted proposal will apply
                  its changes to network parameters in the next maintenance
                  period.
                </LightText>
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
                  TRON network parameters
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === '2' })}
                  onClick={() => {
                    toggle('2');
                  }}>
                  Committee proposals
                </NavLink>
              </NavItem>
            </TabItems>
          </Nav>
          <TabContent activeTab={activeTab}>
            <TabPane tabId="1">
              <TronNetworkParameterTable />
            </TabPane>
            <TabPane tabId="2">
              <TokenTrackerTable />
            </TabPane>
          </TabContent>
        </Wrapper>
      </Container>
    </>
  );
};

export default Proposals;
