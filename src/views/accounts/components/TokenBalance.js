import React from 'react';
import { exclamation, swap } from 'src/assets/fincoreassests';
import { IconText, NoData, TableLoader } from 'src/components';
import { Table, TableRow, TableCell } from 'src/components';
import { SYMBOL_REGEX } from 'src/vars/regex';
import { SCALE } from 'src/vars/scale';
import styled from 'styled-components';

const Wrapper = styled.div`
  overflow-y: auto;
`;
const TableCol = styled(TableCell)`
  vertical-align: middle !important;
  padding: 16px 12px !important;
  max-width: 250px;
  min-width: 150px;
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
  ${({ uppercase }) => uppercase && `text-transform: uppercase `}
`;

const Status = styled.span``;

const StatusRightIcon = styled.img`
  margin-left: 3px;
  transform: rotate(90deg);
  width: 16px;
`;
const StatusLeftIcon = styled.img`
  width: 16px;
  margin-right: 3px;
`;

const TableBody = styled.tbody`
  height: 100%;
  display: table;
  width: 100%;
  table-layout: fixed;
`;

const TokenBalance = (props) => {
  const { token, detailsLoading } = props;
  return (
    <Wrapper>
      <Table hover bordered>
        {detailsLoading ? (
          <TableLoader colSpan={4} height={360} width={510} />
        ) : token && token.length > 0 ? (
          <TableBody>
            {token &&
              token.map((item, index) => (
                <TableRow key={index}>
                  <TableCol>
                    <TdMain>
                      <BlockHeight>
                        <LightText>Token</LightText>
                        <BlockLink uppercase>
                          {item.denom.replace(
                            SYMBOL_REGEX,

                            ''
                          )}
                        </BlockLink>
                      </BlockHeight>
                    </TdMain>
                  </TableCol>
                  <TableCol>
                    <TdMain>
                      <BlockHeight>
                        <LightTextWrapper>
                          <LightText>Token Type:</LightText>
                          <Status>
                            <StatusRightIcon src={swap} />
                          </Status>
                        </LightTextWrapper>
                        <BlockLink>- </BlockLink>
                      </BlockHeight>
                    </TdMain>
                  </TableCol>
                  <TableCol>
                    <TdMain>
                      <BlockHeight>
                        <LightTextWrapper>
                          <StatusLeftIcon src={exclamation} />
                          <LightText>ID（Contract）</LightText>
                          <StatusRightIcon src={swap} />
                        </LightTextWrapper>
                        <BlockLink>-</BlockLink>
                      </BlockHeight>
                    </TdMain>
                  </TableCol>
                  <TableCol>
                    <TdMain>
                      <BlockHeight>
                        <LightText>Amount</LightText>
                        <BlockLink>{item.amount / SCALE}</BlockLink>
                      </BlockHeight>
                    </TdMain>
                  </TableCol>
                  <TableCol>
                    <TdMain>
                      <BlockHeight>
                        <LightTextWrapper>
                          <LightText>Price (Trx)</LightText>
                          <Status>
                            <StatusRightIcon src={swap} />
                          </Status>
                        </LightTextWrapper>
                        <BlockLink>-</BlockLink>
                      </BlockHeight>
                    </TdMain>
                  </TableCol>

                  <TableCol>
                    <TdMain>
                      <BlockHeight>
                        <LightTextWrapper>
                          <StatusLeftIcon src={exclamation} />
                          <LightText>Volumn</LightText>
                          <StatusRightIcon src={swap} />
                        </LightTextWrapper>
                        <BlockLink>-</BlockLink>
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

export default TokenBalance;
