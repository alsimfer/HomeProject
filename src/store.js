import thunk from "redux-thunk";
import logger from "redux-logger";
import { createStore, combineReducers, applyMiddleware } from "redux";
import messageReducer from "./reducers/message";

const reducer = combineReducers({
  messageReducer,
});

const store = createStore(reducer, applyMiddleware(thunk, logger));
export default store;
