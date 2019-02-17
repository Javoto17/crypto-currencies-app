import * as t from '../constants/actionTypes';

const initialState = {
  currencies: null,
  filteredCurrencies: null,
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
      filteredCurrencies: action.payload,
    };
  case t.FILTER_CURRENCIES: {
    const { filter } = action.payload;

    return {
      ...state,
      filteredCurrencies: !!filter && !!state.currencies ? state.currencies.filter(el =>
        el.symbol.includes(filter.toUpperCase()) || el.slug.includes(filter.toLowerCase())
      ) : state.currencies,
    };
  }
  default:
    return state;
  }
};
