import React from 'react';
import { withRouter } from 'react-router-dom';
import { exclamation, swap, rank, trx } from 'src/assets/fincoreassests';
import { IconText } from 'src/components';
import { Table, TableBody, TableRow, TableCell } from 'src/components';
import styled from 'styled-components';

const Wrapper = styled.div`
  overflow-y: auto;
  .marginBottom {
    margin-bottom: 8px;
  }
`;
const TableCol = styled(TableCell)`
  // vertical-align: middle !important;
  padding: 26px 8px !important;
  max-width: 200px;
`;
const TdMain = styled(IconText)`
  align-items: center !important;
`;
const BlockHeight = styled.div`
  display: flex;
  flex-direction: column;
  // height: 100%;
  // min-height: 33px;
  // justify-content: space-between;
`;
const LightTextWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 4px;
  // justify-content: space-between;
`;
const LightText = styled.p`
  font-family: GilroyMedium;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  line-height: 1.2;
  color: #24234d;
  max-width: 150px;
  text-overflow: ellipsis;
  overflow: hidden;
  opacity: 0.4;
  font-size: 11px;
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
`;
const BlockLink = styled.div`
  text-decoration: none;
  font-size: 11px;
  margin: 0px 4px;
  font-family: 'GilroyBold';
  color: #d5da43;
  line-height: 1.2;
  :hover {
    color: #d5da43;
  }
`;

const SemiLightText = styled(LightText)`
  opacity: 1;
  font-size: 9px;
  margin-top: 2px;
`;
const PercentageText = styled(SemiLightText)`
  color: #6ac367;
`;
const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 3px;
`;

const StarIcon = styled.img`
  width: 14px;
  margin-top: 4px;
`;

const Icon = styled.img`
  margin-right: 10px;
  width: 30px;
  height: 30px;
`;
const StatusRightIcon = styled.img`
  margin-left: 3px;
  transform: rotate(90deg);
  width: 16px;
`;
const StatusLeftIcon = styled.img`
  width: 16px;
  margin-right: 3px;
`;
const TokenTrackerTable = () => {
  return (
    <Wrapper>
      <Table hover bordered>
        <TableBody>
          <TableRow>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>Rank</LightText>
                  </LightTextWrapper>
                  <StarIcon src={rank} alt="star" />
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <Icon src={trx} />
                <BlockHeight>
                  <BoldText className="marginBottom">
                    Wrapped TRX (WTRX)
                  </BoldText>
                  <LightText>This is the official TRX wrapping</LightText>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>Price</LightText>
                    <StatusRightIcon src={swap} />
                  </LightTextWrapper>
                  <FlexColumn>
                    <SemiBoldText>0.080764 USD</SemiBoldText>
                    <SemiLightText>1.000000 TRX</SemiLightText>
                  </FlexColumn>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <StatusLeftIcon src={exclamation} />
                    <LightText>Change(%)</LightText>
                    <StatusRightIcon src={swap} />
                  </LightTextWrapper>
                  <PercentageText>+1,87%</PercentageText>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>Volume (24H)</LightText>
                    <StatusRightIcon src={swap} />
                  </LightTextWrapper>
                  <FlexColumn>
                    <SemiBoldText>1,985,998,770.56 USD</SemiBoldText>
                    <SemiLightText>24,582,803,723.28 TRX</SemiLightText>
                  </FlexColumn>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <StatusLeftIcon src={exclamation} />
                    <LightText>Market Cap</LightText>
                    <StatusRightIcon src={swap} />
                  </LightTextWrapper>
                  <FlexColumn>
                    <SemiBoldText>1,238,666,656.85 USD</SemiBoldText>
                    <SemiLightText>15,332,285,072.48 TRX</SemiLightText>
                  </FlexColumn>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>Token Holders</LightText>
                    <StatusRightIcon src={swap} />
                  </LightTextWrapper>
                  <SemiBoldText>3,495</SemiBoldText>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>Operation</LightText>
                  </LightTextWrapper>
                  <LightTextWrapper>
                    <BlockLink>Details</BlockLink>
                    <BlockLink>Trade</BlockLink>
                  </LightTextWrapper>
                </BlockHeight>
              </TdMain>
            </TableCol>
          </TableRow>
          <TableRow>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>Rank</LightText>
                  </LightTextWrapper>
                  <StarIcon src={rank} alt="star" />
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <Icon src={trx} />
                <BlockHeight>
                  <BoldText className="marginBottom">
                    Wrapped TRX (WTRX)
                  </BoldText>
                  <LightText>This is the official TRX wrapping</LightText>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>Price</LightText>
                    <StatusRightIcon src={swap} />
                  </LightTextWrapper>
                  <FlexColumn>
                    <SemiBoldText>0.080764 USD</SemiBoldText>
                    <SemiLightText>1.000000 TRX</SemiLightText>
                  </FlexColumn>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <StatusLeftIcon src={exclamation} />
                    <LightText>Change(%)</LightText>
                    <StatusRightIcon src={swap} />
                  </LightTextWrapper>
                  <PercentageText>+1,87%</PercentageText>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>Volume (24H)</LightText>
                    <StatusRightIcon src={swap} />
                  </LightTextWrapper>
                  <FlexColumn>
                    <SemiBoldText>1,985,998,770.56 USD</SemiBoldText>
                    <SemiLightText>24,582,803,723.28 TRX</SemiLightText>
                  </FlexColumn>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <StatusLeftIcon src={exclamation} />
                    <LightText>Market Cap</LightText>
                    <StatusRightIcon src={swap} />
                  </LightTextWrapper>
                  <FlexColumn>
                    <SemiBoldText>1,238,666,656.85 USD</SemiBoldText>
                    <SemiLightText>15,332,285,072.48 TRX</SemiLightText>
                  </FlexColumn>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>Token Holders</LightText>
                    <StatusRightIcon src={swap} />
                  </LightTextWrapper>
                  <SemiBoldText>3,495</SemiBoldText>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>Operation</LightText>
                  </LightTextWrapper>
                  <LightTextWrapper>
                    <BlockLink>Details</BlockLink>
                    <BlockLink>Trade</BlockLink>
                  </LightTextWrapper>
                </BlockHeight>
              </TdMain>
            </TableCol>
          </TableRow>
          <TableRow>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>Rank</LightText>
                  </LightTextWrapper>
                  <StarIcon src={rank} alt="star" />
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <Icon src={trx} />
                <BlockHeight>
                  <BoldText className="marginBottom">
                    Wrapped TRX (WTRX)
                  </BoldText>
                  <LightText>This is the official TRX wrapping</LightText>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>Price</LightText>
                    <StatusRightIcon src={swap} />
                  </LightTextWrapper>
                  <FlexColumn>
                    <SemiBoldText>0.080764 USD</SemiBoldText>
                    <SemiLightText>1.000000 TRX</SemiLightText>
                  </FlexColumn>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <StatusLeftIcon src={exclamation} />
                    <LightText>Change(%)</LightText>
                    <StatusRightIcon src={swap} />
                  </LightTextWrapper>
                  <PercentageText>+1,87%</PercentageText>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>Volume (24H)</LightText>
                    <StatusRightIcon src={swap} />
                  </LightTextWrapper>
                  <FlexColumn>
                    <SemiBoldText>1,985,998,770.56 USD</SemiBoldText>
                    <SemiLightText>24,582,803,723.28 TRX</SemiLightText>
                  </FlexColumn>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <StatusLeftIcon src={exclamation} />
                    <LightText>Market Cap</LightText>
                    <StatusRightIcon src={swap} />
                  </LightTextWrapper>
                  <FlexColumn>
                    <SemiBoldText>1,238,666,656.85 USD</SemiBoldText>
                    <SemiLightText>15,332,285,072.48 TRX</SemiLightText>
                  </FlexColumn>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>Token Holders</LightText>
                    <StatusRightIcon src={swap} />
                  </LightTextWrapper>
                  <SemiBoldText>3,495</SemiBoldText>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>Operation</LightText>
                  </LightTextWrapper>
                  <LightTextWrapper>
                    <BlockLink>Details</BlockLink>
                    <BlockLink>Trade</BlockLink>
                  </LightTextWrapper>
                </BlockHeight>
              </TdMain>
            </TableCol>
          </TableRow>
          <TableRow>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>Rank</LightText>
                  </LightTextWrapper>
                  <StarIcon src={rank} alt="star" />
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <Icon src={trx} />
                <BlockHeight>
                  <BoldText className="marginBottom">
                    Wrapped TRX (WTRX)
                  </BoldText>
                  <LightText>This is the official TRX wrapping</LightText>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>Price</LightText>
                    <StatusRightIcon src={swap} />
                  </LightTextWrapper>
                  <FlexColumn>
                    <SemiBoldText>0.080764 USD</SemiBoldText>
                    <SemiLightText>1.000000 TRX</SemiLightText>
                  </FlexColumn>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <StatusLeftIcon src={exclamation} />
                    <LightText>Change(%)</LightText>
                    <StatusRightIcon src={swap} />
                  </LightTextWrapper>
                  <PercentageText>+1,87%</PercentageText>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>Volume (24H)</LightText>
                    <StatusRightIcon src={swap} />
                  </LightTextWrapper>
                  <FlexColumn>
                    <SemiBoldText>1,985,998,770.56 USD</SemiBoldText>
                    <SemiLightText>24,582,803,723.28 TRX</SemiLightText>
                  </FlexColumn>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <StatusLeftIcon src={exclamation} />
                    <LightText>Market Cap</LightText>
                    <StatusRightIcon src={swap} />
                  </LightTextWrapper>
                  <FlexColumn>
                    <SemiBoldText>1,238,666,656.85 USD</SemiBoldText>
                    <SemiLightText>15,332,285,072.48 TRX</SemiLightText>
                  </FlexColumn>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>Token Holders</LightText>
                    <StatusRightIcon src={swap} />
                  </LightTextWrapper>
                  <SemiBoldText>3,495</SemiBoldText>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>Operation</LightText>
                  </LightTextWrapper>
                  <LightTextWrapper>
                    <BlockLink>Details</BlockLink>
                    <BlockLink>Trade</BlockLink>
                  </LightTextWrapper>
                </BlockHeight>
              </TdMain>
            </TableCol>
          </TableRow>
          <TableRow>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>Rank</LightText>
                  </LightTextWrapper>
                  <StarIcon src={rank} alt="star" />
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <Icon src={trx} />
                <BlockHeight>
                  <BoldText className="marginBottom">
                    Wrapped TRX (WTRX)
                  </BoldText>
                  <LightText>This is the official TRX wrapping</LightText>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>Price</LightText>
                    <StatusRightIcon src={swap} />
                  </LightTextWrapper>
                  <FlexColumn>
                    <SemiBoldText>0.080764 USD</SemiBoldText>
                    <SemiLightText>1.000000 TRX</SemiLightText>
                  </FlexColumn>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <StatusLeftIcon src={exclamation} />
                    <LightText>Change(%)</LightText>
                    <StatusRightIcon src={swap} />
                  </LightTextWrapper>
                  <PercentageText>+1,87%</PercentageText>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>Volume (24H)</LightText>
                    <StatusRightIcon src={swap} />
                  </LightTextWrapper>
                  <FlexColumn>
                    <SemiBoldText>1,985,998,770.56 USD</SemiBoldText>
                    <SemiLightText>24,582,803,723.28 TRX</SemiLightText>
                  </FlexColumn>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <StatusLeftIcon src={exclamation} />
                    <LightText>Market Cap</LightText>
                    <StatusRightIcon src={swap} />
                  </LightTextWrapper>
                  <FlexColumn>
                    <SemiBoldText>1,238,666,656.85 USD</SemiBoldText>
                    <SemiLightText>15,332,285,072.48 TRX</SemiLightText>
                  </FlexColumn>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>Token Holders</LightText>
                    <StatusRightIcon src={swap} />
                  </LightTextWrapper>
                  <SemiBoldText>3,495</SemiBoldText>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>Operation</LightText>
                  </LightTextWrapper>
                  <LightTextWrapper>
                    <BlockLink>Details</BlockLink>
                    <BlockLink>Trade</BlockLink>
                  </LightTextWrapper>
                </BlockHeight>
              </TdMain>
            </TableCol>
          </TableRow>
          <TableRow>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>Rank</LightText>
                  </LightTextWrapper>
                  <StarIcon src={rank} alt="star" />
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <Icon src={trx} />
                <BlockHeight>
                  <BoldText className="marginBottom">
                    Wrapped TRX (WTRX)
                  </BoldText>
                  <LightText>This is the official TRX wrapping</LightText>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>Price</LightText>
                    <StatusRightIcon src={swap} />
                  </LightTextWrapper>
                  <FlexColumn>
                    <SemiBoldText>0.080764 USD</SemiBoldText>
                    <SemiLightText>1.000000 TRX</SemiLightText>
                  </FlexColumn>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <StatusLeftIcon src={exclamation} />
                    <LightText>Change(%)</LightText>
                    <StatusRightIcon src={swap} />
                  </LightTextWrapper>
                  <PercentageText>+1,87%</PercentageText>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>Volume (24H)</LightText>
                    <StatusRightIcon src={swap} />
                  </LightTextWrapper>
                  <FlexColumn>
                    <SemiBoldText>1,985,998,770.56 USD</SemiBoldText>
                    <SemiLightText>24,582,803,723.28 TRX</SemiLightText>
                  </FlexColumn>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <StatusLeftIcon src={exclamation} />
                    <LightText>Market Cap</LightText>
                    <StatusRightIcon src={swap} />
                  </LightTextWrapper>
                  <FlexColumn>
                    <SemiBoldText>1,238,666,656.85 USD</SemiBoldText>
                    <SemiLightText>15,332,285,072.48 TRX</SemiLightText>
                  </FlexColumn>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>Token Holders</LightText>
                    <StatusRightIcon src={swap} />
                  </LightTextWrapper>
                  <SemiBoldText>3,495</SemiBoldText>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>Operation</LightText>
                  </LightTextWrapper>
                  <LightTextWrapper>
                    <BlockLink>Details</BlockLink>
                    <BlockLink>Trade</BlockLink>
                  </LightTextWrapper>
                </BlockHeight>
              </TdMain>
            </TableCol>
          </TableRow>
          <TableRow>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>Rank</LightText>
                  </LightTextWrapper>
                  <StarIcon src={rank} alt="star" />
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <Icon src={trx} />
                <BlockHeight>
                  <BoldText className="marginBottom">
                    Wrapped TRX (WTRX)
                  </BoldText>
                  <LightText>This is the official TRX wrapping</LightText>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>Price</LightText>
                    <StatusRightIcon src={swap} />
                  </LightTextWrapper>
                  <FlexColumn>
                    <SemiBoldText>0.080764 USD</SemiBoldText>
                    <SemiLightText>1.000000 TRX</SemiLightText>
                  </FlexColumn>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <StatusLeftIcon src={exclamation} />
                    <LightText>Change(%)</LightText>
                    <StatusRightIcon src={swap} />
                  </LightTextWrapper>
                  <PercentageText>+1,87%</PercentageText>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>Volume (24H)</LightText>
                    <StatusRightIcon src={swap} />
                  </LightTextWrapper>
                  <FlexColumn>
                    <SemiBoldText>1,985,998,770.56 USD</SemiBoldText>
                    <SemiLightText>24,582,803,723.28 TRX</SemiLightText>
                  </FlexColumn>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <StatusLeftIcon src={exclamation} />
                    <LightText>Market Cap</LightText>
                    <StatusRightIcon src={swap} />
                  </LightTextWrapper>
                  <FlexColumn>
                    <SemiBoldText>1,238,666,656.85 USD</SemiBoldText>
                    <SemiLightText>15,332,285,072.48 TRX</SemiLightText>
                  </FlexColumn>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>Token Holders</LightText>
                    <StatusRightIcon src={swap} />
                  </LightTextWrapper>
                  <SemiBoldText>3,495</SemiBoldText>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>Operation</LightText>
                  </LightTextWrapper>
                  <LightTextWrapper>
                    <BlockLink>Details</BlockLink>
                    <BlockLink>Trade</BlockLink>
                  </LightTextWrapper>
                </BlockHeight>
              </TdMain>
            </TableCol>
          </TableRow>
          <TableRow>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>Rank</LightText>
                  </LightTextWrapper>
                  <StarIcon src={rank} alt="star" />
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <Icon src={trx} />
                <BlockHeight>
                  <BoldText className="marginBottom">
                    Wrapped TRX (WTRX)
                  </BoldText>
                  <LightText>This is the official TRX wrapping</LightText>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>Price</LightText>
                    <StatusRightIcon src={swap} />
                  </LightTextWrapper>
                  <FlexColumn>
                    <SemiBoldText>0.080764 USD</SemiBoldText>
                    <SemiLightText>1.000000 TRX</SemiLightText>
                  </FlexColumn>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <StatusLeftIcon src={exclamation} />
                    <LightText>Change(%)</LightText>
                    <StatusRightIcon src={swap} />
                  </LightTextWrapper>
                  <PercentageText>+1,87%</PercentageText>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>Volume (24H)</LightText>
                    <StatusRightIcon src={swap} />
                  </LightTextWrapper>
                  <FlexColumn>
                    <SemiBoldText>1,985,998,770.56 USD</SemiBoldText>
                    <SemiLightText>24,582,803,723.28 TRX</SemiLightText>
                  </FlexColumn>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <StatusLeftIcon src={exclamation} />
                    <LightText>Market Cap</LightText>
                    <StatusRightIcon src={swap} />
                  </LightTextWrapper>
                  <FlexColumn>
                    <SemiBoldText>1,238,666,656.85 USD</SemiBoldText>
                    <SemiLightText>15,332,285,072.48 TRX</SemiLightText>
                  </FlexColumn>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>Token Holders</LightText>
                    <StatusRightIcon src={swap} />
                  </LightTextWrapper>
                  <SemiBoldText>3,495</SemiBoldText>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>Operation</LightText>
                  </LightTextWrapper>
                  <LightTextWrapper>
                    <BlockLink>Details</BlockLink>
                    <BlockLink>Trade</BlockLink>
                  </LightTextWrapper>
                </BlockHeight>
              </TdMain>
            </TableCol>
          </TableRow>
        </TableBody>
      </Table>
    </Wrapper>
  );
};

export default withRouter(TokenTrackerTable);
