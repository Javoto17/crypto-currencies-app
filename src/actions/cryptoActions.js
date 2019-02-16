import * as t from '../constants/actionTypes';
import axios from 'axios';

import { URL, API_KEY } from '../utils/Api';

axios.defaults.baseURL = URL;
axios.defaults.headers.common['X-CMC_PRO_API_KEY'] = API_KEY;
// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

export const getCurrencies = (currency = 'USD') => ({
  type: t.GET_CURRENCIES,
  payload: {
    currency,
  }
});

export const getCurrenciesSuccess = payload => ({
  type: t.GET_CURRENCIES_SUCCESS,
  payload,
});

export const getCurrenciesError = payload => ({
  type: t.GET_CURRENCIES_ERROR,
  payload,
});


export const filterCurrencies = filter => ({
  type: t.FILTER_CURRENCIES,
  payload: {
    filter,
  }
});


export const getCurrencyList = async ({ currency }) => {
  return axios({
    url: `${URL}v1/cryptocurrency/listings/latest?convert=${currency}`,
    method: 'get',
    headers: {
      'X-CMC_PRO_API_KEY': API_KEY,
    },
  });
};
