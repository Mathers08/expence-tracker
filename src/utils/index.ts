import {ITransaction} from "../store/reducers/transaction/types";
import {CombinedState} from "@reduxjs/toolkit";

export const loadState = () => {
  try {
    const savedState = localStorage.getItem('items');
    if (savedState === null) return undefined;
    return JSON.parse(savedState);
  } catch (error) {
    console.error(error);
    return undefined;
  }
}

export const saveState = (state: CombinedState<any>) => {
  try {
    const workingState = JSON.stringify(state);
    localStorage.setItem('items', workingState);
  } catch (error) {
    console.error(error);
  }
}
