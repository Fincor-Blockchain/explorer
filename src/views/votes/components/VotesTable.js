import React from 'react';
import { withRouter } from 'react-router-dom';
import { exclamation, swap, arrowrightblack } from 'src/assets/fincoreassests';
import { Table, TableBody, TableRow, TableCell } from 'src/components';
import styled from 'styled-components';

const Wrapper = styled.div`
  overflow-y: auto;
  .marginBottom {
    margin-bottom: 8px;
  }
`;
const TableCol = styled(TableCell)`
  vertical-align: middle !important;
  padding: 26px 8px !important;
  max-width: 130px;
`;

const BlockHeight = styled.div`
  display: flex;
  flex-direction: column;

  min-height: 33px;
  justify-content: space-between;
`;
const FlexTextWrapper = styled.div`
  display: flex;
  align-items: center;
  min-width: 110px;
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
  font-family: GilroySemiBold;
  font-size: 11px;
`;
const LightText = styled.p`
  font-family: GilroyMedium;
  font-stretch: normal;
  margin: 6px 0px;
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
const SemiLightText = styled(LightText)`
  opacity: 1;
  font-size: 9px;
  margin: 0px;
`;
const MediumText = styled(SemiBoldText)`
  // font-family: ;
`;
const PercentageText = styled(SemiLightText)`
  color: #6ac367;
`;
const FlexColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ArrowRight = styled.img`
  margin-left: 3px;
  width: 12px;
  height: 12px;
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
const VotesTable = () => {
  return (
    <Wrapper>
      <Table hover bordered>
        <TableBody>
          <TableRow>
            <TableCol>
              <BlockHeight>
                <SemiBoldText>Binance Staking</SemiBoldText>
                <LightText>https://www.binance.com/en/staking</LightText>
              </BlockHeight>
            </TableCol>
            <TableCol>
              <FlexTextWrapper>
                {/* will be used later */}
                {/* <MediumText>Team information</MediumText>
                <ArrowRight src={arrowrightblack} /> */}
              </FlexTextWrapper>
            </TableCol>
            <TableCol>
              <BlockHeight>
                <LightTextWrapper>
                  <LightText>Last ranking</LightText>
                  <StatusRightIcon src={swap} />
                </LightTextWrapper>
                <SemiBoldText>121</SemiBoldText>
              </BlockHeight>
            </TableCol>
            <TableCol>
              <BlockHeight>
                <LightText>Last votes</LightText>
                <SemiBoldText>10,054,012,490</SemiBoldText>
              </BlockHeight>
            </TableCol>
            <TableCol>
              <BlockHeight>
                <LightText>Blocks missed</LightText>
                <SemiBoldText>121</SemiBoldText>
              </BlockHeight>
            </TableCol>
            <TableCol>
              <BlockHeight>
                <LightTextWrapper>
                  <StatusLeftIcon src={exclamation} />
                  <LightText>Percentage</LightText>
                </LightTextWrapper>
                <SemiBoldText>34.73%</SemiBoldText>
              </BlockHeight>
            </TableCol>
            <TableCol>
              <BlockHeight>
                <LightTextWrapper>
                  <LightText>Current ranking</LightText>
                  <StatusRightIcon src={swap} />
                </LightTextWrapper>
                <SemiBoldText>1</SemiBoldText>
              </BlockHeight>
            </TableCol>
            <TableCol>
              <BlockHeight>
                <LightText>Current votes</LightText>
                <FlexColumnWrapper>
                  <SemiBoldText>1,985,998,770.56 USD</SemiBoldText>
                  <PercentageText>+1,557,180</PercentageText>
                </FlexColumnWrapper>
              </BlockHeight>
            </TableCol>
            <TableCol>
              <BlockHeight>
                <LightTextWrapper>
                  <StatusLeftIcon src={exclamation} />
                  <LightText>Voting sharing ratio</LightText>
                </LightTextWrapper>
                <SemiBoldText>80%</SemiBoldText>
              </BlockHeight>
            </TableCol>
            <TableCol>
              <BlockHeight>
                <LightTextWrapper>
                  <LightText>APR</LightText>
                  <StatusRightIcon src={swap} />
                </LightTextWrapper>
                <SemiBoldText>4.70%</SemiBoldText>
              </BlockHeight>
            </TableCol>
          </TableRow>
          <TableRow>
            <TableCol>
              <BlockHeight>
                <SemiBoldText>Binance Staking</SemiBoldText>
                <LightText>https://www.binance.com/en/staking</LightText>
              </BlockHeight>
            </TableCol>
            <TableCol>
              <FlexTextWrapper>
                {/* will be used later */}
                {/* <MediumText>Team information</MediumText>
                <ArrowRight src={arrowrightblack} /> */}
              </FlexTextWrapper>
            </TableCol>
            <TableCol>
              <BlockHeight>
                <LightTextWrapper>
                  <LightText>Last ranking</LightText>
                  <StatusRightIcon src={swap} />
                </LightTextWrapper>
                <SemiBoldText>121</SemiBoldText>
              </BlockHeight>
            </TableCol>
            <TableCol>
              <BlockHeight>
                <LightText>Last votes</LightText>
                <SemiBoldText>10,054,012,490</SemiBoldText>
              </BlockHeight>
            </TableCol>
            <TableCol>
              <BlockHeight>
                <LightText>Blocks missed</LightText>
                <SemiBoldText>121</SemiBoldText>
              </BlockHeight>
            </TableCol>
            <TableCol>
              <BlockHeight>
                <LightTextWrapper>
                  <StatusLeftIcon src={exclamation} />
                  <LightText>Percentage</LightText>
                </LightTextWrapper>
                <SemiBoldText>34.73%</SemiBoldText>
              </BlockHeight>
            </TableCol>
            <TableCol>
              <BlockHeight>
                <LightTextWrapper>
                  <LightText>Current ranking</LightText>
                  <StatusRightIcon src={swap} />
                </LightTextWrapper>
                <SemiBoldText>1</SemiBoldText>
              </BlockHeight>
            </TableCol>
            <TableCol>
              <BlockHeight>
                <LightText>Current votes</LightText>
                <FlexColumnWrapper>
                  <SemiBoldText>1,985,998,770.56 USD</SemiBoldText>
                  <PercentageText>+1,557,180</PercentageText>
                </FlexColumnWrapper>
              </BlockHeight>
            </TableCol>
            <TableCol>
              <BlockHeight>
                <LightTextWrapper>
                  <StatusLeftIcon src={exclamation} />
                  <LightText>Voting sharing ratio</LightText>
                </LightTextWrapper>
                <SemiBoldText>80%</SemiBoldText>
              </BlockHeight>
            </TableCol>
            <TableCol>
              <BlockHeight>
                <LightTextWrapper>
                  <LightText>APR</LightText>
                  <StatusRightIcon src={swap} />
                </LightTextWrapper>
                <SemiBoldText>4.70%</SemiBoldText>
              </BlockHeight>
            </TableCol>
          </TableRow>
          <TableRow>
            <TableCol>
              <BlockHeight>
                <SemiBoldText>Binance Staking</SemiBoldText>
                <LightText>https://www.binance.com/en/staking</LightText>
              </BlockHeight>
            </TableCol>
            <TableCol>
              <FlexTextWrapper>
                <MediumText>Team information</MediumText>
                <ArrowRight src={arrowrightblack} />
              </FlexTextWrapper>
            </TableCol>
            <TableCol>
              <BlockHeight>
                <LightTextWrapper>
                  <LightText>Last ranking</LightText>
                  <StatusRightIcon src={swap} />
                </LightTextWrapper>
                <SemiBoldText>121</SemiBoldText>
              </BlockHeight>
            </TableCol>
            <TableCol>
              <BlockHeight>
                <LightText>Last votes</LightText>
                <SemiBoldText>10,054,012,490</SemiBoldText>
              </BlockHeight>
            </TableCol>
            <TableCol>
              <BlockHeight>
                <LightText>Blocks missed</LightText>
                <SemiBoldText>121</SemiBoldText>
              </BlockHeight>
            </TableCol>
            <TableCol>
              <BlockHeight>
                <LightTextWrapper>
                  <StatusLeftIcon src={exclamation} />
                  <LightText>Percentage</LightText>
                </LightTextWrapper>
                <SemiBoldText>34.73%</SemiBoldText>
              </BlockHeight>
            </TableCol>
            <TableCol>
              <BlockHeight>
                <LightTextWrapper>
                  <LightText>Current ranking</LightText>
                  <StatusRightIcon src={swap} />
                </LightTextWrapper>
                <SemiBoldText>1</SemiBoldText>
              </BlockHeight>
            </TableCol>
            <TableCol>
              <BlockHeight>
                <LightText>Current votes</LightText>
                <FlexColumnWrapper>
                  <SemiBoldText>1,985,998,770.56 USD</SemiBoldText>
                  <PercentageText>+1,557,180</PercentageText>
                </FlexColumnWrapper>
              </BlockHeight>
            </TableCol>
            <TableCol>
              <BlockHeight>
                <LightTextWrapper>
                  <StatusLeftIcon src={exclamation} />
                  <LightText>Voting sharing ratio</LightText>
                </LightTextWrapper>
                <SemiBoldText>80%</SemiBoldText>
              </BlockHeight>
            </TableCol>
            <TableCol>
              <BlockHeight>
                <LightTextWrapper>
                  <LightText>APR</LightText>
                  <StatusRightIcon src={swap} />
                </LightTextWrapper>
                <SemiBoldText>4.70%</SemiBoldText>
              </BlockHeight>
            </TableCol>
          </TableRow>
          <TableRow>
            <TableCol>
              <BlockHeight>
                <SemiBoldText>Binance Staking</SemiBoldText>
                <LightText>https://www.binance.com/en/staking</LightText>
              </BlockHeight>
            </TableCol>
            <TableCol>
              <FlexTextWrapper>
                <MediumText>Team information</MediumText>
                <ArrowRight src={arrowrightblack} />
              </FlexTextWrapper>
            </TableCol>
            <TableCol>
              <BlockHeight>
                <LightTextWrapper>
                  <LightText>Last ranking</LightText>
                  <StatusRightIcon src={swap} />
                </LightTextWrapper>
                <SemiBoldText>121</SemiBoldText>
              </BlockHeight>
            </TableCol>
            <TableCol>
              <BlockHeight>
                <LightText>Last votes</LightText>
                <SemiBoldText>10,054,012,490</SemiBoldText>
              </BlockHeight>
            </TableCol>
            <TableCol>
              <BlockHeight>
                <LightText>Blocks missed</LightText>
                <SemiBoldText>121</SemiBoldText>
              </BlockHeight>
            </TableCol>
            <TableCol>
              <BlockHeight>
                <LightTextWrapper>
                  <StatusLeftIcon src={exclamation} />
                  <LightText>Percentage</LightText>
                </LightTextWrapper>
                <SemiBoldText>34.73%</SemiBoldText>
              </BlockHeight>
            </TableCol>
            <TableCol>
              <BlockHeight>
                <LightTextWrapper>
                  <LightText>Current ranking</LightText>
                  <StatusRightIcon src={swap} />
                </LightTextWrapper>
                <SemiBoldText>1</SemiBoldText>
              </BlockHeight>
            </TableCol>
            <TableCol>
              <BlockHeight>
                <LightText>Current votes</LightText>
                <FlexColumnWrapper>
                  <SemiBoldText>1,985,998,770.56 USD</SemiBoldText>
                  <PercentageText>+1,557,180</PercentageText>
                </FlexColumnWrapper>
              </BlockHeight>
            </TableCol>
            <TableCol>
              <BlockHeight>
                <LightTextWrapper>
                  <StatusLeftIcon src={exclamation} />
                  <LightText>Voting sharing ratio</LightText>
                </LightTextWrapper>
                <SemiBoldText>80%</SemiBoldText>
              </BlockHeight>
            </TableCol>
            <TableCol>
              <BlockHeight>
                <LightTextWrapper>
                  <LightText>APR</LightText>
                  <StatusRightIcon src={swap} />
                </LightTextWrapper>
                <SemiBoldText>4.70%</SemiBoldText>
              </BlockHeight>
            </TableCol>
          </TableRow>
          <TableRow>
            <TableCol>
              <BlockHeight>
                <SemiBoldText>Binance Staking</SemiBoldText>
                <LightText>https://www.binance.com/en/staking</LightText>
              </BlockHeight>
            </TableCol>
            <TableCol>
              <FlexTextWrapper>
                {/* will be used later */}
                {/* <MediumText>Team information</MediumText>
                <ArrowRight src={arrowrightblack} /> */}
              </FlexTextWrapper>
            </TableCol>
            <TableCol>
              <BlockHeight>
                <LightTextWrapper>
                  <LightText>Last ranking</LightText>
                  <StatusRightIcon src={swap} />
                </LightTextWrapper>
                <SemiBoldText>121</SemiBoldText>
              </BlockHeight>
            </TableCol>
            <TableCol>
              <BlockHeight>
                <LightText>Last votes</LightText>
                <SemiBoldText>10,054,012,490</SemiBoldText>
              </BlockHeight>
            </TableCol>
            <TableCol>
              <BlockHeight>
                <LightText>Blocks missed</LightText>
                <SemiBoldText>121</SemiBoldText>
              </BlockHeight>
            </TableCol>
            <TableCol>
              <BlockHeight>
                <LightTextWrapper>
                  <StatusLeftIcon src={exclamation} />
                  <LightText>Percentage</LightText>
                </LightTextWrapper>
                <SemiBoldText>34.73%</SemiBoldText>
              </BlockHeight>
            </TableCol>
            <TableCol>
              <BlockHeight>
                <LightTextWrapper>
                  <LightText>Current ranking</LightText>
                  <StatusRightIcon src={swap} />
                </LightTextWrapper>
                <SemiBoldText>1</SemiBoldText>
              </BlockHeight>
            </TableCol>
            <TableCol>
              <BlockHeight>
                <LightText>Current votes</LightText>
                <FlexColumnWrapper>
                  <SemiBoldText>1,985,998,770.56 USD</SemiBoldText>
                  <PercentageText>+1,557,180</PercentageText>
                </FlexColumnWrapper>
              </BlockHeight>
            </TableCol>
            <TableCol>
              <BlockHeight>
                <LightTextWrapper>
                  <StatusLeftIcon src={exclamation} />
                  <LightText>Voting sharing ratio</LightText>
                </LightTextWrapper>
                <SemiBoldText>80%</SemiBoldText>
              </BlockHeight>
            </TableCol>
            <TableCol>
              <BlockHeight>
                <LightTextWrapper>
                  <LightText>APR</LightText>
                  <StatusRightIcon src={swap} />
                </LightTextWrapper>
                <SemiBoldText>4.70%</SemiBoldText>
              </BlockHeight>
            </TableCol>
          </TableRow>
          <TableRow>
            <TableCol>
              <BlockHeight>
                <SemiBoldText>Binance Staking</SemiBoldText>
                <LightText>https://www.binance.com/en/staking</LightText>
              </BlockHeight>
            </TableCol>
            <TableCol>
              <FlexTextWrapper>
                {/* will be used later */}
                {/* <MediumText>Team information</MediumText>
                <ArrowRight src={arrowrightblack} /> */}
              </FlexTextWrapper>
            </TableCol>
            <TableCol>
              <BlockHeight>
                <LightTextWrapper>
                  <LightText>Last ranking</LightText>
                  <StatusRightIcon src={swap} />
                </LightTextWrapper>
                <SemiBoldText>121</SemiBoldText>
              </BlockHeight>
            </TableCol>
            <TableCol>
              <BlockHeight>
                <LightText>Last votes</LightText>
                <SemiBoldText>10,054,012,490</SemiBoldText>
              </BlockHeight>
            </TableCol>
            <TableCol>
              <BlockHeight>
                <LightText>Blocks missed</LightText>
                <SemiBoldText>121</SemiBoldText>
              </BlockHeight>
            </TableCol>
            <TableCol>
              <BlockHeight>
                <LightTextWrapper>
                  <StatusLeftIcon src={exclamation} />
                  <LightText>Percentage</LightText>
                </LightTextWrapper>
                <SemiBoldText>34.73%</SemiBoldText>
              </BlockHeight>
            </TableCol>
            <TableCol>
              <BlockHeight>
                <LightTextWrapper>
                  <LightText>Current ranking</LightText>
                  <StatusRightIcon src={swap} />
                </LightTextWrapper>
                <SemiBoldText>1</SemiBoldText>
              </BlockHeight>
            </TableCol>
            <TableCol>
              <BlockHeight>
                <LightText>Current votes</LightText>
                <FlexColumnWrapper>
                  <SemiBoldText>1,985,998,770.56 USD</SemiBoldText>
                  <PercentageText>+1,557,180</PercentageText>
                </FlexColumnWrapper>
              </BlockHeight>
            </TableCol>
            <TableCol>
              <BlockHeight>
                <LightTextWrapper>
                  <StatusLeftIcon src={exclamation} />
                  <LightText>Voting sharing ratio</LightText>
                </LightTextWrapper>
                <SemiBoldText>80%</SemiBoldText>
              </BlockHeight>
            </TableCol>
            <TableCol>
              <BlockHeight>
                <LightTextWrapper>
                  <LightText>APR</LightText>
                  <StatusRightIcon src={swap} />
                </LightTextWrapper>
                <SemiBoldText>4.70%</SemiBoldText>
              </BlockHeight>
            </TableCol>
          </TableRow>
          <TableRow>
            <TableCol>
              <BlockHeight>
                <SemiBoldText>Binance Staking</SemiBoldText>
                <LightText>https://www.binance.com/en/staking</LightText>
              </BlockHeight>
            </TableCol>
            <TableCol>
              <FlexTextWrapper>
                {/* will be used later */}
                {/* <MediumText>Team information</MediumText>
                <ArrowRight src={arrowrightblack} /> */}
              </FlexTextWrapper>
            </TableCol>
            <TableCol>
              <BlockHeight>
                <LightTextWrapper>
                  <LightText>Last ranking</LightText>
                  <StatusRightIcon src={swap} />
                </LightTextWrapper>
                <SemiBoldText>121</SemiBoldText>
              </BlockHeight>
            </TableCol>
            <TableCol>
              <BlockHeight>
                <LightText>Last votes</LightText>
                <SemiBoldText>10,054,012,490</SemiBoldText>
              </BlockHeight>
            </TableCol>
            <TableCol>
              <BlockHeight>
                <LightText>Blocks missed</LightText>
                <SemiBoldText>121</SemiBoldText>
              </BlockHeight>
            </TableCol>
            <TableCol>
              <BlockHeight>
                <LightTextWrapper>
                  <StatusLeftIcon src={exclamation} />
                  <LightText>Percentage</LightText>
                </LightTextWrapper>
                <SemiBoldText>34.73%</SemiBoldText>
              </BlockHeight>
            </TableCol>
            <TableCol>
              <BlockHeight>
                <LightTextWrapper>
                  <LightText>Current ranking</LightText>
                  <StatusRightIcon src={swap} />
                </LightTextWrapper>
                <SemiBoldText>1</SemiBoldText>
              </BlockHeight>
            </TableCol>
            <TableCol>
              <BlockHeight>
                <LightText>Current votes</LightText>
                <FlexColumnWrapper>
                  <SemiBoldText>1,985,998,770.56 USD</SemiBoldText>
                  <PercentageText>+1,557,180</PercentageText>
                </FlexColumnWrapper>
              </BlockHeight>
            </TableCol>
            <TableCol>
              <BlockHeight>
                <LightTextWrapper>
                  <StatusLeftIcon src={exclamation} />
                  <LightText>Voting sharing ratio</LightText>
                </LightTextWrapper>
                <SemiBoldText>80%</SemiBoldText>
              </BlockHeight>
            </TableCol>
            <TableCol>
              <BlockHeight>
                <LightTextWrapper>
                  <LightText>APR</LightText>
                  <StatusRightIcon src={swap} />
                </LightTextWrapper>
                <SemiBoldText>4.70%</SemiBoldText>
              </BlockHeight>
            </TableCol>
          </TableRow>
        </TableBody>
      </Table>
    </Wrapper>
  );
};

export default withRouter(VotesTable);
