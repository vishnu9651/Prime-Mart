import {
  applyMiddleware,
  combineReducers,
  compose,
  legacy_createStore,
} from "redux";
import thunk from "redux-thunk";
import { reducer as AppReducer } from "./AppReducer/reducer";
import { reducer as AuthReducer } from "./AuthReducer/reducer";
import { reducer as CartReducer } from "./CartReducer/reducer"

let rootReducer = combineReducers({ AppReducer, AuthReducer, CartReducer });

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = legacy_createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk))
);

export { store };
