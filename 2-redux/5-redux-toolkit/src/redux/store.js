import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import crudReducer from "./slices/crudSlice";
/*
 * createStore vs configureStore
 * reducer'lar otmatik birleştirirlir (combineReducers'a gerek yok)
 * thunk içersinde kurulur gelir
 * devtools (geliştirici eklentesi) kurulu gelir
 */

const store = configureStore({
  reducer: {
    counterReducer,
    crudReducer,
  },
});

export default store;
