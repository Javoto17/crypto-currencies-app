import {
  put,
  call,
  takeEvery,
} from 'redux-saga/effects';
import {
  getCurrenciesSuccess,
  getCurrenciesError,
  getApi
} from '../actions/cryptoActions';
import * as t from '../constants/actionTypes';


export function* getCurrencies() {
  try {
    const response = yield call(getApi, 'v1/cryptocurrency/listings/latest');
    yield put(getCurrenciesSuccess(response));
  } catch (error) {
    yield put(getCurrenciesError(error));
  }
}

export function* watchGetCurrencies() {
  yield takeEvery(t.GET_CURRENCIES, getCurrencies);
}