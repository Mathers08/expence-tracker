import {ITransaction} from "./types";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import React from "react";

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
      state.transactions.filter(transaction => transaction.id !== action.payload);
    },
    clearTransactions(state) {
      state.transactions = []
    }
  }
})

export const {addTransaction, deleteTransaction, clearTransactions} = transactionSlice.actions;
export default transactionSlice.reducer;