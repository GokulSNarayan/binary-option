import { combineReducers } from 'redux';
import currency from './currency';

const rootReducer = combineReducers({
    currency: currency,
});

export default rootReducer;