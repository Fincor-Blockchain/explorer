import { GET_HEADER_BLOCKS, GET_HEADER_BLOCKS_LOADING } from './actionTypes';

const initialState = {
  blockHeaderData: null,
  blockHeaderDataLoading: false
};

const socket = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_HEADER_BLOCKS_LOADING:
      return { ...state, blockHeaderDataLoading: true };

    case GET_HEADER_BLOCKS:
      return {
        ...state,
        blockHeaderData: payload,
        blockHeaderDataLoading: false
      };
    default:
      return state;
  }
};

export default socket;
