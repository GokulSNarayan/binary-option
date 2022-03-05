import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers/index.js';
import rootSaga from './sagas/index';


const sagaMiddleware = createSagaMiddleware();
const composedEnhancer = composeWithDevTools(applyMiddleware(sagaMiddleware))

const store = createStore(rootReducer, composedEnhancer);
sagaMiddleware.run(rootSaga);


export default store;

