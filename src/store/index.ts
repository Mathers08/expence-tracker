import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {transaction} from "./reducers";
import {loadState, saveState} from "../utils";

const rootReducer = combineReducers({
  transaction
})

export const setupStore = () => configureStore({
  reducer: rootReducer,
  preloadedState: loadState()
})

const store = setupStore();
store.subscribe(() => saveState(store.getState()));

export type RootState = ReturnType<typeof rootReducer>;
export type AppState = ReturnType<typeof setupStore>;
export type AppDispatch = AppState["dispatch"];
export default store;