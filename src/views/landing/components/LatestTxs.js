import React from 'react';
import { Table, Button } from 'reactstrap';
import styled from 'styled-components';
import colors from 'src/vars/colors';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { IconText } from 'src/components/typography';
import { fnSymbol, swap } from 'src/assets/fincoreassests';
import { NoData, TableLoader } from 'src/components';
import { format } from 'timeago.js';
import { SYMBOL_REGEX } from 'src/vars/regex';
import { SCALE } from 'src/vars/scale';

const Wrapper = styled.div`
  position: relative;
  overflow-y: auto;
  height: 100%;
  padding: 1rem;
  height: 100%;
  min-height: 490px;
  background: ${colors.white};
  border-radius: 10px;
  box-shadow: ${colors.shaddow};
  @media (max-width: 991px) {
    margin-bottom: 1rem;
    min-height: 470px;
    margin-top: 1rem;
  }
`;

const TableCol = styled.td`
  font-family: GilroyRegular;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  padding-top: 20px !important;
  padding-bottom: 20px !important;
  letter-spacing: 0.36px;
  text-align: left;
  max-width: 150px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const LinkExp = styled(Link)`
  text-decoration: none;
  &:hover {
    color: #fff;
    text-decoration: none;
`;
const TableRow = styled.tr`
  display: table;
  width: 100%;
`;
const TableBody = styled.tbody`
  display: table;
  width: 100%;
  table-layout: fixed;
`;

const Header = styled.div`
  font-family: GilroyBold;
  display: flex;
  align-items: center;
  font-size: 15px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.5;
  letter-spacing: 0.54px;
  // margin-left: 10px;
  padding: 5px 0px;
`;

const Icon = styled.img`
  margin-right: 35px;
  width: 30px;
  height: 30px;
`;
const ButtonExp = styled.div`
margin-top: -1rem;
padding: 1rem;
display: flex;
justify-content: center;

  .btn-secondary:hover {
    color:  #d5da43;;
    background-color: rgba(36, 35, 77, 0.1) !important;
    border-color: rgba(36, 35, 77, 0.1);
  }
  .btn-secondary:focus,
  .btn-secondary.focus {
    color: #fff;
    background-color: rgba(36, 35, 77, 0.1) !important;
    border-color: rgba(36, 35, 77, 0.1) !important;
    box-shadow: none !important;
  }
  .btn-secondary:not(:disabled):not(.disabled):active,
  .btn-secondary:not(:disabled):not(.disabled).active,
  .show > .btn-secondary.dropdown-toggle {
    color: #fff;
    background-color: rgba(36, 35, 77, 0.1);
    border-color: rgba(36, 35, 77, 0.1);
  }
  .btn-secondary {
    color: #fff;
    background-color: rgba(36, 35, 77, 0.1);
    border-color: rgba(36, 35, 77, 0.1);
`;

const TableButton = styled(Button)`
  position: absolute;
  bottom: 20px;
  width: 90%;
  height: 35px;
  border-radius: 7px;
  box-shadow: ${colors.shaddow};
  background-color: rgba(36, 35, 77, 0.1);
  display: flex;
  border: none !important;
  justify-content: center;
  align-items: center;
  color: #24234d !important;
  font-family: GilroyBold;
  font-size: 14px;
  .btn-secondary:hover {
    color: #d5da43;
    background-color: rgba(36, 35, 77, 0.1) !important;
    border-color: rgba(36, 35, 77, 0.1) !important;
  }
  .btn-secondary:focus,
  .btn-secondary.focus {
    color: #24234d;
    background-color: rgba(36, 35, 77, 0.1) !important;
    border-color: rgba(36, 35, 77, 0.1) !important;
    box-shadow: none !important;
  }
  .btn-secondary:not(:disabled):not(.disabled):active,
  .btn-secondary:not(:disabled):not(.disabled).active,
  .show > .btn-secondary.dropdown-toggle {
    color: #24234d;
    background-color: rgba(36, 35, 77, 0.1);
    border-color: rgba(36, 35, 77, 0.1);
  }
`;
const TrxIcon = styled.img`
  width: 20px;
  margin-right: 8px;
  height: 20px;
`;
const TdMain = styled(IconText)`
  display: flex;
  align-items: center;
`;
const HashAdress = styled.div`
  display: flex;
  align-items: center;
`;
const BlockHeight = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 33px;
  justify-content: space-between;
  // align-items: flex-start;
`;
const TData = styled.p`
  font-family: GilroyMedium;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #24234d;
  // margin-bottom: 3px;
  opacity: 0.4;
  font-size: 11px;
`;
const BlockLink = styled(Link)`
  text-decoration: none !important;
  font-size: 14px;
  font-family: 'GilroySemiBold';
  color: #24234d;
`;

const TxsAmount = styled.div`
  font-size: 14px;
  font-family: 'GilroySemiBold';
  color: #24234d;
  text-transform: uppercase;
`;

const BlockHashLink = styled(BlockLink)`
  font-size: 11px;
  max-width: 80px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  :hover {
    color: #d5da43;
  }
`;

const LatestTxs = () => {
  const { latestTxs, latestTxsLoading } = useSelector((state) => state.txs);

  return (
    <Wrapper>
      <Header>
        <TrxIcon src={swap} alt="Trxs" /> Latest Transactions
      </Header>
      <Table hover>
        {latestTxsLoading ? (
          <TableLoader colSpan={4} height={360} width={510} />
        ) : latestTxs && latestTxs.length > 0 ? (
          <TableBody>
            {latestTxs &&
              latestTxs.map((item, index) => (
                <TableRow key={index}>
                  <TableCol icon>
                    <TdMain>
                      <Icon src={fnSymbol} alt="Trxs" />
                      <BlockHeight>
                        <TxsAmount>
                          {item.tx.value.msg[0].value.amount[0].amount / SCALE}{' '}
                          {item.tx.value.msg[0].value.amount[0].denom.replace(
                            SYMBOL_REGEX,
                            ''
                          )}
                        </TxsAmount>
                        <TData>{format(item.timestamp)}</TData>
                      </BlockHeight>
                    </TdMain>
                  </TableCol>
                  <TableCol>
                    <TdMain>
                      <BlockHeight>
                        <TData>Transfer Trx</TData>
                        <BlockHashLink to={`/txs/${item.txhash}`}>
                          {item.txhash}
                        </BlockHashLink>
                      </BlockHeight>
                    </TdMain>
                  </TableCol>
                  <TableCol>
                    <HashAdress>
                      <TData>From:</TData>
                      <BlockHashLink
                        to={`/account-details/${item.tx.value.msg[0].value.from_address}`}>
                        {item.tx.value.msg[0].value.from_address}
                      </BlockHashLink>
                    </HashAdress>
                    <HashAdress>
                      <TData>To:</TData>
                      <BlockHashLink
                        to={`/account-details/${item.tx.value.msg[0].value.to_address}`}>
                        {item.tx.value.msg[0].value.to_address}
                      </BlockHashLink>
                    </HashAdress>
                  </TableCol>
                </TableRow>
              ))}
          </TableBody>
        ) : (
          <NoData colSpan={4} height={340} width={510} imgHeight={55} />
        )}
      </Table>
      <LinkExp to="/txs">
        <ButtonExp>
          <TableButton> Show More Transaction</TableButton>
        </ButtonExp>
      </LinkExp>
    </Wrapper>
  );
};

export default LatestTxs;
