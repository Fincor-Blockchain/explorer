import React from 'react';
import { Table, Button } from 'reactstrap';
import styled from 'styled-components';
import colors from 'src/vars/colors';
import { Link } from 'react-router-dom';
import { latestblock, bk } from 'src/assets/fincoreassests';
import { IconText, NoData, TableLoader } from 'src/components';
import { useSelector } from 'react-redux';
import { format } from 'timeago.js';

const Wrapper = styled.div`
  position: relative;
  overflow-y: auto;
  padding: 1rem;
  height: 100%;
  min-height: 490px;
  background: ${colors.white};
  border-radius: 10px;
  box-shadow: ${colors.shaddow};
  @media (max-width: 991px) {
    margin-bottom: 1rem;
    min-height: 470px;
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
  max-width: 140px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  min-width: 100px;
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
  display: flex;
  align-items: center;
`;
const TableHeading = styled.h1`
  font-family: GilroyBold;
  font-size: 15px;
  line-height: 2.5;
  letter-spacing: 0.54px;
  // margin-left: 4px;
  padding: 5px 0px;
`;
const BlockIcon = styled.img`
  width: 20px;
  margin-right: 8px;
  height: 20px;
`;
const TdMain = styled(IconText)`
  display: flex;
  align-items: center;
  max-width: 150px;
`;
const Icon = styled.img`
  margin-right: 35px;
  width: 30px;
  height: 30px;
`;
const BlockHeight = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 33px;
  justify-content: space-between;
`;
const TData = styled.p`
  font-family: GilroyMedium;
  // font-weight: bold;
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
const BlockLink = styled.div`
  font-size: 14px;
  font-family: 'GilroySemiBold';
  color: #24234d;
  width: 100%;
  max-width: 100px;
  text-decoration: none !important;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const Blocks = styled(Link)`
  font-size: 14px;
  font-family: 'GilroySemiBold';
  width: 100%;
  max-width: 100px;
  text-decoration: none !important;
  color: #d5da43;
  :hover {
    color: #24234d;
  }
`;

const ProducedBy = styled.div`
  width: 100%;
  align-items: flex-end;
  display: flex;
  flex-direction: column;
`;
const LinkExp = styled(Link)`
  text-decoration: none;
  &:hover {
    color: #d5da43;
    text-decoration: none;
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

const LatestBlocks = () => {
  const { latestBlocks, latestBlocksLoading } = useSelector(
    (state) => state.blocks
  );

  return (
    <Wrapper>
      <Header>
        <BlockIcon src={latestblock} alt="block" />
        <TableHeading>Latest Blocks</TableHeading>
      </Header>
      <Table hover>
        {latestBlocksLoading ? (
          <TableLoader colSpan={4} height={360} width={510} />
        ) : latestBlocks && latestBlocks.length > 0 ? (
          <TableBody>
            {latestBlocks &&
              !latestBlocksLoading &&
              latestBlocks.map((item, i) => (
                <TableRow key={i}>
                  <TableCol>
                    <TdMain>
                      <Icon src={bk} />
                      <BlockHeight>
                        <TData>{format(item.block.header.time)}</TData>
                        <Blocks to={`/blocks/${item.block_meta.header.height}`}>
                          {item.block_meta.header.height}
                        </Blocks>
                      </BlockHeight>
                    </TdMain>
                  </TableCol>
                  <TableCol>
                    <TdMain>
                      <BlockHeight>
                        <TData>Includes:</TData>
                        <BlockLink to="#">
                          {item.block_meta.header.num_txs} FNR
                        </BlockLink>
                      </BlockHeight>
                    </TdMain>
                  </TableCol>
                  <TableCol>
                    <TdMain>
                      <BlockHeight>
                        <TData>Block Reward</TData>
                        <BlockLink to="#">0 FNR</BlockLink>
                      </BlockHeight>
                    </TdMain>
                  </TableCol>
                  <TableCol>
                    {' '}
                    <TdMain>
                      <ProducedBy>
                        <TData>Produced By:</TData>
                        <BlockLink to="#">
                          {item.block_meta.header.proposer_address}
                        </BlockLink>
                      </ProducedBy>
                    </TdMain>
                  </TableCol>
                </TableRow>
              ))}
          </TableBody>
        ) : (
          <NoData colSpan={4} height={290} width={510} />
        )}
      </Table>
      <LinkExp to="/blocks">
        <ButtonExp>
          <TableButton> View All Blocks</TableButton>
        </ButtonExp>
      </LinkExp>
    </Wrapper>
  );
};
export default LatestBlocks;
