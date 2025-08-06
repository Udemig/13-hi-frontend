import { configureStore } from "@reduxjs/toolkit";
import flightsReducer from "./slices/flightsSlice";
import detailReducer from "./slices/detailSlice";

const store = configureStore({
  reducer: {
    flights: flightsReducer,
    detail: detailReducer,
  },
});

export default store;
