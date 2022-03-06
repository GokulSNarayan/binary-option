import * as type from '../types';

const initialState = {
    baseCurrency: localStorage.getItem('baseCurrency') ?? null,
    loading: false,
    error: null,
    exchangeRates: null,
    supportedCodes: null,
    conversionPairData: null
}

export default function currency(state = initialState, action) {
    switch (action.type) {
        case type.GET_BASE_CURRENCY_REQUESTED:                          //base currency
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
        case type.SET_BASE_CURRENCY:                                    //setBaseCurrency
            localStorage.setItem('baseCurrency', action.payload)
            return {
                ...state,
                baseCurrency: action.payload
            }
        case type.GET_EXCHANGE_RATES_REQUESTED:                         //exchange rates
            return {
                ...state,
                loading: true,
            }
        case type.GET_EXCHANGE_RATES_SUCCESS:
            return {
                ...state,
                loading: false,
                exchangeRates: { ...action.payload }
            }
        case type.GET_EXCHANGE_RATES_FAILED:

            return {
                ...state,
                loading: false,
                error: action.message
            }
        case type.GET_SUPPORTED_CODES_REQUESTED:                        //supported codes

            return {
                ...state,
                loading: true
            }
        case type.GET_SUPPORTED_CODES_SUCCESS:

            return {
                ...state,
                loading: false,
                supportedCodes: action.payload
            }
        case type.GET_SUPPORTED_CODES_FAILED:

            return {
                ...state,
                loading: false,
                error: action.message
            }
        case type.GET_CONVERSION_VALUE_REQUESTED:                       //conversion value 

            return {
                ...state,
                loading: true,
            }
        case type.GET_CONVERSION_VALUE_SUCCESS:

            return {
                ...state,
                loading: false,
                conversionPairData: {
                    ...state.conversionPairData,
                    amount: action.payload.amount,
                    base: action.payload.base,
                    target: action.payload.target,
                    conversionRate: action.payload.conversionRate,
                    convertedValue: action.payload.convertedValue
                }
            }
        case type.GET_CONVERSION_VALUE_FAILED:

            return {
                ...state,
                loading: false,
                error: action.message
            }

        default:
            return state
    }
}