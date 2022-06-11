import { legacy_createStore, applyMiddleware, compose, combineReducers} from "redux";

import thunk from "redux-thunk";
import { authReducer } from "./auth/authReducer";
import {reducer} from "./reducer";

//Used to debugg react-redux codes
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  todo : reducer,
  auth : authReducer
})

export const store = legacy_createStore(
    rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
