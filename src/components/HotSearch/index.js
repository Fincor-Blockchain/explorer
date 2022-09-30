import React from 'react';
import styled from 'styled-components';
import { trx1, arrowright } from 'src/assets/fincoreassests';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 16px 0px;
`;
const Text = styled.p`
  font-family: GilroyBlack;
  font-size: 14px;
  margin: 4px;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
`;
const CurrencyWrapper = styled.div`
  // margin: 0px 18px;
  width: 80px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  @media (max-width: 576px) {
    justify-content: flex-start;
  }
`;
const MoreWrapper = styled(CurrencyWrapper)`
  flex-wrap: wrap-reverse;
`;
const Icon = styled.img`
  margin: 4px;
  width: 20px;
  height: 20px;
`;
const CurrencyName = styled(Text)`
  font-family: GilroyMedium;
`;
function HotSearch() {
  return (
    <Wrapper>
      <Text>Hot Search:</Text>
      <CurrencyWrapper>
        <Icon src={trx1} alt="usdt" />
        <CurrencyName>FNR</CurrencyName>
      </CurrencyWrapper>
      {/* <CurrencyWrapper>
        <Icon src={btc} alt="btc" />
        <CurrencyName>BTC</CurrencyName>
      </CurrencyWrapper>
      <CurrencyWrapper>
        <Icon src={eth} alt="eth" />
        <CurrencyName>ETH</CurrencyName>
      </CurrencyWrapper>
      <CurrencyWrapper>
        <Icon src={btt} alt="btt" />
        <CurrencyName>BTT</CurrencyName>
      </CurrencyWrapper>
      <CurrencyWrapper>
        <Icon src={jst} alt="jst" />
        <CurrencyName>JST</CurrencyName>
      </CurrencyWrapper>
      <CurrencyWrapper>
        <Icon src={sun} alt="sun" />
        <CurrencyName>SUN</CurrencyName>
      </CurrencyWrapper>*/}
      <MoreWrapper>
        <CurrencyName>More</CurrencyName>
        <Icon src={arrowright} alt="arrow right" />
      </MoreWrapper>
    </Wrapper>
  );
}

export default HotSearch;
