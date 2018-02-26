import { createStore, combineReducers, applyMiddleware } from 'redux';
import messageReducer from './reducers/message';
import thunk from 'redux-thunk';
import logger from 'redux-logger'

const reducer = combineReducers({
    messageReducer
})

const store = createStore(
    reducer,
    applyMiddleware(thunk, logger)
)
export default store;