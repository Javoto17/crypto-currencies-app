import * as t from '../constants/actionTypes';
import axios from 'axios';

import { URL, API_KEY, API_KEY_MIN, URL_MIN } from '../utils/Api';

// axios.defaults.baseURL = URL;
// axios.defaults.headers.common['X-CMC_PRO_API_KEY'] = API_KEY;
// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

export const getCurrencies = (currency = 'EUR', page = 1) => ({
  type: t.GET_CURRENCIES,
  payload: {
    currency,
    page,
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

export const fetchCurrency = (currencyGet, currencyConvert, days = 7) => ({
  type: t.FETCH_CURRENCY,
  payload: {
    currencyGet,
    currencyConvert,
    days,
  }
});

export const fetchCurrencySuccess = payload => ({
  type: t.FETCH_CURRENCY_SUCCESS,
  payload,
});

export const fetchCurrencyError = payload => ({
  type: t.FETCH_CURRENCY_ERROR,
  payload,
});


export const filterCurrencies = filter => ({
  type: t.FILTER_CURRENCIES,
  payload: {
    filter,
  }
});


export const getCurrencyList = async ({ currency, page }) => {
  return axios({
    url: `${URL}v1/cryptocurrency/listings/latest?convert=${currency}&start=${page}`,
    method: 'get',
    headers: {
      'X-CMC_PRO_API_KEY': API_KEY,
    },
  });
};

export const fetchCurrencyDay = async ({ currencyGet, currencyConvert, days }) => {
  return axios({
    url: `${URL_MIN}data/histoday?fsym=${currencyGet}&tsym=${currencyConvert}&limit=${days}`,
    method: 'get',
    headers: {
      'authorization': API_KEY_MIN,
    },
  });
};

export const getInfo = async ({ currencyGet }) => {
  return axios({
    url: `${URL}v1/cryptocurrency/info?symbol=${currencyGet}`,
    method: 'get',
    headers: {
      'X-CMC_PRO_API_KEY': API_KEY,
    },
  });
};
