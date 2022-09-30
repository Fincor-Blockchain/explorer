import React from 'react';
import { withRouter } from 'react-router-dom';
import colors from 'src/vars/colors';
import { arrowrightblack } from 'src/assets/fincoreassests';
import styled from 'styled-components';
import { Col, Row } from 'reactstrap';
import DurationWrapper from '../DurationWrapper/durationwrapper';

const Wrapper = styled.div`
  padding: 23px 0px;
  border-radius: 8px;
  box-shadow: ${colors.shaddow};
  ${({ bg }) => `
  background-color:${bg ? bg : colors.white};
  margin: 15px 0px;
  @media(max-width:768px){
    margin: 6px 0px;
  }
  `}
`;

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const LightText = styled.p`
  font-family: GilroyLight;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  line-height: 1.2;
  color: #24234d;
  font-size: 14px;
`;
const ViewTopText = styled(LightText)`
  font-family: GilroyMedium;
  color: #200e32;
  cursor: pointer;
`;
const ExtraLightText = styled(LightText)`
  font-size: 11px;
  text-align: right;
`;

const BoldText = styled.p`
  font-size: 14px;
  // max-width: 100px !important;
  font-family: 'GilroyBold';
  color: #24234d;
  // margin-bottom: 8px;
`;
const SemiBoldText = styled(BoldText)`
  font-size: 11px;
  text-align: right;
`;

const Icon = styled.img`
  margin-left: 4px;
  width: 16px;
  cursor: pointer;
`;

const CardTitle = styled.h1`
  font-size: 18px;
  font-family: GilroyBold;

  text-align: left;
`;

const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const ContentRow = styled.div`
  padding: 0px 28px;
  @media (max-width: 768px) {
    padding: 0px 12px;
  }
  :hover {
    background: #f3f4f6;
  }
`;
const Content = styled.div`
  padding: 20px 0px;
  border-bottom: 1px solid #f3f4f6;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    padding: 12px 0px;
  }
`;
const HeadingCard = styled.div`
  padding: 0px 28px;
  @media (max-width: 768px) {
    padding: 0px 12px;
  }
`;
const OverView = () => {
  return (
    <>
      <DurationWrapper
        hour="1 Hour"
        day="1 Day"
        week="1 Week"
        time="2021-05-27 20:00:00 ~ 2021-05-27 21:00:00 (Local)"
      />
      <Row>
        <Col lg="6" style={{ height: 'fit-content' }}>
          <Row>
            <Col lg="12" style={{ height: 'fit-content' }}>
              <Wrapper>
                <HeadingCard>
                  <FlexWrapper>
                    <CardTitle>Accounts</CardTitle>
                    <FlexWrapper>
                      <ViewTopText>View Top 10</ViewTopText>
                      <Icon src={arrowrightblack} alt="arrow" />
                    </FlexWrapper>
                  </FlexWrapper>
                </HeadingCard>
                <ContentRow>
                  <Content>
                    <LightText>TRX Transfer Amount</LightText>
                    <FlexColumn>
                      <SemiBoldText>38,173,263.410247 TRX</SemiBoldText>
                      <ExtraLightText>≈3,076,077.386 USD</ExtraLightText>
                    </FlexColumn>
                  </Content>
                </ContentRow>
                <ContentRow>
                  <Content>
                    <LightText>TRX Transfer Amount</LightText>
                    <FlexColumn>
                      <SemiBoldText>38,173,263.410247 TRX</SemiBoldText>
                    </FlexColumn>
                  </Content>
                </ContentRow>
                <ContentRow>
                  <Content>
                    <LightText>TRX Transfer Amount</LightText>
                    <FlexColumn>
                      <SemiBoldText>38,173,263.410247 TRX</SemiBoldText>
                    </FlexColumn>
                  </Content>
                </ContentRow>
                <ContentRow>
                  <Content>
                    <LightText>TRX Transfer Amount</LightText>
                    <FlexColumn>
                      <SemiBoldText>38,173,263.410247 TRX</SemiBoldText>
                    </FlexColumn>
                  </Content>
                </ContentRow>
              </Wrapper>
            </Col>
            <Col lg="12" style={{ height: 'fit-content' }}>
              <Wrapper>
                <HeadingCard>
                  <FlexWrapper>
                    <CardTitle>Accounts</CardTitle>
                    <FlexWrapper>
                      <ViewTopText>View Top 10</ViewTopText>
                      <Icon src={arrowrightblack} alt="arrow" />
                    </FlexWrapper>
                  </FlexWrapper>
                </HeadingCard>
                <ContentRow>
                  <Content>
                    <LightText>TRX Transfer Amount</LightText>
                    <FlexColumn>
                      <SemiBoldText>38,173,263.410247 TRX</SemiBoldText>
                      <ExtraLightText>≈3,076,077.386 USD</ExtraLightText>
                    </FlexColumn>
                  </Content>
                </ContentRow>
                <ContentRow>
                  <Content>
                    <LightText>TRX Transfer Amount</LightText>
                    <FlexColumn>
                      <SemiBoldText>38,173,263.410247 TRX</SemiBoldText>
                    </FlexColumn>
                  </Content>
                </ContentRow>
                <ContentRow>
                  <Content>
                    <LightText>TRX Transfer Amount</LightText>
                    <FlexColumn>
                      <SemiBoldText>38,173,263.410247 TRX</SemiBoldText>
                    </FlexColumn>
                  </Content>
                </ContentRow>
                <ContentRow>
                  <Content>
                    <LightText>TRX Transfer Amount</LightText>
                    <FlexColumn>
                      <SemiBoldText>38,173,263.410247 TRX</SemiBoldText>
                    </FlexColumn>
                  </Content>
                </ContentRow>
                <ContentRow>
                  <Content>
                    <LightText>TRX Transfer Amount</LightText>
                    <FlexColumn>
                      <SemiBoldText>38,173,263.410247 TRX</SemiBoldText>
                    </FlexColumn>
                  </Content>
                </ContentRow>
                <ContentRow>
                  <Content>
                    <LightText>TRX Transfer Amount</LightText>
                    <FlexColumn>
                      <SemiBoldText>38,173,263.410247 TRX</SemiBoldText>
                    </FlexColumn>
                  </Content>
                </ContentRow>
              </Wrapper>
            </Col>
          </Row>
        </Col>
        <Col lg="6" style={{ height: 'fit-content' }}>
          <Row>
            <Col lg="12" style={{ height: 'fit-content' }}>
              <Wrapper>
                <HeadingCard>
                  <FlexWrapper>
                    <CardTitle>Accounts</CardTitle>
                    <FlexWrapper>
                      <ViewTopText>View Top 10</ViewTopText>
                      <Icon src={arrowrightblack} alt="arrow" />
                    </FlexWrapper>
                  </FlexWrapper>
                </HeadingCard>
                <ContentRow>
                  <Content>
                    <LightText>TRX Transfer Amount</LightText>
                    <FlexColumn>
                      <SemiBoldText>38,173,263.410247 TRX</SemiBoldText>
                      <ExtraLightText>≈3,076,077.386 USD</ExtraLightText>
                    </FlexColumn>
                  </Content>
                </ContentRow>
                <ContentRow>
                  <Content>
                    <LightText>TRX Transfer Amount</LightText>
                    <FlexColumn>
                      <SemiBoldText>38,173,263.410247 TRX</SemiBoldText>
                    </FlexColumn>
                  </Content>
                </ContentRow>
                <ContentRow>
                  <Content>
                    <LightText>TRX Transfer Amount</LightText>
                    <FlexColumn>
                      <SemiBoldText>38,173,263.410247 TRX</SemiBoldText>
                    </FlexColumn>
                  </Content>
                </ContentRow>
                <ContentRow>
                  <Content>
                    <LightText>TRX Transfer Amount</LightText>
                    <FlexColumn>
                      <SemiBoldText>38,173,263.410247 TRX</SemiBoldText>
                    </FlexColumn>
                  </Content>
                </ContentRow>
                <ContentRow>
                  <Content>
                    <LightText>TRX Transfer Amount</LightText>
                    <FlexColumn>
                      <SemiBoldText>38,173,263.410247 TRX</SemiBoldText>
                    </FlexColumn>
                  </Content>
                </ContentRow>
                <ContentRow>
                  <Content>
                    <LightText>TRX Transfer Amount</LightText>
                    <FlexColumn>
                      <SemiBoldText>38,173,263.410247 TRX</SemiBoldText>
                    </FlexColumn>
                  </Content>
                </ContentRow>
              </Wrapper>
            </Col>
            <Col lg="12" style={{ height: 'fit-content' }}>
              <Wrapper>
                <HeadingCard>
                  <FlexWrapper>
                    <CardTitle>Accounts</CardTitle>
                    <FlexWrapper>
                      <ViewTopText>View Top 10</ViewTopText>
                      <Icon src={arrowrightblack} alt="arrow" />
                    </FlexWrapper>
                  </FlexWrapper>
                </HeadingCard>
                <ContentRow>
                  <Content>
                    <LightText>TRX Transfer Amount</LightText>
                    <FlexColumn>
                      <SemiBoldText>38,173,263.410247 TRX</SemiBoldText>
                      <ExtraLightText>≈3,076,077.386 USD</ExtraLightText>
                    </FlexColumn>
                  </Content>
                </ContentRow>
                <ContentRow>
                  <Content>
                    <LightText>TRX Transfer Amount</LightText>
                    <FlexColumn>
                      <SemiBoldText>38,173,263.410247 TRX</SemiBoldText>
                    </FlexColumn>
                  </Content>
                </ContentRow>
                <ContentRow>
                  <Content>
                    <LightText>TRX Transfer Amount</LightText>
                    <FlexColumn>
                      <SemiBoldText>38,173,263.410247 TRX</SemiBoldText>
                    </FlexColumn>
                  </Content>
                </ContentRow>
                <ContentRow>
                  <Content>
                    <LightText>TRX Transfer Amount</LightText>
                    <FlexColumn>
                      <SemiBoldText>38,173,263.410247 TRX</SemiBoldText>
                    </FlexColumn>
                  </Content>
                </ContentRow>
              </Wrapper>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default withRouter(OverView);
