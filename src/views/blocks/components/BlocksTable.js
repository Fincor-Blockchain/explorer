import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { bk, Confirmed } from 'src/assets/fincoreassests';
import { IconText, NoData, TableLoader } from 'src/components';
import { Table, TableBody, TableRow, TableCell } from 'src/components';
import styled from 'styled-components';
import { format } from 'timeago.js';

const Wrapper = styled.div`
  overflow-y: auto;
`;

const TableCol = styled(TableCell)`
  padding: 16px 8px;
  min-width: 150px;
`;

const TdMain = styled(IconText)`
  align-items: center !important;
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
  max-width: 120px;
  text-overflow: ellipsis;
  overflow: hidden;
  opacity: 0.4;
  font-size: 11px;
`;

const BlockLink = styled.div`
  text-decoration: none;
  font-size: 14px;
  font-family: 'GilroySemiBold';
  color: #24234d;
`;

const ProsperAddress = styled(BlockLink)`
  max-width: 140px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-decoration: none !important;
`;

const Blocks = styled(Link)`
  text-decoration: none !important;
  font-size: 14px;
  font-family: 'GilroySemiBold';
  color: #d5da43;
  :hover {
    color: #24234d;
  }
`;
const StatusWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StatusIcon = styled.img`
  margin-right: 4px;
`;

const BlocksTable = (props) => {
  const { blocks, allBlocksLoading } = props;

  return (
    <Wrapper>
      <Table hover bordered>
        {allBlocksLoading ? (
          <TableLoader colSpan={4} height={555} width={510} />
        ) : blocks && blocks.length > 0 ? (
          <TableBody>
            {blocks &&
              blocks.map((item, index) => (
                <TableRow key={index}>
                  <TableCol>
                    <TdMain>
                      <Icon src={bk} />
                      <BlockHeight>
                        <TData>{format(item.block.header.time)}</TData>
                        <Blocks to={`/blocks/${item.block.header.height} `}>
                          {item.block.header.height}
                        </Blocks>
                      </BlockHeight>
                    </TdMain>
                  </TableCol>
                  <TableCol>
                    <BlockHeight>
                      <TData>Txn count:</TData>
                      <BlockLink>{item.block.header.num_txs}</BlockLink>
                    </BlockHeight>
                  </TableCol>
                  <TableCol>
                    <BlockHeight>
                      <TData>Produced by:</TData>
                      <ProsperAddress>
                        {item.block.header.proposer_address}
                      </ProsperAddress>
                    </BlockHeight>
                  </TableCol>
                  {/* will be used later👇 */}
                  {/* <TableCol>
                    <BlockHeight>
                      <TData>Consume resources (Energy/Bandwidth):</TData>
                      <BlockLink>1,391,887/241,284</BlockLink>
                    </BlockHeight>
                  </TableCol> */}
                  {/* <TableCol>
                    <BlockHeight>
                      <TData>Block Size:</TData>
                      <BlockLink>36,576 Bytes</BlockLink>
                    </BlockHeight>
                  </TableCol> */}
                  <TableCol>
                    <BlockHeight>
                      <TData>Status:</TData>
                      <StatusWrapper>
                        <StatusIcon src={Confirmed} />
                        <BlockLink>Confirmed</BlockLink>
                      </StatusWrapper>
                    </BlockHeight>
                  </TableCol>
                  <TableCol>
                    <BlockHeight>
                      <TData>Block Reward</TData>
                      <BlockLink>0 FNR</BlockLink>
                    </BlockHeight>
                  </TableCol>
                </TableRow>
              ))}
          </TableBody>
        ) : (
          <NoData colSpan={4} height={555} width={510} imgHeight={55} />
        )}
      </Table>
    </Wrapper>
  );
};

export default withRouter(BlocksTable);
