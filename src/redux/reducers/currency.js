import * as type from '../types';

const initialState = {
    baseCurrency: null,
    loading: false,
    error: null,
    exchangeRates: null
}

export default function users(state = initialState, action) {
    switch (action.type) {
        case type.GET_BASE_CURRENCY_REQUESTED:
            return {
                ...state,
                loading: true
            }
        case type.GET_BASE_CURRENCY_SUCCESS:
            return {
                ...state,
                loading: false,
                baseCurrency: action.payload
            }
        case type.GET_BASE_CURRENCY_FAILED:
            return {
                ...state,
                loading: false,
                baseCurrency: action.payload
            }
        case type.SET_BASE_CURRENCY:
            localStorage.setItem('baseCurrency', action.payload)
            return {
                ...state,
                baseCurrency: action.payload
            }
        case type.GET_EXCHANGE_RATES_REQUESTED:
            console.log("GET_EXCHANGE_RATES_REQUESTED====>", action.payload);
            return {
                ...state,
                loading: true,
            }
        case type.GET_EXCHANGE_RATES_SUCCESS:
            console.log("GET_EXCHANGE_RATES_SUCCESS payload====>", action.payload);
            return {
                ...state,
                loading: false,
                exchangeRates: { ...action.payload }
            }
        case type.GET_EXCHANGE_RATES_FAILED:
            console.log("GET_EXCHANGE_RATES_FAILED payload====>", action.message);

            return {
                ...state,
                loading: false,
                error: action.message
            }
        default:
            return state
    }
}