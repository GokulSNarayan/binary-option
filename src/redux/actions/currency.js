import * as type from '../types';

export function getBaseCurrency() {
    let currency = localStorage.getItem('baseCurrency');
    return {
        type: type.GET_BASE_CURRENCY_REQUESTED,
        payload: currency,
    }
}
export function setBaseCurrency(currency) {
    return {
        type: type.SET_BASE_CURRENCY,
        payload: currency,
    }
}
export function getExchangeRates(currencyCode) {
    return {
        type: type.GET_EXCHANGE_RATES_REQUESTED,
        payload: currencyCode,
    }
}
export function getSupportedCodes() {
    return {
        type: type.GET_SUPPORTED_CODES_REQUESTED
    }
}

export function getConversionPair(base, target, amount) {
    return {
        type: type.GET_CONVERSION_VALUE_REQUESTED,
        payload: { base, target, amount }
    }
}
