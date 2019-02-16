import {
  put,
  call,
  takeEvery,
} from 'redux-saga/effects';
import {
  getCurrenciesSuccess,
  getCurrenciesError,
  getCurrencyList
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

export function* watchGetCurrencies() {
  yield takeEvery(t.GET_CURRENCIES, getCurrencies);
}