import { GET_NODE_INFO, GET_NODE_INFO_LOADING } from './actionTypes';

const initialState = {
  nodeInfo: null,
  nodeInfoLoading: false
};

const info = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_NODE_INFO:
      return { ...state, nodeInfo: payload, nodeInfoLoading: false };
    case GET_NODE_INFO_LOADING:
      return { ...state, nodeInfoLoading: true };

    default:
      return state;
  }
};

export default info;
