import React, { useEffect, useState } from 'react';
import { PageContainer } from 'src/components';
import { BlockTxsTable } from './components';
import styled from 'styled-components';
import { latestblock } from 'src/assets/fincoreassests';
import OverView from './components/Overview';
import { useParams } from 'react-router-dom';
import {
  getAllTransectionsByBlockHeight,
  getBlocksByHeight
} from 'src/redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import history from '../../utils/history';
import queryString from 'query-string';

import { Pagination } from 'src/components';
import { Container } from 'reactstrap';

const Footer = styled.div`
  display: flex;
  justify-content: row;
  justify-content: flex-end;
  padding: 16px 12px;
`;

const Blocks = (props) => {
  const params = useParams();
  const dispatch = useDispatch();
  const { height } = params;
  const { location } = props;

  const { page = 1, limit = 10 } = queryString.parse(location.search);

  const [state, setState] = useState({ limit: limit, currentPage: page - 1 });

  const { blockTxs, blockTxsLoading, block, blockLoading } = useSelector(
    (state) => state.blocks
  );

  let txs = blockTxs && blockTxs.data.txs;

  const pageHandler = (e, index) => {
    e.preventDefault();

    history.push(`/blocks/${height}?page=${index}`);

    setState({
      ...state,
      currentPage: index - 1
    });
  };
  const changeLimit = (limit) => {
    let totalCount = (state.currentPage + 1) * state.limit;
    if (totalCount > blockTxs.data.total_count) {
      totalCount = blockTxs.data.total_count;
    }
    let currentPage = totalCount / limit;
    currentPage = Math.ceil(currentPage);
    if (currentPage) {
      setState({ ...state, limit, currentPage: currentPage - 1 });
    }
    history.push(`/blocks?page=${currentPage}&&limit=${limit}`);
  };

  useEffect(() => {
    const { page = 1, limit = 10 } = queryString.parse(location.search);
    const filter = {
      blockHeight: height,
      page: page - 1,
      limit: limit
    };

    dispatch(getBlocksByHeight(height));
    dispatch(getAllTransectionsByBlockHeight(filter));
    //'239'
  }, [height, page, limit, location, dispatch]);

  return (
    <Container>
      <OverView txs={txs} block={block} blockLoading={blockLoading} />
      <PageContainer heading="Latest Transactions" src={latestblock}>
        <BlockTxsTable txs={txs} blockTxsLoading={blockTxsLoading} />
      </PageContainer>
      {txs && txs?.length >= 10 ? (
        <Footer>
          <Pagination
            pageHandler={pageHandler}
            changeLimit={changeLimit}
            count={blockTxs && blockTxs.data.total_count}
            limit={limit}
            currentPage={page - 1}
          />
        </Footer>
      ) : (
        ''
      )}
    </Container>
  );
};

export default Blocks;
