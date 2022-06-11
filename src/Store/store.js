import { legacy_createStore, applyMiddleware, compose} from "redux";

import thunk from "redux-thunk";

import {reducer} from "./reducer";

//Used to debugg react-redux codes
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(
    reducer,
  composeEnhancers(applyMiddleware(thunk))
);
