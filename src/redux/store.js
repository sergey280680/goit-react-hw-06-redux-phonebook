import { createStore, combineReducers } from "redux";
// import { persistStor, persistReducer } from "redux-persist";
// import { composeWithDevTools } from "redux-devtools-extension";
import phoneBookReducer from "./phoneBook/phoneBook-reducer";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";

// console.log("k: ", getDefaultMiddleware());

const middleware = [...getDefaultMiddleware(), logger];

// const persistConfig = {
//   key: "root",
//   storage,
// };

// const rootReducer = combineReducers({
//   phoneBook: phoneBookReducer,
// });

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const store = createStore(rootReducer, composeWithDevTools());
const store = configureStore({
  reducer: {
    phoneBook: phoneBookReducer,
  },

  middleware,
  devTools: process.env.NODE_ENV === "development",
});

export default store;
