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
  // vertical-align: middle !important;
  padding: 26px 8px !important;
  max-width: 200px;
`;
const TdMain = styled.div`
  display: flex;
`;
const FlexEnd = styled(TdMain)`
  justify-content: flex-end;
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

const FoundationAddressesTable = () => {
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
                    <LightText>Address</LightText>
                  </LightTextWrapper>
                  <SemiBoldText>TAUN6FwrnwwmaEqYcckffC7wYmbaS</SemiBoldText>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <FlexEnd>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>Balance</LightText>
                  </LightTextWrapper>
                  <SemiBoldText>55,546,128.275449 TRX</SemiBoldText>
                </BlockHeight>
              </FlexEnd>
            </TableCol>
          </TableRow>
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
                    <LightText>Address</LightText>
                  </LightTextWrapper>
                  <SemiBoldText>TAUN6FwrnwwmaEqYcckffC7wYmbaS</SemiBoldText>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <FlexEnd>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>Balance</LightText>
                  </LightTextWrapper>
                  <SemiBoldText>55,546,128.275449 TRX</SemiBoldText>
                </BlockHeight>
              </FlexEnd>
            </TableCol>
          </TableRow>
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
                    <LightText>Address</LightText>
                  </LightTextWrapper>
                  <SemiBoldText>TAUN6FwrnwwmaEqYcckffC7wYmbaS</SemiBoldText>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <FlexEnd>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>Balance</LightText>
                  </LightTextWrapper>
                  <SemiBoldText>55,546,128.275449 TRX</SemiBoldText>
                </BlockHeight>
              </FlexEnd>
            </TableCol>
          </TableRow>
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
                    <LightText>Address</LightText>
                  </LightTextWrapper>
                  <SemiBoldText>TAUN6FwrnwwmaEqYcckffC7wYmbaS</SemiBoldText>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <FlexEnd>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>Balance</LightText>
                  </LightTextWrapper>
                  <SemiBoldText>55,546,128.275449 TRX</SemiBoldText>
                </BlockHeight>
              </FlexEnd>
            </TableCol>
          </TableRow>
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
                    <LightText>Address</LightText>
                  </LightTextWrapper>
                  <SemiBoldText>TAUN6FwrnwwmaEqYcckffC7wYmbaS</SemiBoldText>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <FlexEnd>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>Balance</LightText>
                  </LightTextWrapper>
                  <SemiBoldText>55,546,128.275449 TRX</SemiBoldText>
                </BlockHeight>
              </FlexEnd>
            </TableCol>
          </TableRow>
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
                    <LightText>Address</LightText>
                  </LightTextWrapper>
                  <SemiBoldText>TAUN6FwrnwwmaEqYcckffC7wYmbaS</SemiBoldText>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <FlexEnd>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>Balance</LightText>
                  </LightTextWrapper>
                  <SemiBoldText>55,546,128.275449 TRX</SemiBoldText>
                </BlockHeight>
              </FlexEnd>
            </TableCol>
          </TableRow>
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
                    <LightText>Address</LightText>
                  </LightTextWrapper>
                  <SemiBoldText>TAUN6FwrnwwmaEqYcckffC7wYmbaS</SemiBoldText>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <FlexEnd>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>Balance</LightText>
                  </LightTextWrapper>
                  <SemiBoldText>55,546,128.275449 TRX</SemiBoldText>
                </BlockHeight>
              </FlexEnd>
            </TableCol>
          </TableRow>
        </TableBody>
      </Table>
    </Wrapper>
  );
};

export default withRouter(FoundationAddressesTable);
