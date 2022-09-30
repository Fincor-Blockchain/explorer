import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import {
  exclamation,
  swap,
  rank,
  trx,
  arrowrightblack
} from 'src/assets/fincoreassests';
import { IconText } from 'src/components';
import { Table, TableBody, TableRow, TableCell } from 'src/components';
import styled from 'styled-components';

const Wrapper = styled.div`
  overflow-y: auto;

  .marginLeft {
    margin-left: 8px;
  }
`;
const TableCol = styled(TableCell)`
  // vertical-align: middle !important;
  padding: 26px 8px !important;
  max-width: 275px;
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
  // margin-bottom: 4px;
  // justify-content: space-between;
`;
const FlexTextWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const FlexColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const LightText = styled.p`
  font-family: GilroyMedium;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  line-height: 1.5;
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

  white-space: break-spaces;

  line-height: 1.5;
`;
const EffectiveText = styled(SemiBoldText)`
  color: #6ac367;
`;
const InEffectiveText = styled(SemiBoldText)`
  color: #c8102e;
`;
const BlockLink = styled(Link)`
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
const AddressSpan = styled.p`
  color: #d5da43;
  font-size: 9px;
  background: rgba(213, 218, 67, 0.12);
  border-radius: 6.5px;
  padding: 1px 5px;
  text-align: center;
`;

// const StatusRightIcon = styled.img`
//   margin-left: 3px;
//   transform: rotate(90deg);
//   width: 16px;
// `;
const StarIcon = styled.img`
  width: 14px;
  margin-top: 4px;
`;

const AddressWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const Icon = styled.img`
  margin-right: 10px;
  width: 30px;
  height: 30px;
`;
const StatusRightIcon = styled.img`
  margin-left: 3px;

  width: 12px;
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
                    <LightText>Number</LightText>
                  </LightTextWrapper>
                  <SemiBoldText style={{ textAlign: 'center' }}>1</SemiBoldText>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>Parameter</LightText>
                  </LightTextWrapper>
                  <SemiBoldText>
                    Propose to modify the maintenance interval of SR
                  </SemiBoldText>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>Proposer</LightText>
                  </LightTextWrapper>
                  <SemiBoldText>CryptoGuyInZA</SemiBoldText>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <FlexColumnWrapper>
                      <LightText>Time of Creaction:</LightText>
                      <LightText>Time of expiration(Local):</LightText>
                    </FlexColumnWrapper>
                    <FlexColumnWrapper>
                      <SemiBoldText className="marginLeft">
                        2021-05-07 07:13:39
                      </SemiBoldText>
                      <SemiBoldText className="marginLeft">
                        2021-05-07 07:13:39
                      </SemiBoldText>
                    </FlexColumnWrapper>
                  </LightTextWrapper>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>Proposal status</LightText>
                  </LightTextWrapper>
                  <EffectiveText>EFFECTIVE</EffectiveText>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>Upvotes / Total Votes</LightText>
                  </LightTextWrapper>
                  <SemiBoldText>19 / 27</SemiBoldText>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>Operations</LightText>
                  </LightTextWrapper>
                  <FlexTextWrapper>
                    <SemiBoldText>Details</SemiBoldText>
                    <StatusRightIcon src={arrowrightblack} />
                  </FlexTextWrapper>
                </BlockHeight>
              </TdMain>
            </TableCol>
          </TableRow>
          <TableRow>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>Number</LightText>
                  </LightTextWrapper>
                  <SemiBoldText style={{ textAlign: 'center' }}>2</SemiBoldText>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>Parameter</LightText>
                  </LightTextWrapper>
                  <SemiBoldText>
                    Propose to modify the maintenance interval of SR
                  </SemiBoldText>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>Proposer</LightText>
                  </LightTextWrapper>
                  <SemiBoldText>CryptoGuyInZA</SemiBoldText>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <FlexColumnWrapper>
                      <LightText>Time of Creaction:</LightText>
                      <LightText>Time of expiration(Local):</LightText>
                    </FlexColumnWrapper>
                    <FlexColumnWrapper>
                      <SemiBoldText className="marginLeft">
                        2021-05-07 07:13:39
                      </SemiBoldText>
                      <SemiBoldText className="marginLeft">
                        2021-05-07 07:13:39
                      </SemiBoldText>
                    </FlexColumnWrapper>
                  </LightTextWrapper>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>Proposal status</LightText>
                  </LightTextWrapper>
                  <EffectiveText>EFFECTIVE</EffectiveText>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>Upvotes / Total Votes</LightText>
                  </LightTextWrapper>
                  <SemiBoldText>19 / 27</SemiBoldText>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>Operations</LightText>
                  </LightTextWrapper>
                  <FlexTextWrapper>
                    <SemiBoldText>Details</SemiBoldText>
                    <StatusRightIcon src={arrowrightblack} />
                  </FlexTextWrapper>
                </BlockHeight>
              </TdMain>
            </TableCol>
          </TableRow>
          <TableRow>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>Number</LightText>
                  </LightTextWrapper>
                  <SemiBoldText style={{ textAlign: 'center' }}>3</SemiBoldText>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>Parameter</LightText>
                  </LightTextWrapper>
                  <SemiBoldText>
                    Propose to modify the fee of 1 bandwidth to 0.00014 TRX.
                    Propose to modify the fee of 1 energy to 0.00014 TRX.
                    Proposal to modify the upper limit of single smart contract
                    fees to 5000 TRX
                  </SemiBoldText>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>Proposer</LightText>
                  </LightTextWrapper>
                  <SemiBoldText>CryptoGuyInZA</SemiBoldText>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <FlexColumnWrapper>
                      <LightText>Time of Creaction:</LightText>
                      <LightText>Time of expiration(Local):</LightText>
                    </FlexColumnWrapper>
                    <FlexColumnWrapper>
                      <SemiBoldText className="marginLeft">
                        2021-05-07 07:13:39
                      </SemiBoldText>
                      <SemiBoldText className="marginLeft">
                        2021-05-07 07:13:39
                      </SemiBoldText>
                    </FlexColumnWrapper>
                  </LightTextWrapper>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>Proposal status</LightText>
                  </LightTextWrapper>
                  <EffectiveText>EFFECTIVE</EffectiveText>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>Upvotes / Total Votes</LightText>
                  </LightTextWrapper>
                  <SemiBoldText>19 / 27</SemiBoldText>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>Operations</LightText>
                  </LightTextWrapper>
                  <FlexTextWrapper>
                    <SemiBoldText>Details</SemiBoldText>
                    <StatusRightIcon src={arrowrightblack} />
                  </FlexTextWrapper>
                </BlockHeight>
              </TdMain>
            </TableCol>
          </TableRow>
          <TableRow>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>Number</LightText>
                  </LightTextWrapper>
                  <SemiBoldText style={{ textAlign: 'center' }}>4</SemiBoldText>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>Parameter</LightText>
                  </LightTextWrapper>
                  <SemiBoldText>
                    Propose to modify the maintenance interval of SR
                  </SemiBoldText>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>Proposer</LightText>
                  </LightTextWrapper>
                  <SemiBoldText>CryptoGuyInZA</SemiBoldText>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <FlexColumnWrapper>
                      <LightText>Time of Creaction:</LightText>
                      <LightText>Time of expiration(Local):</LightText>
                    </FlexColumnWrapper>
                    <FlexColumnWrapper>
                      <SemiBoldText className="marginLeft">
                        2021-05-07 07:13:39
                      </SemiBoldText>
                      <SemiBoldText className="marginLeft">
                        2021-05-07 07:13:39
                      </SemiBoldText>
                    </FlexColumnWrapper>
                  </LightTextWrapper>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>Proposal status</LightText>
                  </LightTextWrapper>
                  <EffectiveText>EFFECTIVE</EffectiveText>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>Upvotes / Total Votes</LightText>
                  </LightTextWrapper>
                  <SemiBoldText>19 / 27</SemiBoldText>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>Operations</LightText>
                  </LightTextWrapper>
                  <FlexTextWrapper>
                    <SemiBoldText>Details</SemiBoldText>
                    <StatusRightIcon src={arrowrightblack} />
                  </FlexTextWrapper>
                </BlockHeight>
              </TdMain>
            </TableCol>
          </TableRow>
          <TableRow>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>Number</LightText>
                  </LightTextWrapper>
                  <SemiBoldText style={{ textAlign: 'center' }}>5</SemiBoldText>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>Parameter</LightText>
                  </LightTextWrapper>
                  <SemiBoldText>
                    Propose to modify the maintenance interval of SR
                  </SemiBoldText>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>Proposer</LightText>
                  </LightTextWrapper>
                  <SemiBoldText>CryptoGuyInZA</SemiBoldText>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <FlexColumnWrapper>
                      <LightText>Time of Creaction:</LightText>
                      <LightText>Time of expiration(Local):</LightText>
                    </FlexColumnWrapper>
                    <FlexColumnWrapper>
                      <SemiBoldText className="marginLeft">
                        2021-05-07 07:13:39
                      </SemiBoldText>
                      <SemiBoldText className="marginLeft">
                        2021-05-07 07:13:39
                      </SemiBoldText>
                    </FlexColumnWrapper>
                  </LightTextWrapper>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>Proposal status</LightText>
                  </LightTextWrapper>
                  <EffectiveText>EFFECTIVE</EffectiveText>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>Upvotes / Total Votes</LightText>
                  </LightTextWrapper>
                  <SemiBoldText>19 / 27</SemiBoldText>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>Operations</LightText>
                  </LightTextWrapper>
                  <FlexTextWrapper>
                    <SemiBoldText>Details</SemiBoldText>
                    <StatusRightIcon src={arrowrightblack} />
                  </FlexTextWrapper>
                </BlockHeight>
              </TdMain>
            </TableCol>
          </TableRow>
          <TableRow>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>Number</LightText>
                  </LightTextWrapper>
                  <SemiBoldText style={{ textAlign: 'center' }}>6</SemiBoldText>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>Parameter</LightText>
                  </LightTextWrapper>
                  <SemiBoldText>
                    Propose to modify the maintenance interval of SR
                  </SemiBoldText>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>Proposer</LightText>
                  </LightTextWrapper>
                  <SemiBoldText>CryptoGuyInZA</SemiBoldText>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <FlexColumnWrapper>
                      <LightText>Time of Creaction:</LightText>
                      <LightText>Time of expiration(Local):</LightText>
                    </FlexColumnWrapper>
                    <FlexColumnWrapper>
                      <SemiBoldText className="marginLeft">
                        2021-05-07 07:13:39
                      </SemiBoldText>
                      <SemiBoldText className="marginLeft">
                        2021-05-07 07:13:39
                      </SemiBoldText>
                    </FlexColumnWrapper>
                  </LightTextWrapper>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>Proposal status</LightText>
                  </LightTextWrapper>
                  <EffectiveText>EFFECTIVE</EffectiveText>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>Upvotes / Total Votes</LightText>
                  </LightTextWrapper>
                  <SemiBoldText>19 / 27</SemiBoldText>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>Operations</LightText>
                  </LightTextWrapper>
                  <FlexTextWrapper>
                    <SemiBoldText>Details</SemiBoldText>
                    <StatusRightIcon src={arrowrightblack} />
                  </FlexTextWrapper>
                </BlockHeight>
              </TdMain>
            </TableCol>
          </TableRow>
          <TableRow>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>Number</LightText>
                  </LightTextWrapper>
                  <SemiBoldText style={{ textAlign: 'center' }}>7</SemiBoldText>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>Parameter</LightText>
                  </LightTextWrapper>
                  <SemiBoldText>
                    Propose to modify the maintenance interval of SR
                  </SemiBoldText>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>Proposer</LightText>
                  </LightTextWrapper>
                  <SemiBoldText>CryptoGuyInZA</SemiBoldText>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <FlexColumnWrapper>
                      <LightText>Time of Creaction:</LightText>
                      <LightText>Time of expiration(Local):</LightText>
                    </FlexColumnWrapper>
                    <FlexColumnWrapper>
                      <SemiBoldText className="marginLeft">
                        2021-05-07 07:13:39
                      </SemiBoldText>
                      <SemiBoldText className="marginLeft">
                        2021-05-07 07:13:39
                      </SemiBoldText>
                    </FlexColumnWrapper>
                  </LightTextWrapper>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>Proposal status</LightText>
                  </LightTextWrapper>
                  <EffectiveText>EFFECTIVE</EffectiveText>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>Upvotes / Total Votes</LightText>
                  </LightTextWrapper>
                  <SemiBoldText>19 / 27</SemiBoldText>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>Operations</LightText>
                  </LightTextWrapper>
                  <FlexTextWrapper>
                    <SemiBoldText>Details</SemiBoldText>
                    <StatusRightIcon src={arrowrightblack} />
                  </FlexTextWrapper>
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
