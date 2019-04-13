import {
  put,
  call,
  takeEvery,
  all,
} from 'redux-saga/effects';
import {
  getCurrenciesSuccess,
  getCurrenciesError,
  getCurrencyList,
  fetchCurrencyDay,
  fetchCurrencySuccess,
  fetchCurrencyError,
  getInfo,
} from '../actions/cryptoActions';

import * as t from '../constants/actionTypes';


export function* getCurrencies({ payload }) {
  try {
    const response = yield call(getCurrencyList, payload);
    yield put(getCurrenciesSuccess(response.data.data));
  } catch (error) {
    yield put(getCurrenciesError(error));
  }
}

export function* fetchDataCurrency({ payload }) {
  try {
    const [metadata, historial] = yield all([
      call(getInfo, payload),
      call(fetchCurrencyDay, payload),
    ]);
    yield put(fetchCurrencySuccess({
      metadata: metadata.data.data[payload.currencyGet.toUpperCase()],
      historial: historial.data.Data,
    }));
  } catch (error) {
    yield put(fetchCurrencyError(error));
  }
}

export function* watchGetCurrencies() {
  yield takeEvery(t.GET_CURRENCIES, getCurrencies);
}

export function* watchFetchCurrency() {
  yield takeEvery(t.FETCH_CURRENCY, fetchDataCurrency);
}