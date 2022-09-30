import React from 'react';
import { exclamation, swap } from 'src/assets/fincoreassests';
import { IconText } from 'src/components';
import { Table, TableBody, TableRow, TableCell } from 'src/components';
import styled from 'styled-components';

const Wrapper = styled.div`
  overflow-y: auto;
`;
const TableCol = styled(TableCell)`
  vertical-align: middle !important;
  padding: 16px 12px !important;
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
const Text = styled.p`
  font-size: 14px;
  font-family: 'GilroySemiBold';
  color: #24234d;
`;

const Status = styled.span``;
const TextWrapper = styled.div``;
const StatusRightIcon = styled.img`
  margin-left: 3px;
  transform: rotate(90deg);
  width: 16px;
`;
const StatusLeftIcon = styled.img`
  width: 16px;
  margin-right: 3px;
`;
const AddressWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Accounts = () => {
  return (
    <Wrapper>
      <Table hover bordered>
        <TableBody>
          <TableRow>
            <TableCol>
              <TextWrapper>
                <Text>01.</Text>
              </TextWrapper>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightText>Accounts</LightText>
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
                    <LightText>Total TRX balance:</LightText>
                    <Status>
                      <StatusRightIcon src={swap} />
                    </Status>
                  </LightTextWrapper>
                  <BlockLink>15,333,953,247.42192 TRX </BlockLink>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <StatusLeftIcon src={exclamation} />
                    <LightText>Percentage</LightText>
                    <StatusRightIcon src={swap} />
                  </LightTextWrapper>
                  <BlockLink>15.33395325</BlockLink>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightText>Consume resources (Energy/Bandwidth):</LightText>
                  <BlockLink>1,391,887/241,284</BlockLink>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>TRX Frozen (Voting rights)</LightText>
                    <Status>
                      <StatusRightIcon src={swap} />
                    </Status>
                  </LightTextWrapper>
                  <BlockLink>6,442,761,345</BlockLink>
                </BlockHeight>
              </TdMain>
            </TableCol>

            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <StatusLeftIcon src={exclamation} />
                    <LightText>Percentage</LightText>
                    <StatusRightIcon src={swap} />
                  </LightTextWrapper>
                  <BlockLink>16 TRX</BlockLink>
                </BlockHeight>
              </TdMain>
            </TableCol>
          </TableRow>
          <TableRow>
            <TableCol>
              <TextWrapper>
                <Text>01.</Text>
              </TextWrapper>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightText>Accounts</LightText>
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
                    <LightText>Total TRX balance:</LightText>
                    <Status>
                      <StatusRightIcon src={swap} />
                    </Status>
                  </LightTextWrapper>
                  <BlockLink>15,333,953,247.42192 TRX </BlockLink>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <StatusLeftIcon src={exclamation} />
                    <LightText>Percentage</LightText>
                    <StatusRightIcon src={swap} />
                  </LightTextWrapper>
                  <BlockLink>15.33395325</BlockLink>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightText>Consume resources (Energy/Bandwidth):</LightText>
                  <BlockLink>1,391,887/241,284</BlockLink>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>TRX Frozen (Voting rights)</LightText>
                    <Status>
                      <StatusRightIcon src={swap} />
                    </Status>
                  </LightTextWrapper>
                  <BlockLink>6,442,761,345</BlockLink>
                </BlockHeight>
              </TdMain>
            </TableCol>

            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <StatusLeftIcon src={exclamation} />
                    <LightText>Percentage</LightText>
                    <StatusRightIcon src={swap} />
                  </LightTextWrapper>
                  <BlockLink>16 TRX</BlockLink>
                </BlockHeight>
              </TdMain>
            </TableCol>
          </TableRow>
          <TableRow>
            <TableCol>
              <TextWrapper>
                <Text>01.</Text>
              </TextWrapper>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightText>Accounts</LightText>
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
                    <LightText>Total TRX balance:</LightText>
                    <Status>
                      <StatusRightIcon src={swap} />
                    </Status>
                  </LightTextWrapper>
                  <BlockLink>15,333,953,247.42192 TRX </BlockLink>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <StatusLeftIcon src={exclamation} />
                    <LightText>Percentage</LightText>
                    <StatusRightIcon src={swap} />
                  </LightTextWrapper>
                  <BlockLink>15.33395325</BlockLink>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightText>Consume resources (Energy/Bandwidth):</LightText>
                  <BlockLink>1,391,887/241,284</BlockLink>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>TRX Frozen (Voting rights)</LightText>
                    <Status>
                      <StatusRightIcon src={swap} />
                    </Status>
                  </LightTextWrapper>
                  <BlockLink>6,442,761,345</BlockLink>
                </BlockHeight>
              </TdMain>
            </TableCol>

            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <StatusLeftIcon src={exclamation} />
                    <LightText>Percentage</LightText>
                    <StatusRightIcon src={swap} />
                  </LightTextWrapper>
                  <BlockLink>16 TRX</BlockLink>
                </BlockHeight>
              </TdMain>
            </TableCol>
          </TableRow>
          <TableRow>
            <TableCol>
              <TextWrapper>
                <Text>01.</Text>
              </TextWrapper>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightText>Accounts</LightText>
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
                    <LightText>Total TRX balance:</LightText>
                    <Status>
                      <StatusRightIcon src={swap} />
                    </Status>
                  </LightTextWrapper>
                  <BlockLink>15,333,953,247.42192 TRX </BlockLink>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <StatusLeftIcon src={exclamation} />
                    <LightText>Percentage</LightText>
                    <StatusRightIcon src={swap} />
                  </LightTextWrapper>
                  <BlockLink>15.33395325</BlockLink>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightText>Consume resources (Energy/Bandwidth):</LightText>
                  <BlockLink>1,391,887/241,284</BlockLink>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>TRX Frozen (Voting rights)</LightText>
                    <Status>
                      <StatusRightIcon src={swap} />
                    </Status>
                  </LightTextWrapper>
                  <BlockLink>6,442,761,345</BlockLink>
                </BlockHeight>
              </TdMain>
            </TableCol>

            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <StatusLeftIcon src={exclamation} />
                    <LightText>Percentage</LightText>
                    <StatusRightIcon src={swap} />
                  </LightTextWrapper>
                  <BlockLink>16 TRX</BlockLink>
                </BlockHeight>
              </TdMain>
            </TableCol>
          </TableRow>
          <TableRow>
            <TableCol>
              <TextWrapper>
                <Text>01.</Text>
              </TextWrapper>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightText>Accounts</LightText>
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
                    <LightText>Total TRX balance:</LightText>
                    <Status>
                      <StatusRightIcon src={swap} />
                    </Status>
                  </LightTextWrapper>
                  <BlockLink>15,333,953,247.42192 TRX </BlockLink>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <StatusLeftIcon src={exclamation} />
                    <LightText>Percentage</LightText>
                    <StatusRightIcon src={swap} />
                  </LightTextWrapper>
                  <BlockLink>15.33395325</BlockLink>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightText>Consume resources (Energy/Bandwidth):</LightText>
                  <BlockLink>1,391,887/241,284</BlockLink>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>TRX Frozen (Voting rights)</LightText>
                    <Status>
                      <StatusRightIcon src={swap} />
                    </Status>
                  </LightTextWrapper>
                  <BlockLink>6,442,761,345</BlockLink>
                </BlockHeight>
              </TdMain>
            </TableCol>

            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <StatusLeftIcon src={exclamation} />
                    <LightText>Percentage</LightText>
                    <StatusRightIcon src={swap} />
                  </LightTextWrapper>
                  <BlockLink>16 TRX</BlockLink>
                </BlockHeight>
              </TdMain>
            </TableCol>
          </TableRow>
          <TableRow>
            <TableCol>
              <TextWrapper>
                <Text>01.</Text>
              </TextWrapper>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightText>Accounts</LightText>
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
                    <LightText>Total TRX balance:</LightText>
                    <Status>
                      <StatusRightIcon src={swap} />
                    </Status>
                  </LightTextWrapper>
                  <BlockLink>15,333,953,247.42192 TRX </BlockLink>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <StatusLeftIcon src={exclamation} />
                    <LightText>Percentage</LightText>
                    <StatusRightIcon src={swap} />
                  </LightTextWrapper>
                  <BlockLink>15.33395325</BlockLink>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightText>Consume resources (Energy/Bandwidth):</LightText>
                  <BlockLink>1,391,887/241,284</BlockLink>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>TRX Frozen (Voting rights)</LightText>
                    <Status>
                      <StatusRightIcon src={swap} />
                    </Status>
                  </LightTextWrapper>
                  <BlockLink>6,442,761,345</BlockLink>
                </BlockHeight>
              </TdMain>
            </TableCol>

            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <StatusLeftIcon src={exclamation} />
                    <LightText>Percentage</LightText>
                    <StatusRightIcon src={swap} />
                  </LightTextWrapper>
                  <BlockLink>16 TRX</BlockLink>
                </BlockHeight>
              </TdMain>
            </TableCol>
          </TableRow>
          <TableRow>
            <TableCol>
              <TextWrapper>
                <Text>01.</Text>
              </TextWrapper>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightText>Accounts</LightText>
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
                    <LightText>Total TRX balance:</LightText>
                    <Status>
                      <StatusRightIcon src={swap} />
                    </Status>
                  </LightTextWrapper>
                  <BlockLink>15,333,953,247.42192 TRX </BlockLink>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <StatusLeftIcon src={exclamation} />
                    <LightText>Percentage</LightText>
                    <StatusRightIcon src={swap} />
                  </LightTextWrapper>
                  <BlockLink>15.33395325</BlockLink>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightText>Consume resources (Energy/Bandwidth):</LightText>
                  <BlockLink>1,391,887/241,284</BlockLink>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <LightText>TRX Frozen (Voting rights)</LightText>
                    <Status>
                      <StatusRightIcon src={swap} />
                    </Status>
                  </LightTextWrapper>
                  <BlockLink>6,442,761,345</BlockLink>
                </BlockHeight>
              </TdMain>
            </TableCol>
            <TableCol>
              <TdMain>
                <BlockHeight>
                  <LightTextWrapper>
                    <StatusLeftIcon src={exclamation} />
                    <LightText>Percentage</LightText>
                    <StatusRightIcon src={swap} />
                  </LightTextWrapper>
                  <BlockLink>16 TRX</BlockLink>
                </BlockHeight>
              </TdMain>
            </TableCol>
          </TableRow>
        </TableBody>
      </Table>
    </Wrapper>
  );
};

export default Accounts;
