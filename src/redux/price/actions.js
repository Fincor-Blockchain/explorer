import {
  GET_MARKET_PRICE_LOADING,
  GET_COIN_PRICE_LOADING
} from './actionTypes';

export const getMarketPriceLoading = () => ({
  type: GET_MARKET_PRICE_LOADING
});
export const getCoinPriceLoading = () => ({
  type: GET_COIN_PRICE_LOADING
});
