import {ITransaction} from "./types";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState = {
  transactions: [] as ITransaction[]
};

export const transactionSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    addTransaction(state, action: PayloadAction<ITransaction>) {
      state.transactions.push(action.payload);
    },
    deleteTransaction(state, action: PayloadAction<number>) {
      const index = state.transactions.findIndex(transaction => transaction.id === action.payload);
      state.transactions.splice(index, 1);
    },
    clearTransactions(state) {
      state.transactions = []
    }
  }
})

export const {addTransaction, deleteTransaction, clearTransactions} = transactionSlice.actions;
export default transactionSlice.reducer;