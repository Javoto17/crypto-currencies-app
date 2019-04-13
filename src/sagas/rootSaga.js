import { fork } from 'redux-saga/effects';

import {
  watchGetCurrencies,
  watchFetchCurrency,
} from './cryptoSaga';

export default function* rootSaga() {
  yield fork(watchGetCurrencies);
  yield fork(watchFetchCurrency);
}
