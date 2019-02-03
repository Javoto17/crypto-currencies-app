import * as t from '../constants/actionTypes';
import axios from 'axios';

import { URL, API_KEY } from '../utils/Api';

axios.defaults.baseURL = URL;
axios.defaults.headers.common['X-CMC_PRO_API_KEY'] = API_KEY;
// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

export const getCurrencies = (filter = '') => ({
  type: t.GET_CURRENCIES,
  payload: {
    filter,
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


export const getApi = async () => {
  // return axios.get(`${URL}${endpoint}`, {});
  return axios({
    url: `${URL}v1/cryptocurrency/listings/latest`,
    method: 'get',
    headers: {
      'X-CMC_PRO_API_KEY': API_KEY,
    },
  });
};
