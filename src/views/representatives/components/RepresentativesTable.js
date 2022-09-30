import React from 'react';
import { withRouter } from 'react-router-dom';
import { Table, TableBody, TableRow, TableCell } from 'src/components';
import styled from 'styled-components';

const Wrapper = styled.div`
  overflow-y: auto;
  .marginBottom {
    margin-bottom: 8px;
  }
`;
const TableCol = styled(TableCell)`
  vertical-align: text-top !important;
  padding: 26px 8px !important;
  max-width: 200px;
`;

const BlockHeight = styled.div`
  display: flex;
  flex-direction: column;

  min-height: 33px;
  justify-content: space-between;
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
const PercentageText = styled(SemiLightText)`
  color: #6ac367;
`;
const FlexColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Dot = styled.span`
  height: 12px;
  width: 12px;
  background-color: #6ac367;
  border-radius: 50%;
  display: inline-block;
`;

const RepresentativesTable = () => {
  return (
    <Wrapper>
      <Table hover bordered>
        <TableBody>
          <TableRow>
            <TableCol>
              <BlockHeight>
                <LightTextWrapper>
                  <LightText>Rank</LightText>
                </LightTextWrapper>
                <BoldText style={{ textAlign: 'center' }}>1</BoldText>
              </BlockHeight>
            </TableCol>
            <TableCol>
              <BlockHeight>
                <SemiBoldText>Binance Staking</SemiBoldText>
                <LightText>https://www.binance.com/en/staking</LightText>
              </BlockHeight>
            </TableCol>
            <TableCol>
              <BlockHeight>
                <LightText> Current version</LightText>
                <SemiBoldText>121</SemiBoldText>
              </BlockHeight>
            </TableCol>
            <TableCol>
              <BlockHeight>
                <LightText>Status</LightText>
                <Dot />
              </BlockHeight>
            </TableCol>
            <TableCol>
              <BlockHeight>
                <LightText>Latest block</LightText>
                <SemiBoldText>121</SemiBoldText>
              </BlockHeight>
            </TableCol>
            <TableCol>
              <BlockHeight>
                <LightText>Blocks produced</LightText>
                <SemiBoldText>121</SemiBoldText>
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
                <LightText>Productivity</LightText>
                <SemiBoldText>99.1%</SemiBoldText>
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
                <LightText>Voting sharing ratio</LightText>
                <SemiBoldText>80%</SemiBoldText>
              </BlockHeight>
            </TableCol>
            <TableCol>
              <BlockHeight>
                <LightText>APR</LightText>
                <SemiBoldText>4.70%</SemiBoldText>
              </BlockHeight>
            </TableCol>
          </TableRow>
          <TableRow>
            <TableCol>
              <BlockHeight>
                <LightTextWrapper>
                  <LightText>Rank</LightText>
                </LightTextWrapper>
                <BoldText style={{ textAlign: 'center' }}>2</BoldText>
              </BlockHeight>
            </TableCol>
            <TableCol>
              <BlockHeight>
                <SemiBoldText>Binance Staking</SemiBoldText>
                <LightText>https://www.binance.com/en/staking</LightText>
              </BlockHeight>
            </TableCol>
            <TableCol>
              <BlockHeight>
                <LightText> Current version</LightText>
                <SemiBoldText>121</SemiBoldText>
              </BlockHeight>
            </TableCol>
            <TableCol>
              <BlockHeight>
                <LightText>Status</LightText>
                <Dot />
              </BlockHeight>
            </TableCol>
            <TableCol>
              <BlockHeight>
                <LightText>Latest block</LightText>
                <SemiBoldText>121</SemiBoldText>
              </BlockHeight>
            </TableCol>
            <TableCol>
              <BlockHeight>
                <LightText>Blocks produced</LightText>
                <SemiBoldText>121</SemiBoldText>
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
                <LightText>Productivity</LightText>
                <SemiBoldText>99.1%</SemiBoldText>
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
                <LightText>Voting sharing ratio</LightText>
                <SemiBoldText>80%</SemiBoldText>
              </BlockHeight>
            </TableCol>
            <TableCol>
              <BlockHeight>
                <LightText>APR</LightText>
                <SemiBoldText>4.70%</SemiBoldText>
              </BlockHeight>
            </TableCol>
          </TableRow>
          <TableRow>
            <TableCol>
              <BlockHeight>
                <LightTextWrapper>
                  <LightText>Rank</LightText>
                </LightTextWrapper>
                <BoldText style={{ textAlign: 'center' }}>3</BoldText>
              </BlockHeight>
            </TableCol>
            <TableCol>
              <BlockHeight>
                <SemiBoldText>Binance Staking</SemiBoldText>
                <LightText>https://www.binance.com/en/staking</LightText>
              </BlockHeight>
            </TableCol>
            <TableCol>
              <BlockHeight>
                <LightText> Current version</LightText>
                <SemiBoldText>121</SemiBoldText>
              </BlockHeight>
            </TableCol>
            <TableCol>
              <BlockHeight>
                <LightText>Status</LightText>
                <Dot />
              </BlockHeight>
            </TableCol>
            <TableCol>
              <BlockHeight>
                <LightText>Latest block</LightText>
                <SemiBoldText>121</SemiBoldText>
              </BlockHeight>
            </TableCol>
            <TableCol>
              <BlockHeight>
                <LightText>Blocks produced</LightText>
                <SemiBoldText>121</SemiBoldText>
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
                <LightText>Productivity</LightText>
                <SemiBoldText>99.1%</SemiBoldText>
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
                <LightText>Voting sharing ratio</LightText>
                <SemiBoldText>80%</SemiBoldText>
              </BlockHeight>
            </TableCol>
            <TableCol>
              <BlockHeight>
                <LightText>APR</LightText>
                <SemiBoldText>4.70%</SemiBoldText>
              </BlockHeight>
            </TableCol>
          </TableRow>
          <TableRow>
            <TableCol>
              <BlockHeight>
                <LightTextWrapper>
                  <LightText>Rank</LightText>
                </LightTextWrapper>
                <BoldText style={{ textAlign: 'center' }}>4</BoldText>
              </BlockHeight>
            </TableCol>
            <TableCol>
              <BlockHeight>
                <SemiBoldText>Binance Staking</SemiBoldText>
                <LightText>https://www.binance.com/en/staking</LightText>
              </BlockHeight>
            </TableCol>
            <TableCol>
              <BlockHeight>
                <LightText> Current version</LightText>
                <SemiBoldText>121</SemiBoldText>
              </BlockHeight>
            </TableCol>
            <TableCol>
              <BlockHeight>
                <LightText>Status</LightText>
                <Dot />
              </BlockHeight>
            </TableCol>
            <TableCol>
              <BlockHeight>
                <LightText>Latest block</LightText>
                <SemiBoldText>121</SemiBoldText>
              </BlockHeight>
            </TableCol>
            <TableCol>
              <BlockHeight>
                <LightText>Blocks produced</LightText>
                <SemiBoldText>121</SemiBoldText>
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
                <LightText>Productivity</LightText>
                <SemiBoldText>99.1%</SemiBoldText>
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
                <LightText>Voting sharing ratio</LightText>
                <SemiBoldText>80%</SemiBoldText>
              </BlockHeight>
            </TableCol>
            <TableCol>
              <BlockHeight>
                <LightText>APR</LightText>
                <SemiBoldText>4.70%</SemiBoldText>
              </BlockHeight>
            </TableCol>
          </TableRow>
          <TableRow>
            <TableCol>
              <BlockHeight>
                <LightTextWrapper>
                  <LightText>Rank</LightText>
                </LightTextWrapper>
                <BoldText style={{ textAlign: 'center' }}>5</BoldText>
              </BlockHeight>
            </TableCol>
            <TableCol>
              <BlockHeight>
                <SemiBoldText>Binance Staking</SemiBoldText>
                <LightText>https://www.binance.com/en/staking</LightText>
              </BlockHeight>
            </TableCol>
            <TableCol>
              <BlockHeight>
                <LightText> Current version</LightText>
                <SemiBoldText>121</SemiBoldText>
              </BlockHeight>
            </TableCol>
            <TableCol>
              <BlockHeight>
                <LightText>Status</LightText>
                <Dot />
              </BlockHeight>
            </TableCol>
            <TableCol>
              <BlockHeight>
                <LightText>Latest block</LightText>
                <SemiBoldText>121</SemiBoldText>
              </BlockHeight>
            </TableCol>
            <TableCol>
              <BlockHeight>
                <LightText>Blocks produced</LightText>
                <SemiBoldText>121</SemiBoldText>
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
                <LightText>Productivity</LightText>
                <SemiBoldText>99.1%</SemiBoldText>
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
                <LightText>Voting sharing ratio</LightText>
                <SemiBoldText>80%</SemiBoldText>
              </BlockHeight>
            </TableCol>
            <TableCol>
              <BlockHeight>
                <LightText>APR</LightText>
                <SemiBoldText>4.70%</SemiBoldText>
              </BlockHeight>
            </TableCol>
          </TableRow>
          <TableRow>
            <TableCol>
              <BlockHeight>
                <LightTextWrapper>
                  <LightText>Rank</LightText>
                </LightTextWrapper>
                <BoldText style={{ textAlign: 'center' }}>6</BoldText>
              </BlockHeight>
            </TableCol>
            <TableCol>
              <BlockHeight>
                <SemiBoldText>Binance Staking</SemiBoldText>
                <LightText>https://www.binance.com/en/staking</LightText>
              </BlockHeight>
            </TableCol>
            <TableCol>
              <BlockHeight>
                <LightText> Current version</LightText>
                <SemiBoldText>121</SemiBoldText>
              </BlockHeight>
            </TableCol>
            <TableCol>
              <BlockHeight>
                <LightText>Status</LightText>
                <Dot />
              </BlockHeight>
            </TableCol>
            <TableCol>
              <BlockHeight>
                <LightText>Latest block</LightText>
                <SemiBoldText>121</SemiBoldText>
              </BlockHeight>
            </TableCol>
            <TableCol>
              <BlockHeight>
                <LightText>Blocks produced</LightText>
                <SemiBoldText>121</SemiBoldText>
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
                <LightText>Productivity</LightText>
                <SemiBoldText>99.1%</SemiBoldText>
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
                <LightText>Voting sharing ratio</LightText>
                <SemiBoldText>80%</SemiBoldText>
              </BlockHeight>
            </TableCol>
            <TableCol>
              <BlockHeight>
                <LightText>APR</LightText>
                <SemiBoldText>4.70%</SemiBoldText>
              </BlockHeight>
            </TableCol>
          </TableRow>
          <TableRow>
            <TableCol>
              <BlockHeight>
                <LightTextWrapper>
                  <LightText>Rank</LightText>
                </LightTextWrapper>
                <BoldText style={{ textAlign: 'center' }}>7</BoldText>
              </BlockHeight>
            </TableCol>
            <TableCol>
              <BlockHeight>
                <SemiBoldText>Binance Staking</SemiBoldText>
                <LightText>https://www.binance.com/en/staking</LightText>
              </BlockHeight>
            </TableCol>
            <TableCol>
              <BlockHeight>
                <LightText> Current version</LightText>
                <SemiBoldText>121</SemiBoldText>
              </BlockHeight>
            </TableCol>
            <TableCol>
              <BlockHeight>
                <LightText>Status</LightText>
                <Dot />
              </BlockHeight>
            </TableCol>
            <TableCol>
              <BlockHeight>
                <LightText>Latest block</LightText>
                <SemiBoldText>121</SemiBoldText>
              </BlockHeight>
            </TableCol>
            <TableCol>
              <BlockHeight>
                <LightText>Blocks produced</LightText>
                <SemiBoldText>121</SemiBoldText>
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
                <LightText>Productivity</LightText>
                <SemiBoldText>99.1%</SemiBoldText>
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
                <LightText>Voting sharing ratio</LightText>
                <SemiBoldText>80%</SemiBoldText>
              </BlockHeight>
            </TableCol>
            <TableCol>
              <BlockHeight>
                <LightText>APR</LightText>
                <SemiBoldText>4.70%</SemiBoldText>
              </BlockHeight>
            </TableCol>
          </TableRow>
          <TableRow>
            <TableCol>
              <BlockHeight>
                <LightTextWrapper>
                  <LightText>Rank</LightText>
                </LightTextWrapper>
                <BoldText style={{ textAlign: 'center' }}>8</BoldText>
              </BlockHeight>
            </TableCol>
            <TableCol>
              <BlockHeight>
                <SemiBoldText>Binance Staking</SemiBoldText>
                <LightText>https://www.binance.com/en/staking</LightText>
              </BlockHeight>
            </TableCol>
            <TableCol>
              <BlockHeight>
                <LightText> Current version</LightText>
                <SemiBoldText>121</SemiBoldText>
              </BlockHeight>
            </TableCol>
            <TableCol>
              <BlockHeight>
                <LightText>Status</LightText>
                <Dot />
              </BlockHeight>
            </TableCol>
            <TableCol>
              <BlockHeight>
                <LightText>Latest block</LightText>
                <SemiBoldText>121</SemiBoldText>
              </BlockHeight>
            </TableCol>
            <TableCol>
              <BlockHeight>
                <LightText>Blocks produced</LightText>
                <SemiBoldText>121</SemiBoldText>
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
                <LightText>Productivity</LightText>
                <SemiBoldText>99.1%</SemiBoldText>
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
                <LightText>Voting sharing ratio</LightText>
                <SemiBoldText>80%</SemiBoldText>
              </BlockHeight>
            </TableCol>
            <TableCol>
              <BlockHeight>
                <LightText>APR</LightText>
                <SemiBoldText>4.70%</SemiBoldText>
              </BlockHeight>
            </TableCol>
          </TableRow>
        </TableBody>
      </Table>
    </Wrapper>
  );
};

export default withRouter(RepresentativesTable);
