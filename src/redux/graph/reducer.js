import { GET_TXS_GRAPH_DATA, GET_TXS_GRAPH_DATA_LOADING } from './actionTypes';

const initialState = {
  coinData: [],
  coinDataLoading: false,
  totalTxsData: {
    graphData: [],
    totalTrx: ''
  },
  totalTxsDataLoading: false,
  cmcData: null,
  cmcDataLoading: false
};

const graph = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_TXS_GRAPH_DATA:
      return {
        ...state,
        totalTxsData: payload,
        totalTxsDataLoading: false
      };

    case GET_TXS_GRAPH_DATA_LOADING:
      return { ...state, totalTxsDataLoading: true };
    default:
      return state;
  }
};

export default graph;
