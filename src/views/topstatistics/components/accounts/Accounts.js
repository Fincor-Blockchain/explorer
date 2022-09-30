import React from 'react';
import styled from 'styled-components';
import { Col, Row } from 'reactstrap';
import colors from 'src/vars/colors';
import DurationWrapper from '../DurationWrapper/durationwrapper';
const Wrapper = styled.div`
  padding: 23px 0px;
  padding-bottom: 0px;
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
  align-items: left;
  width: 20%;
  justify-content: space-between;
  &:nth-child(1) {
    width: auto;
  }
`;
const LightTextWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const BoldText = styled.p`
  font-size: 14px;
  font-family: 'GilroyBold';
  color: #24234d;
`;
const SemiBoldText = styled(BoldText)`
  font-size: 11px;
  max-width: 130px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;
const LightText = styled.p`
  font-family: GilroyMedium;
  font-stretch: normal;
  margin: 0px 0px 6px 0px;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #24234d;
  max-width: 200px;
  text-overflow: ellipsis;
  overflow: hidden;
  opacity: 0.4;
  font-size: 11px;
`;

const FlexColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const BadgeText = styled.p`
  color: #fa5656;
  font-size: 9px;
  background: rgba(218, 67, 67, 0.12);
  padding: 5px 10px;
  margin: 8px 13px;
  border-radius: 15px;
  font-family: 'GilroySemiBold';
`;
const ExtraLightText = styled.p`
  font-family: GilroyLight;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  line-height: 1.2;
  color: #24234d;
  font-size: 11px;
`;
const ContentRow = styled.div`
  padding: 0px 16px;
  @media (max-width: 768px) {
    padding: 0px 12px;
  }
  // :hover {
  //   background: #f3f4f6;
  // }
`;
const TotalRow = styled.div`
  padding: 0px 16px;
  background: #f3f4f6;
  border-radius: 0px 0px 8px 8px;
`;

const Content = styled.div`
  min-height: 81px;
  padding: 19px 0px;
  border-bottom: 1px solid #f3f4f6;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    padding: 12px 0px;
  }
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
const HeadingCard = styled.div`
  padding: 0px 16px;
  @media (max-width: 768px) {
    padding: 0px 12px;
  }
`;

const Accounts = () => {
  return (
    <>
      <DurationWrapper
        hour="1 Hour"
        day="1 Day"
        week="1 Week"
        time="2021-05-27 20:00:00 ~ 2021-05-27 21:00:00 (Local)"
      />
      <Row>
        <Col lg="6">
          <Wrapper>
            <HeadingCard>
              <FlexWrapper>
                <CardTitle>Top Accounts--Total TRX Sent</CardTitle>
              </FlexWrapper>
            </HeadingCard>
            <ContentRow>
              <Content>
                <FlexColumn>
                  <LightTextWrapper>
                    <LightText>Rank</LightText>
                  </LightTextWrapper>
                  <BoldText>1</BoldText>
                </FlexColumn>
                <FlexColumn>
                  <LightText>Accounts</LightText>
                  <SemiBoldText>TNUC9Qb1rRpS5CbWLmN</SemiBoldText>
                </FlexColumn>
                <FlexColumn>
                  <LightText>Amounts</LightText>
                  <FlexColumnWrapper>
                    <SemiBoldText>38,173,263.410247 TRX wrf35fwde</SemiBoldText>
                    <ExtraLightText>≈3,076,077.386 USD</ExtraLightText>
                  </FlexColumnWrapper>
                </FlexColumn>
                <FlexColumn>
                  <LightText>Percentage</LightText>
                  <SemiBoldText>30.9%</SemiBoldText>
                </FlexColumn>
              </Content>
            </ContentRow>
            <ContentRow>
              <Content>
                <FlexColumn>
                  <LightTextWrapper>
                    <LightText>Rank</LightText>
                  </LightTextWrapper>
                  <BoldText>1</BoldText>
                </FlexColumn>
                <FlexColumn>
                  <LightText>Accounts</LightText>
                  <SemiBoldText>TNUC9Qb1rRpS5CbWLmN</SemiBoldText>
                </FlexColumn>
                <FlexColumn>
                  <LightText>Amounts</LightText>
                  <FlexColumnWrapper>
                    <SemiBoldText>38,173,263.410247 TRX wrf35fwde</SemiBoldText>
                    <ExtraLightText>≈3,076,077.386 USD</ExtraLightText>
                  </FlexColumnWrapper>
                </FlexColumn>
                <FlexColumn>
                  <LightText>Percentage</LightText>
                  <SemiBoldText>30.9%</SemiBoldText>
                </FlexColumn>
              </Content>
            </ContentRow>
            <ContentRow>
              <Content>
                <FlexColumn>
                  <LightTextWrapper>
                    <LightText>Rank</LightText>
                  </LightTextWrapper>
                  <BoldText>1</BoldText>
                </FlexColumn>
                <FlexColumn>
                  <LightText>Accounts</LightText>
                  <SemiBoldText>TNUC9Qb1rRpS5CbWLmN</SemiBoldText>
                </FlexColumn>
                <FlexColumn>
                  <LightText>Amounts</LightText>
                  <FlexColumnWrapper>
                    <SemiBoldText>38,173,263.410247 TRX wrf35fwde</SemiBoldText>
                    <ExtraLightText>≈3,076,077.386 USD</ExtraLightText>
                  </FlexColumnWrapper>
                </FlexColumn>
                <FlexColumn>
                  <LightText>Percentage</LightText>
                  <SemiBoldText>30.9%</SemiBoldText>
                </FlexColumn>
              </Content>
            </ContentRow>
            <ContentRow>
              <Content>
                <FlexColumn>
                  <LightTextWrapper>
                    <LightText>Rank</LightText>
                  </LightTextWrapper>
                  <BoldText>1</BoldText>
                </FlexColumn>
                <FlexColumn>
                  <LightText>Accounts</LightText>
                  <SemiBoldText>TNUC9Qb1rRpS5CbWLmN</SemiBoldText>
                </FlexColumn>
                <FlexColumn>
                  <LightText>Amounts</LightText>
                  <FlexColumnWrapper>
                    <SemiBoldText>38,173,263.410247 TRX wrf35fwde</SemiBoldText>
                    <ExtraLightText>≈3,076,077.386 USD</ExtraLightText>
                  </FlexColumnWrapper>
                </FlexColumn>
                <FlexColumn>
                  <LightText>Percentage</LightText>
                  <SemiBoldText>30.9%</SemiBoldText>
                </FlexColumn>
              </Content>
            </ContentRow>
            <ContentRow>
              <Content>
                <FlexColumn>
                  <LightTextWrapper>
                    <LightText>Rank</LightText>
                  </LightTextWrapper>
                  <BoldText>1</BoldText>
                </FlexColumn>
                <FlexColumn>
                  <LightText>Accounts</LightText>
                  <SemiBoldText>TNUC9Qb1rRpS5CbWLmN</SemiBoldText>
                </FlexColumn>
                <FlexColumn>
                  <LightText>Amounts</LightText>
                  <FlexColumnWrapper>
                    <SemiBoldText>38,173,263.410247 TRX wrf35fwde</SemiBoldText>
                    <ExtraLightText>≈3,076,077.386 USD</ExtraLightText>
                  </FlexColumnWrapper>
                </FlexColumn>
                <FlexColumn>
                  <LightText>Percentage</LightText>
                  <SemiBoldText>30.9%</SemiBoldText>
                </FlexColumn>
              </Content>
            </ContentRow>
            <ContentRow>
              <Content>
                <FlexColumn>
                  <LightTextWrapper>
                    <LightText>Rank</LightText>
                  </LightTextWrapper>
                  <BoldText>1</BoldText>
                </FlexColumn>
                <FlexColumn>
                  <LightText>Accounts</LightText>
                  <SemiBoldText>TNUC9Qb1rRpS5CbWLmN</SemiBoldText>
                </FlexColumn>
                <FlexColumn>
                  <LightText>Amounts</LightText>
                  <FlexColumnWrapper>
                    <SemiBoldText>38,173,263.410247 TRX wrf35fwde</SemiBoldText>
                    <ExtraLightText>≈3,076,077.386 USD</ExtraLightText>
                  </FlexColumnWrapper>
                </FlexColumn>
                <FlexColumn>
                  <LightText>Percentage</LightText>
                  <SemiBoldText>30.9%</SemiBoldText>
                </FlexColumn>
              </Content>
            </ContentRow>
            <TotalRow>
              <Content>
                <FlexColumn>
                  <BoldText>Total</BoldText>
                </FlexColumn>
                <FlexColumn>
                  <LightText></LightText>
                  <SemiBoldText></SemiBoldText>
                </FlexColumn>
                <FlexColumn>
                  <FlexColumnWrapper>
                    <SemiBoldText>38,173,263.410247 TRX wrf35fwde</SemiBoldText>
                    <ExtraLightText>≈3,076,077.386 USD</ExtraLightText>
                  </FlexColumnWrapper>
                </FlexColumn>
                <FlexColumn>
                  <SemiBoldText>30.9%</SemiBoldText>
                </FlexColumn>
              </Content>
            </TotalRow>
          </Wrapper>
        </Col>
        <Col lg="6">
          <Wrapper>
            <HeadingCard>
              <FlexWrapper>
                <CardTitle>Top Accounts--Total TRX Sent</CardTitle>
              </FlexWrapper>
            </HeadingCard>
            <ContentRow>
              <Content>
                <FlexColumn>
                  <LightTextWrapper>
                    <LightText>Rank</LightText>
                  </LightTextWrapper>
                  <BoldText>1</BoldText>
                </FlexColumn>
                <FlexColumn>
                  <LightText>Accounts</LightText>
                  <SemiBoldText>TNUC9Qb1rRpS5CbWLmN</SemiBoldText>
                </FlexColumn>
                <FlexColumn>
                  <LightText>Amounts</LightText>
                  <FlexColumnWrapper>
                    <SemiBoldText>38,173,263.410247 TRX wrf35fwde</SemiBoldText>
                    <ExtraLightText>≈3,076,077.386 USD</ExtraLightText>
                  </FlexColumnWrapper>
                </FlexColumn>
                <FlexColumn>
                  <LightText>Percentage</LightText>
                  <SemiBoldText>30.9%</SemiBoldText>
                </FlexColumn>
              </Content>
            </ContentRow>
            <ContentRow>
              <Content>
                <FlexColumn>
                  <LightTextWrapper>
                    <LightText>Rank</LightText>
                  </LightTextWrapper>
                  <BoldText>1</BoldText>
                </FlexColumn>
                <FlexColumn>
                  <LightText>Accounts</LightText>
                  <SemiBoldText>TNUC9Qb1rRpS5CbWLmN</SemiBoldText>
                </FlexColumn>
                <FlexColumn>
                  <LightText>Amounts</LightText>
                  <FlexColumnWrapper>
                    <SemiBoldText>38,173,263.410247 TRX wrf35fwde</SemiBoldText>
                    <ExtraLightText>≈3,076,077.386 USD</ExtraLightText>
                  </FlexColumnWrapper>
                </FlexColumn>
                <FlexColumn>
                  <LightText>Percentage</LightText>
                  <SemiBoldText>30.9%</SemiBoldText>
                </FlexColumn>
              </Content>
            </ContentRow>
            <ContentRow>
              <Content>
                <FlexColumn>
                  <LightTextWrapper>
                    <LightText>Rank</LightText>
                  </LightTextWrapper>
                  <BoldText>1</BoldText>
                </FlexColumn>
                <FlexColumn>
                  <LightText>Accounts</LightText>
                  <SemiBoldText>TNUC9Qb1rRpS5CbWLmN</SemiBoldText>
                </FlexColumn>
                <FlexColumn>
                  <LightText>Amounts</LightText>
                  <FlexColumnWrapper>
                    <SemiBoldText>38,173,263.410247 TRX wrf35fwde</SemiBoldText>
                    <ExtraLightText>≈3,076,077.386 USD</ExtraLightText>
                  </FlexColumnWrapper>
                </FlexColumn>
                <FlexColumn>
                  <LightText>Percentage</LightText>
                  <SemiBoldText>30.9%</SemiBoldText>
                </FlexColumn>
              </Content>
            </ContentRow>
            <ContentRow>
              <Content>
                <FlexColumn>
                  <LightTextWrapper>
                    <LightText>Rank</LightText>
                  </LightTextWrapper>
                  <BoldText>1</BoldText>
                </FlexColumn>
                <FlexColumn>
                  <LightText>Accounts</LightText>
                  <SemiBoldText>TNUC9Qb1rRpS5CbWLmN</SemiBoldText>
                </FlexColumn>
                <FlexColumn>
                  <LightText>Amounts</LightText>
                  <FlexColumnWrapper>
                    <SemiBoldText>38,173,263.410247 TRX wrf35fwde</SemiBoldText>
                    <ExtraLightText>≈3,076,077.386 USD</ExtraLightText>
                  </FlexColumnWrapper>
                </FlexColumn>
                <FlexColumn>
                  <LightText>Percentage</LightText>
                  <SemiBoldText>30.9%</SemiBoldText>
                </FlexColumn>
              </Content>
            </ContentRow>
            <ContentRow>
              <Content>
                <FlexColumn>
                  <LightTextWrapper>
                    <LightText>Rank</LightText>
                  </LightTextWrapper>
                  <BoldText>1</BoldText>
                </FlexColumn>
                <FlexColumn>
                  <LightText>Accounts</LightText>
                  <SemiBoldText>TNUC9Qb1rRpS5CbWLmN</SemiBoldText>
                </FlexColumn>
                <FlexColumn>
                  <LightText>Amounts</LightText>
                  <FlexColumnWrapper>
                    <SemiBoldText>38,173,263.410247 TRX wrf35fwde</SemiBoldText>
                    <ExtraLightText>≈3,076,077.386 USD</ExtraLightText>
                  </FlexColumnWrapper>
                </FlexColumn>
                <FlexColumn>
                  <LightText>Percentage</LightText>
                  <SemiBoldText>30.9%</SemiBoldText>
                </FlexColumn>
              </Content>
            </ContentRow>
            <ContentRow>
              <Content>
                <FlexColumn>
                  <LightTextWrapper>
                    <LightText>Rank</LightText>
                  </LightTextWrapper>
                  <BoldText>1</BoldText>
                </FlexColumn>
                <FlexColumn>
                  <LightText>Accounts</LightText>
                  <SemiBoldText>TNUC9Qb1rRpS5CbWLmN</SemiBoldText>
                </FlexColumn>
                <FlexColumn>
                  <LightText>Amounts</LightText>
                  <FlexColumnWrapper>
                    <SemiBoldText>38,173,263.410247 TRX wrf35fwde</SemiBoldText>
                    <ExtraLightText>≈3,076,077.386 USD</ExtraLightText>
                  </FlexColumnWrapper>
                </FlexColumn>
                <FlexColumn>
                  <LightText>Percentage</LightText>
                  <SemiBoldText>30.9%</SemiBoldText>
                </FlexColumn>
              </Content>
            </ContentRow>
            <TotalRow>
              <Content>
                <FlexColumn>
                  <BoldText>Total</BoldText>
                </FlexColumn>
                <FlexColumn>
                  <LightText></LightText>
                  <SemiBoldText></SemiBoldText>
                </FlexColumn>
                <FlexColumn>
                  <FlexColumnWrapper>
                    <SemiBoldText>38,173,263.410247 TRX wrf35fwde</SemiBoldText>
                    <ExtraLightText>≈3,076,077.386 USD</ExtraLightText>
                  </FlexColumnWrapper>
                </FlexColumn>
                <FlexColumn>
                  <SemiBoldText>30.9%</SemiBoldText>
                </FlexColumn>
              </Content>
            </TotalRow>
          </Wrapper>
        </Col>
        <Col lg="6">
          <Wrapper>
            <HeadingCard>
              <FlexWrapper>
                <CardTitle>Top Accounts--Total TRX Sent</CardTitle>
                <FlexWrapper>
                  <BadgeText>Live</BadgeText>
                </FlexWrapper>
              </FlexWrapper>
            </HeadingCard>
            <ContentRow>
              <Content>
                <FlexColumn>
                  <LightTextWrapper>
                    <LightText>Rank</LightText>
                  </LightTextWrapper>
                  <BoldText>1</BoldText>
                </FlexColumn>
                <FlexColumn>
                  <LightText>Accounts</LightText>
                  <SemiBoldText>TNUC9Qb1rRpS5CbWLmN</SemiBoldText>
                </FlexColumn>
                <FlexColumn>
                  <LightText>Amounts</LightText>
                  <FlexColumnWrapper>
                    <SemiBoldText>38,173,263.410247 TRX wrf35fwde</SemiBoldText>
                    <ExtraLightText>≈3,076,077.386 USD</ExtraLightText>
                  </FlexColumnWrapper>
                </FlexColumn>
                <FlexColumn>
                  <LightText>Percentage</LightText>
                  <SemiBoldText>30.9%</SemiBoldText>
                </FlexColumn>
              </Content>
            </ContentRow>
            <ContentRow>
              <Content>
                <FlexColumn>
                  <LightTextWrapper>
                    <LightText>Rank</LightText>
                  </LightTextWrapper>
                  <BoldText>1</BoldText>
                </FlexColumn>
                <FlexColumn>
                  <LightText>Accounts</LightText>
                  <SemiBoldText>TNUC9Qb1rRpS5CbWLmN</SemiBoldText>
                </FlexColumn>
                <FlexColumn>
                  <LightText>Amounts</LightText>
                  <FlexColumnWrapper>
                    <SemiBoldText>38,173,263.410247 TRX wrf35fwde</SemiBoldText>
                    <ExtraLightText>≈3,076,077.386 USD</ExtraLightText>
                  </FlexColumnWrapper>
                </FlexColumn>
                <FlexColumn>
                  <LightText>Percentage</LightText>
                  <SemiBoldText>30.9%</SemiBoldText>
                </FlexColumn>
              </Content>
            </ContentRow>
            <ContentRow>
              <Content>
                <FlexColumn>
                  <LightTextWrapper>
                    <LightText>Rank</LightText>
                  </LightTextWrapper>
                  <BoldText>1</BoldText>
                </FlexColumn>
                <FlexColumn>
                  <LightText>Accounts</LightText>
                  <SemiBoldText>TNUC9Qb1rRpS5CbWLmN</SemiBoldText>
                </FlexColumn>
                <FlexColumn>
                  <LightText>Amounts</LightText>
                  <FlexColumnWrapper>
                    <SemiBoldText>38,173,263.410247 TRX wrf35fwde</SemiBoldText>
                    <ExtraLightText>≈3,076,077.386 USD</ExtraLightText>
                  </FlexColumnWrapper>
                </FlexColumn>
                <FlexColumn>
                  <LightText>Percentage</LightText>
                  <SemiBoldText>30.9%</SemiBoldText>
                </FlexColumn>
              </Content>
            </ContentRow>
            <ContentRow>
              <Content>
                <FlexColumn>
                  <LightTextWrapper>
                    <LightText>Rank</LightText>
                  </LightTextWrapper>
                  <BoldText>1</BoldText>
                </FlexColumn>
                <FlexColumn>
                  <LightText>Accounts</LightText>
                  <SemiBoldText>TNUC9Qb1rRpS5CbWLmN</SemiBoldText>
                </FlexColumn>
                <FlexColumn>
                  <LightText>Amounts</LightText>
                  <FlexColumnWrapper>
                    <SemiBoldText>38,173,263.410247 TRX wrf35fwde</SemiBoldText>
                    <ExtraLightText>≈3,076,077.386 USD</ExtraLightText>
                  </FlexColumnWrapper>
                </FlexColumn>
                <FlexColumn>
                  <LightText>Percentage</LightText>
                  <SemiBoldText>30.9%</SemiBoldText>
                </FlexColumn>
              </Content>
            </ContentRow>
            <ContentRow>
              <Content>
                <FlexColumn>
                  <LightTextWrapper>
                    <LightText>Rank</LightText>
                  </LightTextWrapper>
                  <BoldText>1</BoldText>
                </FlexColumn>
                <FlexColumn>
                  <LightText>Accounts</LightText>
                  <SemiBoldText>TNUC9Qb1rRpS5CbWLmN</SemiBoldText>
                </FlexColumn>
                <FlexColumn>
                  <LightText>Amounts</LightText>
                  <FlexColumnWrapper>
                    <SemiBoldText>38,173,263.410247 TRX wrf35fwde</SemiBoldText>
                    <ExtraLightText>≈3,076,077.386 USD</ExtraLightText>
                  </FlexColumnWrapper>
                </FlexColumn>
                <FlexColumn>
                  <LightText>Percentage</LightText>
                  <SemiBoldText>30.9%</SemiBoldText>
                </FlexColumn>
              </Content>
            </ContentRow>
            <ContentRow>
              <Content>
                <FlexColumn>
                  <LightTextWrapper>
                    <LightText>Rank</LightText>
                  </LightTextWrapper>
                  <BoldText>1</BoldText>
                </FlexColumn>
                <FlexColumn>
                  <LightText>Accounts</LightText>
                  <SemiBoldText>TNUC9Qb1rRpS5CbWLmN</SemiBoldText>
                </FlexColumn>
                <FlexColumn>
                  <LightText>Amounts</LightText>
                  <FlexColumnWrapper>
                    <SemiBoldText>38,173,263.410247 TRX wrf35fwde</SemiBoldText>
                    <ExtraLightText>≈3,076,077.386 USD</ExtraLightText>
                  </FlexColumnWrapper>
                </FlexColumn>
                <FlexColumn>
                  <LightText>Percentage</LightText>
                  <SemiBoldText>30.9%</SemiBoldText>
                </FlexColumn>
              </Content>
            </ContentRow>
            <TotalRow>
              <Content>
                <FlexColumn>
                  <BoldText>Total</BoldText>
                </FlexColumn>
                <FlexColumn>
                  <LightText></LightText>
                  <SemiBoldText></SemiBoldText>
                </FlexColumn>
                <FlexColumn>
                  <FlexColumnWrapper>
                    <SemiBoldText>38,173,263.410247 TRX wrf35fwde</SemiBoldText>
                    <ExtraLightText>≈3,076,077.386 USD</ExtraLightText>
                  </FlexColumnWrapper>
                </FlexColumn>
                <FlexColumn>
                  <SemiBoldText>30.9%</SemiBoldText>
                </FlexColumn>
              </Content>
            </TotalRow>
          </Wrapper>
        </Col>
        <Col lg="6">
          <Wrapper>
            <HeadingCard>
              <FlexWrapper>
                <CardTitle>Top Accounts--Total TRX Sent</CardTitle>
                <FlexWrapper>
                  <BadgeText>Live</BadgeText>
                </FlexWrapper>
              </FlexWrapper>
            </HeadingCard>
            <ContentRow>
              <Content>
                <FlexColumn>
                  <LightTextWrapper>
                    <LightText>Rank</LightText>
                  </LightTextWrapper>
                  <BoldText>1</BoldText>
                </FlexColumn>
                <FlexColumn>
                  <LightText>Accounts</LightText>
                  <SemiBoldText>TNUC9Qb1rRpS5CbWLmN</SemiBoldText>
                </FlexColumn>
                <FlexColumn>
                  <LightText>Amounts</LightText>
                  <FlexColumnWrapper>
                    <SemiBoldText>38,173,263.410247 TRX wrf35fwde</SemiBoldText>
                    <ExtraLightText>≈3,076,077.386 USD</ExtraLightText>
                  </FlexColumnWrapper>
                </FlexColumn>
                <FlexColumn>
                  <LightText>Percentage</LightText>
                  <SemiBoldText>30.9%</SemiBoldText>
                </FlexColumn>
              </Content>
            </ContentRow>
            <ContentRow>
              <Content>
                <FlexColumn>
                  <LightTextWrapper>
                    <LightText>Rank</LightText>
                  </LightTextWrapper>
                  <BoldText>1</BoldText>
                </FlexColumn>
                <FlexColumn>
                  <LightText>Accounts</LightText>
                  <SemiBoldText>TNUC9Qb1rRpS5CbWLmN</SemiBoldText>
                </FlexColumn>
                <FlexColumn>
                  <LightText>Amounts</LightText>
                  <FlexColumnWrapper>
                    <SemiBoldText>38,173,263.410247 TRX wrf35fwde</SemiBoldText>
                    <ExtraLightText>≈3,076,077.386 USD</ExtraLightText>
                  </FlexColumnWrapper>
                </FlexColumn>
                <FlexColumn>
                  <LightText>Percentage</LightText>
                  <SemiBoldText>30.9%</SemiBoldText>
                </FlexColumn>
              </Content>
            </ContentRow>
            <ContentRow>
              <Content>
                <FlexColumn>
                  <LightTextWrapper>
                    <LightText>Rank</LightText>
                  </LightTextWrapper>
                  <BoldText>1</BoldText>
                </FlexColumn>
                <FlexColumn>
                  <LightText>Accounts</LightText>
                  <SemiBoldText>TNUC9Qb1rRpS5CbWLmN</SemiBoldText>
                </FlexColumn>
                <FlexColumn>
                  <LightText>Amounts</LightText>
                  <FlexColumnWrapper>
                    <SemiBoldText>38,173,263.410247 TRX wrf35fwde</SemiBoldText>
                    <ExtraLightText>≈3,076,077.386 USD</ExtraLightText>
                  </FlexColumnWrapper>
                </FlexColumn>
                <FlexColumn>
                  <LightText>Percentage</LightText>
                  <SemiBoldText>30.9%</SemiBoldText>
                </FlexColumn>
              </Content>
            </ContentRow>
            <ContentRow>
              <Content>
                <FlexColumn>
                  <LightTextWrapper>
                    <LightText>Rank</LightText>
                  </LightTextWrapper>
                  <BoldText>1</BoldText>
                </FlexColumn>
                <FlexColumn>
                  <LightText>Accounts</LightText>
                  <SemiBoldText>TNUC9Qb1rRpS5CbWLmN</SemiBoldText>
                </FlexColumn>
                <FlexColumn>
                  <LightText>Amounts</LightText>
                  <FlexColumnWrapper>
                    <SemiBoldText>38,173,263.410247 TRX wrf35fwde</SemiBoldText>
                    <ExtraLightText>≈3,076,077.386 USD</ExtraLightText>
                  </FlexColumnWrapper>
                </FlexColumn>
                <FlexColumn>
                  <LightText>Percentage</LightText>
                  <SemiBoldText>30.9%</SemiBoldText>
                </FlexColumn>
              </Content>
            </ContentRow>
            <ContentRow>
              <Content>
                <FlexColumn>
                  <LightTextWrapper>
                    <LightText>Rank</LightText>
                  </LightTextWrapper>
                  <BoldText>1</BoldText>
                </FlexColumn>
                <FlexColumn>
                  <LightText>Accounts</LightText>
                  <SemiBoldText>TNUC9Qb1rRpS5CbWLmN</SemiBoldText>
                </FlexColumn>
                <FlexColumn>
                  <LightText>Amounts</LightText>
                  <FlexColumnWrapper>
                    <SemiBoldText>38,173,263.410247 TRX wrf35fwde</SemiBoldText>
                    <ExtraLightText>≈3,076,077.386 USD</ExtraLightText>
                  </FlexColumnWrapper>
                </FlexColumn>
                <FlexColumn>
                  <LightText>Percentage</LightText>
                  <SemiBoldText>30.9%</SemiBoldText>
                </FlexColumn>
              </Content>
            </ContentRow>
            <ContentRow>
              <Content>
                <FlexColumn>
                  <LightTextWrapper>
                    <LightText>Rank</LightText>
                  </LightTextWrapper>
                  <BoldText>1</BoldText>
                </FlexColumn>
                <FlexColumn>
                  <LightText>Accounts</LightText>
                  <SemiBoldText>TNUC9Qb1rRpS5CbWLmN</SemiBoldText>
                </FlexColumn>
                <FlexColumn>
                  <LightText>Amounts</LightText>
                  <FlexColumnWrapper>
                    <SemiBoldText>38,173,263.410247 TRX wrf35fwde</SemiBoldText>
                    <ExtraLightText>≈3,076,077.386 USD</ExtraLightText>
                  </FlexColumnWrapper>
                </FlexColumn>
                <FlexColumn>
                  <LightText>Percentage</LightText>
                  <SemiBoldText>30.9%</SemiBoldText>
                </FlexColumn>
              </Content>
            </ContentRow>
            <TotalRow>
              <Content>
                <FlexColumn>
                  <BoldText>Total</BoldText>
                </FlexColumn>
                <FlexColumn>
                  <LightText></LightText>
                  <SemiBoldText></SemiBoldText>
                </FlexColumn>
                <FlexColumn>
                  <FlexColumnWrapper>
                    <SemiBoldText>38,173,263.410247 TRX wrf35fwde</SemiBoldText>
                    <ExtraLightText>≈3,076,077.386 USD</ExtraLightText>
                  </FlexColumnWrapper>
                </FlexColumn>
                <FlexColumn>
                  <SemiBoldText>30.9%</SemiBoldText>
                </FlexColumn>
              </Content>
            </TotalRow>
          </Wrapper>
        </Col>
        <Col lg="6">
          <Wrapper>
            <HeadingCard>
              <FlexWrapper>
                <CardTitle>Top Accounts--Total TRX Sent</CardTitle>
                <FlexWrapper>
                  <BadgeText>Live</BadgeText>
                </FlexWrapper>
              </FlexWrapper>
            </HeadingCard>
            <ContentRow>
              <Content>
                <FlexColumn>
                  <LightTextWrapper>
                    <LightText>Rank</LightText>
                  </LightTextWrapper>
                  <BoldText>1</BoldText>
                </FlexColumn>
                <FlexColumn>
                  <LightText>Accounts</LightText>
                  <SemiBoldText>TNUC9Qb1rRpS5CbWLmN</SemiBoldText>
                </FlexColumn>
                <FlexColumn>
                  <LightText>Amounts</LightText>
                  <FlexColumnWrapper>
                    <SemiBoldText>38,173,263.410247 TRX wrf35fwde</SemiBoldText>
                    <ExtraLightText>≈3,076,077.386 USD</ExtraLightText>
                  </FlexColumnWrapper>
                </FlexColumn>
                <FlexColumn>
                  <LightText>Percentage</LightText>
                  <SemiBoldText>30.9%</SemiBoldText>
                </FlexColumn>
              </Content>
            </ContentRow>
            <ContentRow>
              <Content>
                <FlexColumn>
                  <LightTextWrapper>
                    <LightText>Rank</LightText>
                  </LightTextWrapper>
                  <BoldText>1</BoldText>
                </FlexColumn>
                <FlexColumn>
                  <LightText>Accounts</LightText>
                  <SemiBoldText>TNUC9Qb1rRpS5CbWLmN</SemiBoldText>
                </FlexColumn>
                <FlexColumn>
                  <LightText>Amounts</LightText>
                  <FlexColumnWrapper>
                    <SemiBoldText>38,173,263.410247 TRX wrf35fwde</SemiBoldText>
                    <ExtraLightText>≈3,076,077.386 USD</ExtraLightText>
                  </FlexColumnWrapper>
                </FlexColumn>
                <FlexColumn>
                  <LightText>Percentage</LightText>
                  <SemiBoldText>30.9%</SemiBoldText>
                </FlexColumn>
              </Content>
            </ContentRow>
            <ContentRow>
              <Content>
                <FlexColumn>
                  <LightTextWrapper>
                    <LightText>Rank</LightText>
                  </LightTextWrapper>
                  <BoldText>1</BoldText>
                </FlexColumn>
                <FlexColumn>
                  <LightText>Accounts</LightText>
                  <SemiBoldText>TNUC9Qb1rRpS5CbWLmN</SemiBoldText>
                </FlexColumn>
                <FlexColumn>
                  <LightText>Amounts</LightText>
                  <FlexColumnWrapper>
                    <SemiBoldText>38,173,263.410247 TRX wrf35fwde</SemiBoldText>
                    <ExtraLightText>≈3,076,077.386 USD</ExtraLightText>
                  </FlexColumnWrapper>
                </FlexColumn>
                <FlexColumn>
                  <LightText>Percentage</LightText>
                  <SemiBoldText>30.9%</SemiBoldText>
                </FlexColumn>
              </Content>
            </ContentRow>
            <ContentRow>
              <Content>
                <FlexColumn>
                  <LightTextWrapper>
                    <LightText>Rank</LightText>
                  </LightTextWrapper>
                  <BoldText>1</BoldText>
                </FlexColumn>
                <FlexColumn>
                  <LightText>Accounts</LightText>
                  <SemiBoldText>TNUC9Qb1rRpS5CbWLmN</SemiBoldText>
                </FlexColumn>
                <FlexColumn>
                  <LightText>Amounts</LightText>
                  <FlexColumnWrapper>
                    <SemiBoldText>38,173,263.410247 TRX wrf35fwde</SemiBoldText>
                    <ExtraLightText>≈3,076,077.386 USD</ExtraLightText>
                  </FlexColumnWrapper>
                </FlexColumn>
                <FlexColumn>
                  <LightText>Percentage</LightText>
                  <SemiBoldText>30.9%</SemiBoldText>
                </FlexColumn>
              </Content>
            </ContentRow>
            <ContentRow>
              <Content>
                <FlexColumn>
                  <LightTextWrapper>
                    <LightText>Rank</LightText>
                  </LightTextWrapper>
                  <BoldText>1</BoldText>
                </FlexColumn>
                <FlexColumn>
                  <LightText>Accounts</LightText>
                  <SemiBoldText>TNUC9Qb1rRpS5CbWLmN</SemiBoldText>
                </FlexColumn>
                <FlexColumn>
                  <LightText>Amounts</LightText>
                  <FlexColumnWrapper>
                    <SemiBoldText>38,173,263.410247 TRX wrf35fwde</SemiBoldText>
                    <ExtraLightText>≈3,076,077.386 USD</ExtraLightText>
                  </FlexColumnWrapper>
                </FlexColumn>
                <FlexColumn>
                  <LightText>Percentage</LightText>
                  <SemiBoldText>30.9%</SemiBoldText>
                </FlexColumn>
              </Content>
            </ContentRow>
            <ContentRow>
              <Content>
                <FlexColumn>
                  <LightTextWrapper>
                    <LightText>Rank</LightText>
                  </LightTextWrapper>
                  <BoldText>1</BoldText>
                </FlexColumn>
                <FlexColumn>
                  <LightText>Accounts</LightText>
                  <SemiBoldText>TNUC9Qb1rRpS5CbWLmN</SemiBoldText>
                </FlexColumn>
                <FlexColumn>
                  <LightText>Amounts</LightText>
                  <FlexColumnWrapper>
                    <SemiBoldText>38,173,263.410247 TRX wrf35fwde</SemiBoldText>
                    <ExtraLightText>≈3,076,077.386 USD</ExtraLightText>
                  </FlexColumnWrapper>
                </FlexColumn>
                <FlexColumn>
                  <LightText>Percentage</LightText>
                  <SemiBoldText>30.9%</SemiBoldText>
                </FlexColumn>
              </Content>
            </ContentRow>
            <TotalRow>
              <Content>
                <FlexColumn>
                  <BoldText>Total</BoldText>
                </FlexColumn>
                <FlexColumn>
                  <LightText></LightText>
                  <SemiBoldText></SemiBoldText>
                </FlexColumn>
                <FlexColumn>
                  <FlexColumnWrapper>
                    <SemiBoldText>38,173,263.410247 TRX wrf35fwde</SemiBoldText>
                    <ExtraLightText>≈3,076,077.386 USD</ExtraLightText>
                  </FlexColumnWrapper>
                </FlexColumn>
                <FlexColumn>
                  <SemiBoldText>30.9%</SemiBoldText>
                </FlexColumn>
              </Content>
            </TotalRow>
          </Wrapper>
        </Col>
        <Col lg="6">
          <Wrapper>
            <HeadingCard>
              <FlexWrapper>
                <CardTitle>Top Accounts--Total TRX Sent</CardTitle>
                <FlexWrapper>
                  <BadgeText>Live</BadgeText>
                </FlexWrapper>
              </FlexWrapper>
            </HeadingCard>
            <ContentRow>
              <Content>
                <FlexColumn>
                  <LightTextWrapper>
                    <LightText>Rank</LightText>
                  </LightTextWrapper>
                  <BoldText>1</BoldText>
                </FlexColumn>
                <FlexColumn>
                  <LightText>Accounts</LightText>
                  <SemiBoldText>TNUC9Qb1rRpS5CbWLmN</SemiBoldText>
                </FlexColumn>
                <FlexColumn>
                  <LightText>Amounts</LightText>
                  <FlexColumnWrapper>
                    <SemiBoldText>38,173,263.410247 TRX wrf35fwde</SemiBoldText>
                    <ExtraLightText>≈3,076,077.386 USD</ExtraLightText>
                  </FlexColumnWrapper>
                </FlexColumn>
                <FlexColumn>
                  <LightText>Percentage</LightText>
                  <SemiBoldText>30.9%</SemiBoldText>
                </FlexColumn>
              </Content>
            </ContentRow>
            <ContentRow>
              <Content>
                <FlexColumn>
                  <LightTextWrapper>
                    <LightText>Rank</LightText>
                  </LightTextWrapper>
                  <BoldText>1</BoldText>
                </FlexColumn>
                <FlexColumn>
                  <LightText>Accounts</LightText>
                  <SemiBoldText>TNUC9Qb1rRpS5CbWLmN</SemiBoldText>
                </FlexColumn>
                <FlexColumn>
                  <LightText>Amounts</LightText>
                  <FlexColumnWrapper>
                    <SemiBoldText>38,173,263.410247 TRX wrf35fwde</SemiBoldText>
                    <ExtraLightText>≈3,076,077.386 USD</ExtraLightText>
                  </FlexColumnWrapper>
                </FlexColumn>
                <FlexColumn>
                  <LightText>Percentage</LightText>
                  <SemiBoldText>30.9%</SemiBoldText>
                </FlexColumn>
              </Content>
            </ContentRow>
            <ContentRow>
              <Content>
                <FlexColumn>
                  <LightTextWrapper>
                    <LightText>Rank</LightText>
                  </LightTextWrapper>
                  <BoldText>1</BoldText>
                </FlexColumn>
                <FlexColumn>
                  <LightText>Accounts</LightText>
                  <SemiBoldText>TNUC9Qb1rRpS5CbWLmN</SemiBoldText>
                </FlexColumn>
                <FlexColumn>
                  <LightText>Amounts</LightText>
                  <FlexColumnWrapper>
                    <SemiBoldText>38,173,263.410247 TRX wrf35fwde</SemiBoldText>
                    <ExtraLightText>≈3,076,077.386 USD</ExtraLightText>
                  </FlexColumnWrapper>
                </FlexColumn>
                <FlexColumn>
                  <LightText>Percentage</LightText>
                  <SemiBoldText>30.9%</SemiBoldText>
                </FlexColumn>
              </Content>
            </ContentRow>
            <ContentRow>
              <Content>
                <FlexColumn>
                  <LightTextWrapper>
                    <LightText>Rank</LightText>
                  </LightTextWrapper>
                  <BoldText>1</BoldText>
                </FlexColumn>
                <FlexColumn>
                  <LightText>Accounts</LightText>
                  <SemiBoldText>TNUC9Qb1rRpS5CbWLmN</SemiBoldText>
                </FlexColumn>
                <FlexColumn>
                  <LightText>Amounts</LightText>
                  <FlexColumnWrapper>
                    <SemiBoldText>38,173,263.410247 TRX wrf35fwde</SemiBoldText>
                    <ExtraLightText>≈3,076,077.386 USD</ExtraLightText>
                  </FlexColumnWrapper>
                </FlexColumn>
                <FlexColumn>
                  <LightText>Percentage</LightText>
                  <SemiBoldText>30.9%</SemiBoldText>
                </FlexColumn>
              </Content>
            </ContentRow>
            <ContentRow>
              <Content>
                <FlexColumn>
                  <LightTextWrapper>
                    <LightText>Rank</LightText>
                  </LightTextWrapper>
                  <BoldText>1</BoldText>
                </FlexColumn>
                <FlexColumn>
                  <LightText>Accounts</LightText>
                  <SemiBoldText>TNUC9Qb1rRpS5CbWLmN</SemiBoldText>
                </FlexColumn>
                <FlexColumn>
                  <LightText>Amounts</LightText>
                  <FlexColumnWrapper>
                    <SemiBoldText>38,173,263.410247 TRX wrf35fwde</SemiBoldText>
                    <ExtraLightText>≈3,076,077.386 USD</ExtraLightText>
                  </FlexColumnWrapper>
                </FlexColumn>
                <FlexColumn>
                  <LightText>Percentage</LightText>
                  <SemiBoldText>30.9%</SemiBoldText>
                </FlexColumn>
              </Content>
            </ContentRow>
            <ContentRow>
              <Content>
                <FlexColumn>
                  <LightTextWrapper>
                    <LightText>Rank</LightText>
                  </LightTextWrapper>
                  <BoldText>1</BoldText>
                </FlexColumn>
                <FlexColumn>
                  <LightText>Accounts</LightText>
                  <SemiBoldText>TNUC9Qb1rRpS5CbWLmN</SemiBoldText>
                </FlexColumn>
                <FlexColumn>
                  <LightText>Amounts</LightText>
                  <FlexColumnWrapper>
                    <SemiBoldText>38,173,263.410247 TRX wrf35fwde</SemiBoldText>
                    <ExtraLightText>≈3,076,077.386 USD</ExtraLightText>
                  </FlexColumnWrapper>
                </FlexColumn>
                <FlexColumn>
                  <LightText>Percentage</LightText>
                  <SemiBoldText>30.9%</SemiBoldText>
                </FlexColumn>
              </Content>
            </ContentRow>
            <TotalRow>
              <Content>
                <FlexColumn>
                  <BoldText>Total</BoldText>
                </FlexColumn>
                <FlexColumn>
                  <LightText></LightText>
                  <SemiBoldText></SemiBoldText>
                </FlexColumn>
                <FlexColumn>
                  <FlexColumnWrapper>
                    <SemiBoldText>38,173,263.410247 TRX wrf35fwde</SemiBoldText>
                  </FlexColumnWrapper>
                </FlexColumn>
                <FlexColumn>
                  <SemiBoldText>30.9%</SemiBoldText>
                </FlexColumn>
              </Content>
            </TotalRow>
          </Wrapper>
        </Col>
      </Row>
    </>
  );
};

export default Accounts;
