import { call, put, takeEvery } from 'redux-saga/effects';
import * as type from '../types';

const apiUrl = `https://v6.exchangerate-api.com/v6/7f84ec1772ade20e2adbceee/latest/`;
function getApi(code) {
    console.log("🚀 ~ file: currencySaga.js ~ line 6 ~ getApi ~ code", code)

    return fetch(`${apiUrl}${code}`, {
        method: 'GET',
        mode: 'cors',
        "Access-Control-Allow-Origin": '*',
        headers: {
            'Content-Type': 'application/json',

        }
    }).then(response => {
        console.log("🚀 ~ file: currencySaga.js ~ line 13 ~ getApi ~ response", response)

        return response.json()
    })
        .catch((error) => { throw error })
}

function* fetchExchangeRates(action) {
    console.log("🚀 ~ file: currencySaga.js ~ line 21 ~ function*fetchExchangeRates ~ action", action)
    let currencyCode = action.payload

    try {
        const { conversion_rates } = yield call(getApi(currencyCode));
        yield put({ type: type.GET_EXCHANGE_RATES_SUCCESS, payload: conversion_rates });
    } catch (e) {
        yield put({ type: type.GET_EXCHANGE_RATES_FAILED, message: e.message });
    }
}

function* currencySaga() {
    yield takeEvery(type.GET_EXCHANGE_RATES_REQUESTED, fetchExchangeRates);
}

export default currencySaga;