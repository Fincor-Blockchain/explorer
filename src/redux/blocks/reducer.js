import {
  GET_BLOCKS_INFO,
  GET_BLOCKS_INFO_LOADING,
  GET_ALL_BLOCKS,
  GET_ALL_BLOCKS_LOADING,
  GET_BLOCKS_BY_HEIGHT,
  GET_BLOCKS_BY_HEIGHT_LOADING,
  GET_LATEST_BLOCKS,
  GET_LATEST_BLOCKS_LOADING,
  GET_TRANSACTIONS_BY_BLOCK_HEIGHT,
  GET_TRANSACTIONS_BY_BLOCK_HEIGHT_LOADING
} from './actionTypes';

const initialState = {
  latestBlocks: null,
  latestBlocksLoading: false,
  allBlocks: null,
  allBlocksLoading: false,
  block: null,
  blockLoading: false,
  blockTxs: null,
  blockTxsLoading: false,
  blocksInfo: {
    totalBlocks: '',
    yesterdayCount: ''
  },
  blocksInfoLoading: false
};

const blocks = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_BLOCKS_INFO:
      return { ...state, blocksInfo: payload, blocksInfoLoading: false };

    case GET_BLOCKS_INFO_LOADING:
      return { ...state, blocksInfoLoading: true };

    case GET_LATEST_BLOCKS:
      return { ...state, latestBlocks: payload, latestBlocksLoading: false };
    case GET_LATEST_BLOCKS_LOADING:
      return { ...state, latestBlocksLoading: true };
    case GET_ALL_BLOCKS:
      return { ...state, allBlocks: payload, allBlocksLoading: false };

    case GET_ALL_BLOCKS_LOADING:
      return { ...state, allBlocksLoading: true };

    case GET_BLOCKS_BY_HEIGHT:
      return { ...state, block: payload, blockLoading: false };
    case GET_BLOCKS_BY_HEIGHT_LOADING:
      return { ...state, blockLoading: true };

    case GET_TRANSACTIONS_BY_BLOCK_HEIGHT:
      return { ...state, blockTxs: payload, blockTxsLoading: false };

    case GET_TRANSACTIONS_BY_BLOCK_HEIGHT_LOADING:
      return { ...state, blockTxsLoading: true };
    default:
      return state;
  }
};

export default blocks;
