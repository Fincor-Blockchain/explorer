import axios from 'axios';
import {
  GET_TXS_GRAPH_DATA,
  GET_TXS_GRAPH_DATA_LOADING,
  GET_COIN_MARKET_CAP_DATA,
  GET_COIN_MARKET_CAP_DATA_LOADING
} from './actionTypes';

export const getGraphDataLoading = () => ({
  type: GET_TXS_GRAPH_DATA_LOADING
});

export const getCoinMarketCapDataLoading = () => ({
  type: GET_COIN_MARKET_CAP_DATA_LOADING
});

export const getGraphData = (filter) => (dispatch) => {
  dispatch(getGraphDataLoading());
  axios
    .get(
      `${process.env.REACT_APP_EXPLORER_API}/api/graph/trxGraph`
      // , {
      //   params: filter
      // }
    )
    .then((res) => {
      dispatch({
        type: GET_TXS_GRAPH_DATA,
        payload: res.data.data
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_TXS_GRAPH_DATA,
        payload: {
          graphData: [],
          totalTrx: ''
        }
      });
    });
};

export const getCoinMarketCapData = (filter) => (dispatch) => {
  dispatch(getCoinMarketCapDataLoading());
  axios
    .get(
      `${process.env.REACT_APP_EXPLORER_API}/api/cmcDetails`
      // , {
      //   params: filter
      // }
    )
    .then((res) => {
      dispatch({
        type: GET_COIN_MARKET_CAP_DATA,
        payload: res.data.data
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_COIN_MARKET_CAP_DATA,
        payload: []
      });
    });
};
