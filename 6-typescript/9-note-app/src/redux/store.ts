import { combineReducers, configureStore } from "@reduxjs/toolkit";
import noteReducer from "./slices/noteSlice.";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import storage from "redux-persist/lib/storage";

// reducer'ları persist için birleştirelim
const rootReducer = combineReducers({
  notes: noteReducer,
});

// persist için ayar nesnesi
const persisConfig = {
  key: "root", // local storage'da kaydedilecek anahtar
  storage,
  whiteList: ["notes"],
};

// persist reducer'ı oluştur
const persistedReducer = persistReducer(persisConfig, rootReducer);

// store'u oluştur
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export default store;

// persist store'u oluştur
export const persistor = persistStore(store);

// rootState tipi tanımla (store'un tipi > useSelector'de kullanıyoruz)
export type RootState = ReturnType<typeof store.getState>;

// appDispatch tipi tanımla (useDispatch'de kullanıyoruz)
export type AppDispatch = typeof store.dispatch;
