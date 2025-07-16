import { combineReducers, createStore } from "redux";
import todoReducer from "./reducers/todoReducer";
import themeReducer from "./reducers/themeReducer";

// reducer'ları store'a tanıtmadan önce birleştiririz
const rootReducer = combineReducers({ todoReducer, themeReducer });

// rootReducer'u kullanarak store'u oluştururuz
const store = createStore(rootReducer);

// proje tanıtmak için export ediyoruz
export default store;
