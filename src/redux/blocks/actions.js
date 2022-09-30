import axios from 'axios';
import {
  GET_BLOCKS_INFO,
  GET_BLOCKS_INFO_LOADING,
  GET_ALL_BLOCKS,
  GET_ALL_BLOCKS_LOADING,
  GET_BLOCKS_BY_HEIGHT,
  GET_BLOCKS_BY_HEIGHT_LOADING,
  GET_LATEST_BLOCKS_LOADING,
  GET_TRANSACTIONS_BY_BLOCK_HEIGHT,
  GET_TRANSACTIONS_BY_BLOCK_HEIGHT_LOADING
} from './actionTypes';

export const getBlocksInfoLoading = () => ({
  type: GET_BLOCKS_INFO_LOADING
});

export const getBlocksInfo = () => (dispatch) => {
  dispatch(getBlocksInfoLoading());

  axios
    .get(`${process.env.REACT_APP_EXPLORER_API}/api/blocksHeader`)
    .then((res) => {
      dispatch({
        type: GET_BLOCKS_INFO,
        payload: res.data.data
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_BLOCKS_INFO,
        payload: null
      });
    });
};

export const getAllBlocks = (filter) => (dispatch) => {
  dispatch(getAllBlocksLoading());

  axios
    .get(`${process.env.REACT_APP_EXPLORER_API}/api/blocks`, {
      params: filter
    })
    .then((res) => {
      dispatch({
        type: GET_ALL_BLOCKS,
        payload: res.data
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_ALL_BLOCKS,
        payload: null
      });
    });
};

export const getAllBlocksLoading = () => ({
  type: GET_ALL_BLOCKS_LOADING
});

export const getBlocksByHeight = (height) => (dispatch) => {
  dispatch(getBlocksByHeightLoading());
  axios
    .get(`${process.env.REACT_APP_EXPLORER_API}/api/blocks/${height}`)
    .then((res) => {
      dispatch({
        type: GET_BLOCKS_BY_HEIGHT,
        payload: res.data
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_BLOCKS_BY_HEIGHT,
        payload: null
      });
    });
};

export const getBlocksByHeightLoading = () => ({
  type: GET_BLOCKS_BY_HEIGHT_LOADING
});

export const getLatestBlocksLoading = () => ({
  type: GET_LATEST_BLOCKS_LOADING
});

export const getTransectionByBlockHeightLoading = () => ({
  type: GET_TRANSACTIONS_BY_BLOCK_HEIGHT_LOADING
});

export const getAllTransectionsByBlockHeight = (filter) => (dispatch) => {
  dispatch(getTransectionByBlockHeightLoading());
  axios
    .get(`${process.env.REACT_APP_EXPLORER_API}/api/transaction/txs`, {
      params: filter
    })
    .then((res) => {
      dispatch({
        type: GET_TRANSACTIONS_BY_BLOCK_HEIGHT,
        payload: res.data
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_TRANSACTIONS_BY_BLOCK_HEIGHT,
        payload: null
      });
    });
};
