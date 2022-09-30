import React from 'react';
import { Link } from 'react-router-dom';
import { trx, Confirmed, Unconfirmed } from 'src/assets/fincoreassests';
import { IconText, NoData, TableLoader } from 'src/components';
import { Table, TableRow, TableCell } from 'src/components';
import styled from 'styled-components';
import { SYMBOL_REGEX } from 'src/vars/regex';
import { format } from 'timeago.js';
import { SCALE } from 'src/vars/scale';

const Wrapper = styled.div`
  overflow-y: auto;
`;

const TableBody = styled.tbody`
  height: 100%;
  display: table;
  width: 100%;
  table-layout: fixed;
`;

const TableCol = styled(TableCell)`
  vertical-align: middle !important;
  padding: 16px 12px !important;
  max-width: 250px;
`;

const TableAmountCol = styled(TableCell)`
  vertical-align: middle !important;
  padding: 16px 12px !important;
  width: 160px;
  min-width: 100px;
`;

const TdMain = styled(IconText)`
  align-items: center !important;
`;
const Icon = styled.img`
  // margin-right: 35px;
  width: 30px;
  height: 30px;
`;
const BlockHeight = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 30px;
  justify-content: space-between;
`;
const TextLight = styled.p`
  font-family: GilroyMedium;
  // font-weight: bold;
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
const HashAdress = styled.div`
  display: flex;
  align-items: center;
  .margin-right {
    margin-right: 3px;
  }
`;
const BoldText = styled.p`
  font-size: 14px;
  font-family: 'GilroyBold';
  color: #24234d;
  text-transform: uppercase;
`;
const SemiBoldText = styled(BoldText)`
  font-size: 11px;
  max-width: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const TextLink = styled(Link)`
  color: #24234d;
  font-size: 11px;
  font-family: 'GilroyBold';
  max-width: 120px !important;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-decoration: none !important;
  :hover {
    color: #d5da43;
  }
`;
const SuccessText = styled(SemiBoldText)`
  color: #6ac367;
`;
const FailedText = styled(SemiBoldText)`
  color: #ea0001;
`;

const StatusWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const StatusIcon = styled.img`
  margin-right: 4px;
`;

const Symbol = styled.span`
  text-transform: uppercase;
`;

const InternalTxs = (props) => {
  const { internalTxs, loading } = props;

  return (
    <Wrapper>
      <Table hover bordered>
        {loading ? (
          <TableLoader colSpan={4} height={360} width={510} />
        ) : internalTxs && internalTxs.length > 0 ? (
          <TableBody>
            {internalTxs &&
              internalTxs.map((item, index) => (
                <TableRow key={index}>
                  <TableCol>
                    <TdMain>
                      <Icon src={trx} />
                    </TdMain>
                  </TableCol>
                  <TableAmountCol>
                    <TdMain>
                      <BlockHeight>
                        <BoldText>
                          {item.tx.value.msg[0].value.amount[0].amount / SCALE}{' '}
                          {item.tx.value.msg[0].value.amount[0].denom.replace(
                            SYMBOL_REGEX,

                            ''
                          )}
                        </BoldText>
                        <TextLight>{format(item.timestamp)}</TextLight>
                      </BlockHeight>
                    </TdMain>
                  </TableAmountCol>
                  <TableCol>
                    <TdMain>
                      <BlockHeight>
                        <TextLight>
                          Transfer{' '}
                          <Symbol>
                            {item.tx.value.msg[0].value.amount[0].denom.replace(
                              SYMBOL_REGEX,

                              ''
                            )}
                          </Symbol>
                        </TextLight>
                        <TextLink to={`/txs/${item.txhash}`}>
                          {item.txhash}
                        </TextLink>
                      </BlockHeight>
                    </TdMain>
                  </TableCol>
                  <TableCol>
                    <TdMain>
                      <BlockHeight>
                        <TextLight>Block</TextLight>
                        <TextLink to={`/blocks/${item.height}`}>
                          {item.height}
                        </TextLink>
                      </BlockHeight>
                    </TdMain>
                  </TableCol>
                  <TableCol>
                    <TdMain>
                      <BlockHeight>
                        <HashAdress>
                          <TextLight className="margin-right">From:</TextLight>
                          <TextLink
                            to={`/account-details/${item.tx.value.msg[0].value.from_address}`}>
                            {item.tx.value.msg[0].value.from_address}
                          </TextLink>
                        </HashAdress>
                        <HashAdress>
                          <TextLight className="margin-right">To:</TextLight>
                          <TextLink
                            to={`/account-details/${item.tx.value.msg[0].value.to_address}`}>
                            {item.tx.value.msg[0].value.to_address}
                          </TextLink>
                        </HashAdress>
                      </BlockHeight>
                    </TdMain>
                  </TableCol>
                  <TableCol>
                    <TdMain>
                      <BlockHeight>
                        <TextLight>Status:</TextLight>
                        <StatusWrapper>
                          {item.logs && item.logs ? (
                            <>
                              <StatusIcon src={Confirmed} />
                              <BoldText>Confirmed</BoldText>
                            </>
                          ) : (
                            <>
                              <StatusIcon src={Unconfirmed} />
                              <BoldText>Unconfirmed</BoldText>
                            </>
                          )}
                        </StatusWrapper>
                      </BlockHeight>
                    </TdMain>
                  </TableCol>
                  <TableCol>
                    <TdMain>
                      <BlockHeight>
                        <TextLight>Result</TextLight>
                        {item.logs && item.logs ? (
                          <SuccessText>Success</SuccessText>
                        ) : (
                          <FailedText>Failed</FailedText>
                        )}
                      </BlockHeight>
                    </TdMain>
                  </TableCol>
                </TableRow>
              ))}
          </TableBody>
        ) : (
          <NoData colSpan={4} height={100} width={510} imgHeight={40} />
        )}
      </Table>
    </Wrapper>
  );
};

export default InternalTxs;
