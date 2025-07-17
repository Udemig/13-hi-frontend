import { combineReducers, createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import userReducer from "./reducers/userReducer";
import userReducerv2 from "./reducers/userReducerv2";

const rootReducer = combineReducers({ userReducer, userReducerv2 });

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
