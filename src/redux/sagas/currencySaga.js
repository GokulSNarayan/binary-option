import { call, put, takeEvery } from 'redux-saga/effects';
import * as type from '../types';
import { getConversionPair, getcurrencyCodeApi, getExchangeRatesApi } from './functions';


function* fetchExchangeRates(action) {
    let currencyCode = action.payload

    try {
        const response = yield call(getExchangeRatesApi, currencyCode);

        yield put({ type: type.GET_EXCHANGE_RATES_SUCCESS, payload: response.data.conversion_rates });
    } catch (e) {
        yield put({ type: type.GET_EXCHANGE_RATES_FAILED, message: e.message });
    }
}
function* fetchCurrencyCodes() {

    const response = yield call(getcurrencyCodeApi);
    try {

        yield put({ type: type.GET_SUPPORTED_CODES_SUCCESS, payload: response.data["supported_codes"] });
    } catch (e) {
        yield put({ type: type.GET_SUPPORTED_CODES_FAILED, message: e.message });
    }
}
function* fetchConversionPair(action) {

    const { base, target, amount } = action.payload
    const response = yield call(getConversionPair, base, target);
    try {
        const conversionRate = response.data.conversion_rate;
        const convertedValue = (amount * conversionRate).toFixed(2);

        yield put({ type: type.GET_CONVERSION_VALUE_SUCCESS, payload: { amount, base, target, conversionRate, convertedValue } });
    } catch (e) {
        yield put({ type: type.GET_CONVERSION_VALUE_FAILED, message: e.message });
    }
}

function* currencySaga() {
    yield takeEvery(type.GET_EXCHANGE_RATES_REQUESTED, fetchExchangeRates);
    yield takeEvery(type.GET_SUPPORTED_CODES_REQUESTED, fetchCurrencyCodes);
    yield takeEvery(type.GET_CONVERSION_VALUE_REQUESTED, fetchConversionPair);
}

export default currencySaga;