import { takeEvery, select, call, put } from "redux-saga/effects";

import {
  GET_INITIAL_CONVERSION,
  CHANGE_BASE_CURRENCY,
  SWAP_CURRENCY,
  CONVERSION_RESULT,
  CONVERSION_ERROR
} from "../actions/currencies";

const getLatestRate = currency =>
  fetch(`https://fixer.handlebarlabs.com/latest?base=${currency}`);

const fetchLatestConversionRates = function*(action) {
  try {
    let currency = action.currency;
    if (currency === undefined) {
      currency = yield select(state => state.currencies.baseCurrency);
    }

    const responce = yield call(getLatestRate, currency);
    const result = yield responce.json();
    if (result.error) {
      yield put({ type: CONVERSION_ERROR, error: result.error });
    } else {
      yield put({ type: CONVERSION_RESULT, result });
    }
  } catch (err) {
    yield put({ type: CONVERSION_ERROR, error: err.message });
  }
};

const rootSaga = function*() {
  yield takeEvery(GET_INITIAL_CONVERSION, fetchLatestConversionRates);
  yield takeEvery(CHANGE_BASE_CURRENCY, fetchLatestConversionRates);
  yield takeEvery(SWAP_CURRENCY, fetchLatestConversionRates);
};
export default rootSaga;
