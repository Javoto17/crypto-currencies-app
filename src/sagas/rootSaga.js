import { fork } from 'redux-saga/effects';

import {
  watchGetCurrencies,
} from './cryptoSaga';

export default function* rootSaga() {
  yield fork(watchGetCurrencies);
}
