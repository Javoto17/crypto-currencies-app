import * as t from '../constants/actionTypes';

const initialState = {
  currencies: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
  case t.GET_CURRENCIES:
    return {
      currencies: [],
    };
  case t.GET_CURRENCIES_SUCCESS:
    return {
      currencies: action.payload,
    };
  default:
    return state;
  }
};