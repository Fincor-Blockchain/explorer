import React from 'react';
import { withRouter } from 'react-router-dom';
import { arrowrightblack } from 'src/assets/fincoreassests';
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

const StatusRightIcon = styled.img`
  margin-left: 3px;

  width: 12px;
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
