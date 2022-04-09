import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {transaction} from "./reducers";

const rootReducer = combineReducers({
  transaction
})

export const setupStore = () => configureStore({
  reducer: rootReducer
})

export type RootState = ReturnType<typeof rootReducer>;
export type AppState = ReturnType<typeof setupStore>;
export type AppDispatch = AppState["dispatch"];
