import React from 'react';
import { withRouter } from 'react-router-dom';
import { exclamation, swap } from 'src/assets/fincoreassests';
import { IconText } from 'src/components';
import { Table, TableBody, TableRow, TableCell } from 'src/components';
import styled from 'styled-components';

const Wrapper = styled.div`
  overflow-y: auto;
`;
const TableCol = styled(TableCell)`
  vertical-align: middle !important;
  padding: 26px 8px !important;
  max-width: 250px;
`;
const TdMain = styled(IconText)`
  align-items: center;!important
`;
const BlockHeight = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 33px;
  justify-content: space-between;
`;
const LightTextWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const LightText = styled.p`
  font-family: GilroyMedium;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #24234d;
  max-width: 120px;
  text-overflow: ellipsis;
  overflow: hidden;
  opacity: 0.4;
  font-size: 11px;
`;

const BlockLink = styled.div`
  text-decoration: none;
  font-size: 11px;
  max-width: 70px !important;
  font-family: 'GilroyBold';
  color: #24234d;
`;
const AddressSpan = styled.p`
  color: #d5da43;
  font-size: 9px;
  background: rgba(213, 218, 67, 0.12);
  border-radius: 6.5px;
  padding: 1px 5px;
  text-align: center;
`;

const StatusRightIcon = styled.img`
  margin-left: 3px;
  transform: rotate(90deg);
  width: 16px;
`;

const AddressWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ContractsTable = () => {
  return (
    <Wrapper>
      <Table hover bordered>
        <TableBody>
          <TableRow>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightText>Address</LightText>
                  <AddressWrapper>
                    <BlockLink>TNUC9Qb1rRpS5CbWLmNgd8yv4</BlockLink>
                    <AddressSpan>WTRX Tocen</AddressSpan>
                  </AddressWrapper>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>Contract Name:</LightText>
                  </LightTextWrapper>
                  <BlockLink>Tether Token</BlockLink>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>Txn Count</LightText>
                    <StatusRightIcon src={swap} />
                  </LightTextWrapper>
                  <BlockLink>153,53,25</BlockLink>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightText>Creation Time (Local):</LightText>
                  <BlockLink>2021/04/16</BlockLink>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>Version</LightText>
                  </LightTextWrapper>
                  <BlockLink>Solidity 0.2.24</BlockLink>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>License</LightText>
                  </LightTextWrapper>
                  <BlockLink>MIT</BlockLink>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>Validation Time</LightText>
                  </LightTextWrapper>
                  <BlockLink>2019-12-04</BlockLink>
                </BlockHeight>
              </TdMain>
            </TableCol>

            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>Trx balance</LightText>
                    <StatusRightIcon src={swap} />
                  </LightTextWrapper>
                  <BlockLink>15,334,103,456.863865 TRX</BlockLink>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>Setting</LightText>
                  </LightTextWrapper>
                  <LightTextWrapper>
                    <StatusRightIcon src={exclamation} />
                    <StatusRightIcon src={exclamation} />
                  </LightTextWrapper>
                </BlockHeight>
              </TdMain>
            </TableCol>
          </TableRow>
          <TableRow>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightText>Address</LightText>
                  <AddressWrapper>
                    <BlockLink>TNUC9Qb1rRpS5CbWLmNgd8yv4</BlockLink>
                    <AddressSpan>WTRX Tocen</AddressSpan>
                  </AddressWrapper>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>Contract Name:</LightText>
                  </LightTextWrapper>
                  <BlockLink>Tether Token</BlockLink>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>Txn Count</LightText>
                    <StatusRightIcon src={swap} />
                  </LightTextWrapper>
                  <BlockLink>153,53,25</BlockLink>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightText>Creation Time (Local):</LightText>
                  <BlockLink>2021/04/16</BlockLink>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>Version</LightText>
                  </LightTextWrapper>
                  <BlockLink>Solidity 0.2.24</BlockLink>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>License</LightText>
                  </LightTextWrapper>
                  <BlockLink>MIT</BlockLink>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>Validation Time</LightText>
                  </LightTextWrapper>
                  <BlockLink>2019-12-04</BlockLink>
                </BlockHeight>
              </TdMain>
            </TableCol>

            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>Trx balance</LightText>
                    <StatusRightIcon src={swap} />
                  </LightTextWrapper>
                  <BlockLink>15,334,103,456.863865 TRX</BlockLink>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>Setting</LightText>
                  </LightTextWrapper>
                  <LightTextWrapper>
                    <StatusRightIcon src={exclamation} />
                    <StatusRightIcon src={exclamation} />
                  </LightTextWrapper>
                </BlockHeight>
              </TdMain>
            </TableCol>
          </TableRow>
          <TableRow>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightText>Address</LightText>
                  <AddressWrapper>
                    <BlockLink>TNUC9Qb1rRpS5CbWLmNgd8yv4</BlockLink>
                    <AddressSpan>WTRX Tocen</AddressSpan>
                  </AddressWrapper>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>Contract Name:</LightText>
                  </LightTextWrapper>
                  <BlockLink>Tether Token</BlockLink>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>Txn Count</LightText>
                    <StatusRightIcon src={swap} />
                  </LightTextWrapper>
                  <BlockLink>153,53,25</BlockLink>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightText>Creation Time (Local):</LightText>
                  <BlockLink>2021/04/16</BlockLink>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>Version</LightText>
                  </LightTextWrapper>
                  <BlockLink>Solidity 0.2.24</BlockLink>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>License</LightText>
                  </LightTextWrapper>
                  <BlockLink>MIT</BlockLink>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>Validation Time</LightText>
                  </LightTextWrapper>
                  <BlockLink>2019-12-04</BlockLink>
                </BlockHeight>
              </TdMain>
            </TableCol>

            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>Trx balance</LightText>
                    <StatusRightIcon src={swap} />
                  </LightTextWrapper>
                  <BlockLink>15,334,103,456.863865 TRX</BlockLink>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>Setting</LightText>
                  </LightTextWrapper>
                  <LightTextWrapper>
                    <StatusRightIcon src={exclamation} />
                    <StatusRightIcon src={exclamation} />
                  </LightTextWrapper>
                </BlockHeight>
              </TdMain>
            </TableCol>
          </TableRow>
          <TableRow>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightText>Address</LightText>
                  <AddressWrapper>
                    <BlockLink>TNUC9Qb1rRpS5CbWLmNgd8yv4</BlockLink>
                    <AddressSpan>WTRX Tocen</AddressSpan>
                  </AddressWrapper>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>Contract Name:</LightText>
                  </LightTextWrapper>
                  <BlockLink>Tether Token</BlockLink>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>Txn Count</LightText>
                    <StatusRightIcon src={swap} />
                  </LightTextWrapper>
                  <BlockLink>153,53,25</BlockLink>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightText>Creation Time (Local):</LightText>
                  <BlockLink>2021/04/16</BlockLink>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>Version</LightText>
                  </LightTextWrapper>
                  <BlockLink>Solidity 0.2.24</BlockLink>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>License</LightText>
                  </LightTextWrapper>
                  <BlockLink>MIT</BlockLink>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>Validation Time</LightText>
                  </LightTextWrapper>
                  <BlockLink>2019-12-04</BlockLink>
                </BlockHeight>
              </TdMain>
            </TableCol>

            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>Trx balance</LightText>
                    <StatusRightIcon src={swap} />
                  </LightTextWrapper>
                  <BlockLink>15,334,103,456.863865 TRX</BlockLink>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>Setting</LightText>
                  </LightTextWrapper>
                  <LightTextWrapper>
                    <StatusRightIcon src={exclamation} />
                    <StatusRightIcon src={exclamation} />
                  </LightTextWrapper>
                </BlockHeight>
              </TdMain>
            </TableCol>
          </TableRow>
          <TableRow>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightText>Address</LightText>
                  <AddressWrapper>
                    <BlockLink>TNUC9Qb1rRpS5CbWLmNgd8yv4</BlockLink>
                    <AddressSpan>WTRX Tocen</AddressSpan>
                  </AddressWrapper>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>Contract Name:</LightText>
                  </LightTextWrapper>
                  <BlockLink>Tether Token</BlockLink>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>Txn Count</LightText>
                    <StatusRightIcon src={swap} />
                  </LightTextWrapper>
                  <BlockLink>153,53,25</BlockLink>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightText>Creation Time (Local):</LightText>
                  <BlockLink>2021/04/16</BlockLink>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>Version</LightText>
                  </LightTextWrapper>
                  <BlockLink>Solidity 0.2.24</BlockLink>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>License</LightText>
                  </LightTextWrapper>
                  <BlockLink>MIT</BlockLink>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>Validation Time</LightText>
                  </LightTextWrapper>
                  <BlockLink>2019-12-04</BlockLink>
                </BlockHeight>
              </TdMain>
            </TableCol>

            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>Trx balance</LightText>
                    <StatusRightIcon src={swap} />
                  </LightTextWrapper>
                  <BlockLink>15,334,103,456.863865 TRX</BlockLink>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>Setting</LightText>
                  </LightTextWrapper>
                  <LightTextWrapper>
                    <StatusRightIcon src={exclamation} />
                    <StatusRightIcon src={exclamation} />
                  </LightTextWrapper>
                </BlockHeight>
              </TdMain>
            </TableCol>
          </TableRow>
          <TableRow>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightText>Address</LightText>
                  <AddressWrapper>
                    <BlockLink>TNUC9Qb1rRpS5CbWLmNgd8yv4</BlockLink>
                    <AddressSpan>WTRX Tocen</AddressSpan>
                  </AddressWrapper>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>Contract Name:</LightText>
                  </LightTextWrapper>
                  <BlockLink>Tether Token</BlockLink>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>Txn Count</LightText>
                    <StatusRightIcon src={swap} />
                  </LightTextWrapper>
                  <BlockLink>153,53,25</BlockLink>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightText>Creation Time (Local):</LightText>
                  <BlockLink>2021/04/16</BlockLink>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>Version</LightText>
                  </LightTextWrapper>
                  <BlockLink>Solidity 0.2.24</BlockLink>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>License</LightText>
                  </LightTextWrapper>
                  <BlockLink>MIT</BlockLink>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>Validation Time</LightText>
                  </LightTextWrapper>
                  <BlockLink>2019-12-04</BlockLink>
                </BlockHeight>
              </TdMain>
            </TableCol>

            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>Trx balance</LightText>
                    <StatusRightIcon src={swap} />
                  </LightTextWrapper>
                  <BlockLink>15,334,103,456.863865 TRX</BlockLink>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>Setting</LightText>
                  </LightTextWrapper>
                  <LightTextWrapper>
                    <StatusRightIcon src={exclamation} />
                    <StatusRightIcon src={exclamation} />
                  </LightTextWrapper>
                </BlockHeight>
              </TdMain>
            </TableCol>
          </TableRow>
          <TableRow>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightText>Address</LightText>
                  <AddressWrapper>
                    <BlockLink>TNUC9Qb1rRpS5CbWLmNgd8yv4</BlockLink>
                    <AddressSpan>WTRX Tocen</AddressSpan>
                  </AddressWrapper>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>Contract Name:</LightText>
                  </LightTextWrapper>
                  <BlockLink>Tether Token</BlockLink>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>Txn Count</LightText>
                    <StatusRightIcon src={swap} />
                  </LightTextWrapper>
                  <BlockLink>153,53,25</BlockLink>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightText>Creation Time (Local):</LightText>
                  <BlockLink>2021/04/16</BlockLink>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>Version</LightText>
                  </LightTextWrapper>
                  <BlockLink>Solidity 0.2.24</BlockLink>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>License</LightText>
                  </LightTextWrapper>
                  <BlockLink>MIT</BlockLink>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>Validation Time</LightText>
                  </LightTextWrapper>
                  <BlockLink>2019-12-04</BlockLink>
                </BlockHeight>
              </TdMain>
            </TableCol>

            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>Trx balance</LightText>
                    <StatusRightIcon src={swap} />
                  </LightTextWrapper>
                  <BlockLink>15,334,103,456.863865 TRX</BlockLink>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>Setting</LightText>
                  </LightTextWrapper>
                  <LightTextWrapper>
                    <StatusRightIcon src={exclamation} />
                    <StatusRightIcon src={exclamation} />
                  </LightTextWrapper>
                </BlockHeight>
              </TdMain>
            </TableCol>
          </TableRow>
          <TableRow>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightText>Address</LightText>
                  <AddressWrapper>
                    <BlockLink>TNUC9Qb1rRpS5CbWLmNgd8yv4</BlockLink>
                    <AddressSpan>WTRX Tocen</AddressSpan>
                  </AddressWrapper>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>Contract Name:</LightText>
                  </LightTextWrapper>
                  <BlockLink>Tether Token</BlockLink>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>Txn Count</LightText>
                    <StatusRightIcon src={swap} />
                  </LightTextWrapper>
                  <BlockLink>153,53,25</BlockLink>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightText>Creation Time (Local):</LightText>
                  <BlockLink>2021/04/16</BlockLink>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>Version</LightText>
                  </LightTextWrapper>
                  <BlockLink>Solidity 0.2.24</BlockLink>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>License</LightText>
                  </LightTextWrapper>
                  <BlockLink>MIT</BlockLink>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>Validation Time</LightText>
                  </LightTextWrapper>
                  <BlockLink>2019-12-04</BlockLink>
                </BlockHeight>
              </TdMain>
            </TableCol>

            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>Trx balance</LightText>
                    <StatusRightIcon src={swap} />
                  </LightTextWrapper>
                  <BlockLink>15,334,103,456.863865 TRX</BlockLink>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>Setting</LightText>
                  </LightTextWrapper>
                  <LightTextWrapper>
                    <StatusRightIcon src={exclamation} />
                    <StatusRightIcon src={exclamation} />
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

export default withRouter(ContractsTable);
