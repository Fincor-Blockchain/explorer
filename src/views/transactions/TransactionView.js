import React, { useEffect, useState } from 'react';
import { ScreenTitle, Loader } from 'src/components';
import styled from 'styled-components';
import { Container, Row, Col } from 'reactstrap';
import colors from 'src/vars/colors';
import { getTransectionByHash } from 'src/redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { Confirmed, Unconfirmed } from 'src/assets/fincoreassests';
import { format } from 'timeago.js';
import { SYMBOL_REGEX } from 'src/vars/regex';
import copy from 'copy-to-clipboard';
import { UncontrolledTooltip } from 'reactstrap';
import { CopyIcon } from 'src/assets/images';
import { NoDataCard } from 'src/components/NoData';
import { SCALE } from 'src/vars/scale';
import { Link } from 'react-router-dom';

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
  font-size: 11px;
  margin: 6px 0px;
  @media (max-width: 320px) {
    margin: 0px 0px;
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

const HeadingCard = styled.div`
  padding: 8px 28px;
  @media (max-width: 768px) {
    padding: 0px 12px;
  }
`;
const Text = styled.div`
  font-family: GilroyRegular;
  font-size: 11px;
  font-weight: 600;
  line-height: 13px;
  color: #24234d;
  ${({ uppercase }) => uppercase && `text-transform: uppercase;`};
`;

const Hash = styled(Text)`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  @media (max-width: 768px) {
    max-width: 150px;
  }
`;

const SuccessText = styled.div`
  font-family: GilroySemiBold;
  font-size: 11px;
  font-weight: 600;
  line-height: 13px;
  color: #6ac367;
`;

const BoldText = styled.p`
  font-weight: 600;
  font-size: 11px;
  line-height: 13px;
  font-family: GilroyRegular;
  color: #24234d;
`;

const StatusWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StatusIcon = styled.img`
  margin: 4px;
`;

const StatusText = styled.span`
  font-family: GilroyRegular;
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 11px;
  color: #a7a7b8;
`;

const HashWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const IconImage = styled.img`
  height: 10px;
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

const TextLink = styled(Link)`
  color: #24234d;
  font-size: 11px;
  font-family: 'GilroyBold';
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-decoration: none !important;
  :hover {
    color: #d5da43;
  }
  @media (max-width: 768px) {
    max-width: 150px;
  }
`;

const TransactionView = (props) => {
  const { hash } = props.match.params;
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);

  const { tx, txLoading } = useSelector((state) => state.txs);

  useEffect(() => {
    dispatch(getTransectionByHash(hash));
  }, [hash, dispatch]);

  useEffect(() => {
    show &&
      setTimeout(() => {
        setShow(false);
      }, 1000);
  }, [show]);

  return (
    <Container>
      <TopWrapper>
        <ScreenTitle
          title="Transaction Details"
          subTitle="Home/Transaction/Details"
        />
      </TopWrapper>
      <Row>
        <Col lg="12" style={{ height: 'fit-content' }}>
          <Wrapper>
            <HeadingCard>
              <CardTitle>Overview</CardTitle>
            </HeadingCard>
            {txLoading ? (
              <Loader height={320} />
            ) : tx && tx.data == null ? (
              <NoDataCard height={320} imgHeight={55} />
            ) : (
              tx &&
              !txLoading && (
                <>
                  <ContentRow>
                    <Content>
                      <LightText>
                        <i className="far fa-question-circle"></i> Hash:
                      </LightText>
                      <HashWrapper>
                        <Hash>{tx.data.txhash}</Hash>
                        <IconImage
                          src={CopyIcon}
                          onClick={() => [setShow(true), copy(tx.data.txhash)]}
                          id="hash-copy"
                          alt="icon"
                        />
                        <TooltipExp placement="right" target="hash-copy">
                          {show ? 'Copied' : 'Copy Address'}
                        </TooltipExp>
                      </HashWrapper>
                    </Content>
                  </ContentRow>
                  <ContentRow>
                    <Content>
                      <LightText>Result:</LightText>
                      <SuccessText>Success</SuccessText>
                    </Content>
                  </ContentRow>
                  <ContentRow>
                    <Content>
                      <LightText>Status:</LightText>
                      <StatusWrapper>
                        {tx.data.logs && tx.data.logs ? (
                          <>
                            <BoldText>Confirmed</BoldText>
                            <StatusIcon src={Confirmed} />
                            <StatusText>
                              Confirmed by over 200 blocks
                            </StatusText>
                          </>
                        ) : (
                          <>
                            <BoldText>Unconfirmed</BoldText>
                            <StatusIcon src={Unconfirmed} />
                          </>
                        )}
                      </StatusWrapper>
                    </Content>
                  </ContentRow>

                  <ContentRow>
                    <Content>
                      <LightText>Time:</LightText>
                      <Text>
                        {format(tx.data.timestamp)} (
                        {new Date(tx.data.timestamp).toUTCString()})
                      </Text>
                    </Content>
                  </ContentRow>
                  <ContentRow>
                    <Content>
                      <LightText>Block:</LightText>
                      <Text>{tx.data.height}</Text>
                    </Content>
                  </ContentRow>
                </>
              )
            )}
          </Wrapper>
        </Col>
        <Col lg="12" style={{ height: 'fit-content' }}>
          <Wrapper>
            <HeadingCard>
              <CardTitle>Transfer</CardTitle>
            </HeadingCard>
            {txLoading ? (
              <Loader height={320} />
            ) : tx && tx.data == null ? (
              <NoDataCard height={320} imgHeight={55} />
            ) : (
              tx &&
              !txLoading && (
                <>
                  <ContentRow>
                    <Content>
                      <LightText>From:</LightText>
                      <HashWrapper>
                        <TextLink
                          to={`/account-details/${tx.data.tx.value.msg[0].value.from_address}`}>
                          {tx.data.tx.value.msg[0].value.from_address}
                        </TextLink>
                        <IconImage
                          src={CopyIcon}
                          onClick={() => [
                            setShow(true),
                            copy(tx.data.tx.value.msg[0].value.from_address)
                          ]}
                          id="from-address-copy"
                          alt="icon"
                        />
                        <TooltipExp
                          placement="right"
                          target="from-address-copy">
                          {show ? 'Copied' : 'Copy Address'}
                        </TooltipExp>
                      </HashWrapper>
                    </Content>
                  </ContentRow>
                  <ContentRow>
                    <Content>
                      <LightText>To:</LightText>
                      <HashWrapper>
                        <TextLink
                          to={`/account-details/${tx.data.tx.value.msg[0].value.to_address}`}>
                          {tx.data.tx.value.msg[0].value.to_address}
                        </TextLink>
                        <IconImage
                          src={CopyIcon}
                          onClick={() => [
                            setShow(true),
                            copy(tx.data.tx.value.msg[0].value.to_address)
                          ]}
                          id="to-address-copy"
                          alt="icon"
                        />
                        <TooltipExp placement="right" target="to-address-copy">
                          {show ? 'Copied' : 'Copy Address'}
                        </TooltipExp>
                      </HashWrapper>
                    </Content>
                  </ContentRow>
                  <ContentRow>
                    <Content>
                      <LightText>Amount:</LightText>
                      <Text>
                        {tx.data.tx.value.msg[0].value.amount[0].amount / SCALE}
                      </Text>
                    </Content>
                  </ContentRow>

                  <ContentRow>
                    <Content>
                      <LightText>Token:</LightText>
                      <Text uppercase>
                        {tx.data.tx.value.msg[0].value.amount[0].denom.replace(
                          SYMBOL_REGEX,

                          ''
                        )}
                      </Text>
                    </Content>
                  </ContentRow>
                </>
              )
            )}
          </Wrapper>
        </Col>
      </Row>
    </Container>
  );
};

export default TransactionView;
