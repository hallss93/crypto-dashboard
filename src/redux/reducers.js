import { SET_PRICES } from './actions';

const initialState = {
  prices: {
    BTC: 0,
    ETH: 0,
    SOL: 0,
    DOGE: 0,
  },
  initialPrices: {},
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRICES:
      return {
        ...state,
        prices: action.payload,
        initialPrices: state.initialPrices.BTC ? state.initialPrices : action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
