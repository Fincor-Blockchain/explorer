import React, { useState } from 'react';
import { ScreenTitle } from 'src/components';
import { RepresentativesTable } from './components';
import styled from 'styled-components';
import { Container, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import colors from 'src/vars/colors';
import { Link } from 'react-router-dom';
import { arrowrightblack } from 'src/assets/fincoreassests';
import RepresentativesPieChart from './components/RepresentativesPieChart';
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
const PieChartCard = styled(Card)`
  display: flex;
  // width: 100%;
  min-height: 400px;
  flex-direction: column;
  align-items: center;
  // justify-content: flex-start;
  height: calc(100% - 20px);
`;
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
  // margin: 6px 0px;
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
const ColoredText = styled.span`
  color: #bec323;
  font-family: 'GilroyMedium';
`;
const SemiBoldText = styled(CardHeading)`
  font-family: 'GilroySemiBold';
  font-size: 14px;
  margin: 4px 0px;
  @media (max-width: 320px) {
    font-size: 10px;
  }
`;

const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const LinkTo = styled(Link)`
  text-decoration: none;
  font-size: 14px;
  font-family: 'GilroySemiBold';
  color: #24234d;
  :hover {
    color: #d5da43;
  }
`;
const Arrow = styled.img`
  margin-left: 7px;
`;
const TabItems = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const BadgeText = styled.p`
  color: #6ac367;
  font-size: 9px;
  background: rgba(67, 218, 73, 0.12);
  padding: 5px 10px;
  margin: 8px 13px;
  border-radius: 15px;
  font-family: 'GilroySemiBold';
`;

// card

const Representatives = () => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  return (
    <>
      <Container>
        <TopWrapper>
          <ScreenTitle
            title="Representatives"
            subTitle="Home/Committee/Representatives"
          />
        </TopWrapper>
        <>
          <Row>
            <Col lg="6">
              <Row>
                <Col lg="12">
                  <Card>
                    <Content>
                      <Body1>
                        <CardHead>
                          <HeadContent>
                            <CardHeading>Votes</CardHeading>
                          </HeadContent>
                        </CardHead>
                        <TextWrapper>
                          <LightText>Real-time total votes</LightText>
                          <LightText className="rightAlign">
                            Next round
                          </LightText>
                        </TextWrapper>
                        <TextWrapper>
                          <SemiBoldText>28,948,430,979</SemiBoldText>
                          <SemiBoldText className="rightAlign">
                            03:25:53
                          </SemiBoldText>
                        </TextWrapper>
                      </Body1>
                    </Content>
                  </Card>
                </Col>
                <Col lg="12">
                  <Card>
                    <Content>
                      <Body1>
                        <CardHead>
                          <HeadContent>
                            <CardHeading>Super representatives</CardHeading>
                          </HeadContent>
                        </CardHead>
                        <TextWrapper>
                          <LightText>Total</LightText>
                          <LightText className="rightAlign">
                            Last 30 days
                          </LightText>
                        </TextWrapper>
                        <TextWrapper>
                          <SemiBoldText>324</SemiBoldText>
                          <SemiBoldText className="rightAlign">+5</SemiBoldText>
                        </TextWrapper>
                      </Body1>
                    </Content>
                  </Card>
                </Col>
                <Col lg="12">
                  <Card>
                    <Content>
                      <Body1>
                        <CardHead>
                          <HeadContent>
                            <CardHeading>Blocks produced</CardHeading>
                          </HeadContent>
                        </CardHead>
                        <TextWrapper>
                          <LightText>
                            Max. <ColoredText>CryptoGuyInZA</ColoredText>
                          </LightText>
                          <LightText className="rightAlign">
                            Min. <ColoredText>KuailianPayments</ColoredText>
                          </LightText>
                        </TextWrapper>
                        <TextWrapper>
                          <SemiBoldText>1,108,299</SemiBoldText>
                          <SemiBoldText className="rightAlign">
                            42,741
                          </SemiBoldText>
                        </TextWrapper>
                      </Body1>
                    </Content>
                  </Card>
                </Col>
                <Col lg="12">
                  <Card>
                    <Content>
                      <Body1>
                        <CardHead>
                          <HeadContent>
                            <CardHeading>Productivity</CardHeading>
                          </HeadContent>
                        </CardHead>
                        <TextWrapper>
                          <LightText>
                            Highest <ColoredText>TRONGrid</ColoredText>
                          </LightText>
                          <LightText className="rightAlign">
                            Lowest <ColoredText>TRXUltra</ColoredText>
                          </LightText>
                        </TextWrapper>
                        <TextWrapper>
                          <SemiBoldText>99.96%</SemiBoldText>
                          <SemiBoldText className="rightAlign">
                            98.05%
                          </SemiBoldText>
                        </TextWrapper>
                      </Body1>
                    </Content>
                  </Card>
                </Col>
              </Row>
            </Col>
            <Col lg="6">
              <PieChartCard>
                <CardHeading>Real-time block distribution</CardHeading>
                <RepresentativesPieChart />
                <LinkWrapper>
                  <LinkTo to="#">View Details</LinkTo>
                  <Arrow src={arrowrightblack} />
                </LinkWrapper>
              </PieChartCard>
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
                  Super representatives
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === '2' })}
                  onClick={() => {
                    toggle('2');
                  }}>
                  SR partners
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === '3' })}
                  onClick={() => {
                    toggle('3');
                  }}>
                  SR candidates
                </NavLink>
              </NavItem>
            </TabItems>
            <BadgeText>Votes</BadgeText>
          </Nav>
          <TabContent activeTab={activeTab}>
            <TabPane tabId="1">
              <RepresentativesTable />
            </TabPane>
            <TabPane tabId="2">
              <RepresentativesTable />
            </TabPane>
            <TabPane tabId="3">
              <RepresentativesTable />
            </TabPane>
            <TabPane tabId="4">
              <RepresentativesTable />
            </TabPane>
          </TabContent>
        </Wrapper>
      </Container>
    </>
  );
};

export default Representatives;
