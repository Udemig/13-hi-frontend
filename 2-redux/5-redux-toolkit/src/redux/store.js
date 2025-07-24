import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";

/*
 * createStore vs configureStore
 * reducer'lar otmatik birleştirirlir (combineReducers'a gerek yok)
 * thunk içersinde kurulur gelir
 * devtools (geliştirici eklentesi) kurulu gelir
 */

const store = configureStore({
  reducer: {
    counterReducer,
  },
});

export default store;
