import React, { useEffect, useState } from 'react';
import { ComingSoon, ScreenTitle } from 'src/components';
import styled from 'styled-components';
import { Container, Row, Col } from 'reactstrap';
import colors from 'src/vars/colors';
import { SCALE } from 'src/vars/scale';
import { SYMBOL_REGEX } from 'src/vars/regex';
import { CopyIcon } from 'src/assets/images';
import { UncontrolledTooltip } from 'reactstrap';
import copy from 'copy-to-clipboard';
const TopWrapper = styled.div`
  height: 100%;
  min-height: 130px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: -200px;
`;

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
  ${({ loading }) =>
    loading &&
    `position:relative;

&:before {
position: absolute;
content: '';
top: 0;
left: 0;
background: rgba(255,255,255,.8);
width: 100%;
height: 100%;
border-radius: .28571429rem;
z-index: 100;
}
&:after {
position: absolute;
content: '';
top: 50%;
left: 50%;
margin: -1.3em 0 0 -1.3em;
width: 2.5em;
height: 2.5em;
-webkit-animation: segment-spin .6s linear;
animation: segment-spin .6s linear;
-webkit-animation-iteration-count: infinite;
animation-iteration-count: infinite;
border-radius: 500rem;
border-color: #37063b rgba(0,0,0,.1) rgba(0,0,0,.1) rgba(0,0,0,.1);
border-style: solid;
border-width: .2em;
-webkit-box-shadow: 0 0 0 1px transparent;
box-shadow: 0 0 0 1px transparent;
visibility: visible;
z-index: 101;
}
`};
  @-webkit-keyframes segment-spin {
    from {
      -webkit-transform: rotate(0);
      transform: rotate(0);
    }
    to {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes segment-spin {
    from {
      -webkit-transform: rotate(0);
      transform: rotate(0);
    }
    to {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;

const MeasuringCardWrapper = styled.div`
  position: relative;
  padding: 23px 0px;
  border-radius: 8px;
  height: 432px;
  box-shadow: ${colors.shaddow};
  ${({ bg }) => `
  background-color:${bg ? bg : colors.white};
  margin: 15px 0px;
  @media(max-width:768px){
    height: 100%
    margin: 6px 0px;
  }
  `}
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
  // :hover {
  //   box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.06), 0px 6px 8px rgba(0, 0, 0, 0.1);
  // }
  .rightAlign {
    text-align: right;
  }
  @media (max-width: 768px) {
    padding: 12px 14px;
  }
`;
const Content = styled.div`
  padding: 16px 0px;
  border-bottom: 1px solid #f3f4f6;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    padding: 12px 0px;
  }
`;

const PowerContent = styled.div`
  padding: 16px 0px;
  border-bottom: 1px solid #f3f4f6;
  @media (max-width: 768px) {
    padding: 12px 0px;
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

const Address = styled.div`
  opacity: 0.8;
  font-family: 'GilroyLight';
  font-size: 18px;
  color: #111827;
  @media (max-width: 320px) {
    font-size: 14px;
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

const SemiBoldText = styled(CardHeading)`
  font-family: 'GilroySemiBold';
  font-size: 14px;
  margin: 4px 0px;
  @media (max-width: 320px) {
    font-size: 12px;
  }
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
const CardTitle = styled.h1`
  font-size: 18px;
  font-family: GilroyBold;

  text-align: left;
`;
const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeadingCard = styled.div`
  padding: 8px 28px;
  @media (max-width: 768px) {
    padding: 0px 12px;
  }
`;

const Power = styled.div`
  font-family: GilroyLight;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 150%;
`;

const UsedBars = styled.div`
  width: 8px;
  height: 24px;

  background: #d5da43;
  border-radius: 7.5px;
  margin-right: 12px;
`;

const UnUsedBars = styled.div`
  opacity: 0.2;
  width: 8px;
  height: 24px;

  background: #d5da43;
  border-radius: 7.5px;
  margin-right: 12px;
`;

const PowerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Inline = styled.div`
  display: flex;
`;

const Text = styled.div`
  font-family: GilroyRegular;
  font-size: 11px;
  font-weight: 600;
  line-height: 13px;
  color: #24234d;
  ${({ uppercase }) => uppercase && `text-transform: uppercase;`};
`;

const IconImage = styled.img`
  height: 16px;
  margin-left: 12px;
  cursor: pointer;
`;

const TooltipExp = styled(UncontrolledTooltip)`
  .tooltip-inner {
    font-size: 12px !important;
    font-family: GilroySemiRegular;
    background-color: #000;
  }
`;

const AccountDetails = (props) => {
  const { address, details, detailsLoading, addressTxs } = props;

  const [show, setShow] = useState(false);

  const transferCount =
    addressTxs &&
    addressTxs?.filter(
      (item) => address === item.tx.value.msg[0].value.from_address
    );

  useEffect(() => {
    show &&
      setTimeout(() => {
        setShow(false);
      }, 1000);
  }, [show]);

  return (
    <Container>
      <TopWrapper>
        <ScreenTitle title="Account" subTitle="Home/Data/Account" />
      </TopWrapper>
      <>
        <Row>
          <Col lg="12">
            <Card>
              <Address>
                {address}
                <IconImage
                  src={CopyIcon}
                  onClick={() => [setShow(true), copy(address)]}
                  id="address-copy"
                  alt="icon"
                />
                <TooltipExp placement="right" target="address-copy">
                  {show ? 'Copied' : 'Copy Address'}
                </TooltipExp>
              </Address>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col lg="6" style={{ height: 'fit-content' }}>
            <Wrapper loading={+detailsLoading}>
              <HeadingCard>
                <CardTitle>Overview</CardTitle>
              </HeadingCard>
              <ContentRow>
                <Content>
                  <LightText>
                    <i className="far fa-question-circle"></i> Account Number:
                  </LightText>
                  <FlexColumn>
                    <Text>
                      {details && details.data?.value.account_number
                        ? details.data.value.account_number
                        : 0}
                    </Text>
                  </FlexColumn>
                </Content>
              </ContentRow>
              <ContentRow>
                <Content>
                  <LightText>Total Balance:</LightText>
                  <FlexColumn>
                    <Text uppercase>
                      {details && details.data?.value.coins?.length > 0
                        ? details.data.value.coins.map(
                            (item) =>
                              `${
                                item.amount / SCALE +
                                ' ' +
                                item.denom.replace(
                                  SYMBOL_REGEX,

                                  ''
                                )
                              } `
                          )
                        : 0}
                    </Text>
                  </FlexColumn>
                </Content>
              </ContentRow>
              <ContentRow>
                <Content>
                  <LightText>Unwithdrawn voting reward:</LightText>
                  <FlexColumn>
                    <Text>0</Text>
                  </FlexColumn>
                </Content>
              </ContentRow>
              <ContentRow>
                <Content>
                  <LightText>Transactions:</LightText>
                  <FlexColumn>
                    <Text>{addressTxs ? addressTxs?.length : 0}</Text>
                  </FlexColumn>
                </Content>
              </ContentRow>
              <ContentRow>
                <Content>
                  <LightText>Transfers:</LightText>
                  <FlexColumn>
                    <Text>{transferCount ? transferCount?.length : 0}</Text>
                  </FlexColumn>
                </Content>
              </ContentRow>
              <ContentRow>
                <Content>
                  <LightText>Created:</LightText>
                  <FlexColumn>
                    <Text>-</Text>
                  </FlexColumn>
                </Content>
              </ContentRow>
            </Wrapper>
          </Col>
          <Col lg="6" style={{ height: 'fit-content' }}>
            <MeasuringCardWrapper>
              <ComingSoon />
              <ContentRow>
                <PowerContent>
                  <PowerWrapper>
                    <Power>Tron Power:</Power>
                    <SemiBoldText>Remaining: 0/0</SemiBoldText>
                  </PowerWrapper>
                  <Inline>
                    <UsedBars />
                    <UsedBars />
                    <UsedBars />
                    <UnUsedBars />
                    <UnUsedBars />
                    <UnUsedBars />
                  </Inline>
                </PowerContent>
              </ContentRow>
              <ContentRow>
                <PowerContent>
                  <PowerWrapper>
                    <Power>Energy:</Power>
                    <SemiBoldText>Remaining: 0/0</SemiBoldText>
                  </PowerWrapper>
                  <Inline>
                    <UsedBars />
                    <UsedBars />
                    <UsedBars />
                    <UnUsedBars />
                    <UnUsedBars />
                    <UnUsedBars />
                  </Inline>
                </PowerContent>
              </ContentRow>
              <ContentRow>
                <PowerContent>
                  <PowerWrapper>
                    <Power>Bandwidth:</Power>
                    <SemiBoldText>Remaining: 2,254/5,000</SemiBoldText>
                  </PowerWrapper>
                  <Inline>
                    <UsedBars />
                    <UsedBars />
                    <UsedBars />
                    <UnUsedBars />
                    <UnUsedBars />
                    <UnUsedBars />
                  </Inline>
                </PowerContent>
              </ContentRow>
            </MeasuringCardWrapper>
          </Col>
        </Row>
      </>
    </Container>
  );
};

export default AccountDetails;
