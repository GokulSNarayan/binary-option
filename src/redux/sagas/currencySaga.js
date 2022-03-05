import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import * as type from '../types';


const apiUrl = `https://v6.exchangerate-api.com/v6/7f84ec1772ade20e2adbceee/latest/USD`;
async function getApi(code) {
    console.log("🚀 ~ file: currencySaga.js ~ line 6 ~ getApi ~ code", code)

    return await axios.get(apiUrl, {
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',

        }
    }).then(response => {
        console.log("🚀 ~ file: currencySaga.js ~ line 13 ~ getApi ~ response", response)

        return response
    })
        .catch((error) => { throw error })
}

function* fetchExchangeRates(action) {
    let currencyCode = action.payload

    try {
        const response = yield call(getApi, currencyCode);
        console.log("🚀 ~ file: currencySaga.js ~ line 29 ~ function*fetchExchangeRates ~ data", response.data)

        yield put({ type: type.GET_EXCHANGE_RATES_SUCCESS, payload: response.data.conversion_rates });
    } catch (e) {
        yield put({ type: type.GET_EXCHANGE_RATES_FAILED, message: e.message });
    }
}

function* currencySaga() {
    yield takeEvery(type.GET_EXCHANGE_RATES_REQUESTED, fetchExchangeRates);
}

export default currencySaga;