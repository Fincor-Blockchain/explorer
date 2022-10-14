import React, { useEffect } from 'react';
import { Card, CardBody, CardTitle } from 'reactstrap';
import {
  transactionImage
  // activity, time
} from 'src/assets/fincoreassests';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import colors from 'src/vars/colors';
import { getLandingPageData } from 'src/redux/socket/actions';
const Wrapper = styled.div`
  height: 100%;
`;

const CardMain = styled(Card)`
  padding: 23px 28px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 8px;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 10%), 0 1px 2px 0 rgb(0 0 0 / 6%);
  background-color: ${colors.white};
  box-shadow: ${colors.shaddow};
  border: none;
  height: 100%;
  // min-height: 200px;
  @media (max-width: 576px) {
    height: calc(100% - 16px);
  }

  ${({ loading }) =>
    loading &&
    `
  position:relative;
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
    border-color: #d5da43 rgba(0,0,0,.1) rgba(0,0,0,.1) rgba(0,0,0,.1);
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
const CardContent = styled(CardBody)`
  display: flex;
  align-items: center;
  padding: 0px;
`;
// Will be used later👇
// const InnerBody = styled.div`
//   display: flex;
//   flex-direction: Column;
//   align-items: flex-start;
// `;

const CoinAndPrice = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Icon = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 8px;
`;
// Will be used later👇
// const LowerIcon = styled(Icon)`
//   width: 20px;
//   height: 20px;
//   margin: 0;
// `;
const Title = styled(CardTitle)`
  font-family: 'GilroySemiBold';
  font-size: 14px;
  text-align: left;
  color: #24234d;
  margin-bottom: 3px;
`;
// Will be used later👇
// const Amount = styled(Title)`
//   margin-top: 8px;
//   margin-bottom: 0px;
// `;
const Text = styled(Title)`
  opacity: 0.4;
  font-size: 12px;
  margin-bottom: 0px;
`;
const ChangeText = styled(Title)`
  color: #6ac367;
  font-size: 12px;
  margin: 0;
  padding: 6px 12px;
`;
const PercentageWrapper = styled.div`
  background-color: aliceblue;
  border-radius: 7px;
`;

const Body = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  border-bottom: 1px solid #f3f4f6;
  padding-bottom: 40px;
`;
// Will be used later👇
// const LowerBody = styled(Body)`
//   width: 100%;
//   display: flex;
//   flex-wrap: wrap;Will be used later👇
//   margin: 16px 0px;
//   align-items: center;
//   border-bottom: none;
//   padding-bottom: 0px;
// `;
// Will be used later👇
// const IconWrapper = styled.div`
//   background-color: #f7f8d9;
//   padding: 10px;
//   margin-right: 8px;
//   border-radius: 50%;
// `;
const MainBody = styled.div``;
const LowerContent = styled.div`
  min-height: 190px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

const Statistics = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLandingPageData());
  }, [dispatch]);

  return (
    <Wrapper>
      <CardMain
      // loading={+nodeInfoLoading}
      >
        <MainBody>
          <Body>
            <CardContent>
              <Icon src={transactionImage} alt="transactionImage" />
              <CoinAndPrice>
                <Title>FNR</Title>
                <Text>0 USD</Text>
              </CoinAndPrice>
            </CardContent>

            <PercentageWrapper>
              <ChangeText>0.000% ↑</ChangeText>
            </PercentageWrapper>
          </Body>
          <LowerContent>
            {/* Will be used later👇 */}
            {/* <LowerBody>
              <IconWrapper>
                <LowerIcon src={activity} alt="trx" />
              </IconWrapper>
              <InnerBody>
                <Text>Markete cap</Text>
                <Amount>0 USD</Amount>
              </InnerBody>
            </LowerBody>
            <LowerBody>
              <IconWrapper>
                <LowerIcon src={time} alt="trx" />
              </IconWrapper>
              <InnerBody>
                <Text>Markete cap</Text>
                <Amount>0 USD</Amount>
              </InnerBody>
            </LowerBody> */}
          </LowerContent>
        </MainBody>
      </CardMain>
    </Wrapper>
  );
};

export default Statistics;
