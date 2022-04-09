import React, {createContext, useReducer} from 'react';
import AppReducer, {ADD_TRANSACTION, CLEAR_TRANSACTION, DELETE_TRANSACTION} from "./AppReducer";

const initialState = {
  transactions: []
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {

  const [state, dispatch] = useReducer(AppReducer, initialState);

  const addTransaction = transaction => {
    dispatch({
      type: ADD_TRANSACTION,
      payload: transaction
    })
  }

  const deleteTransaction = id => {
    dispatch({
      type: DELETE_TRANSACTION,
      payload: id
    })
  }

  const clearTransactions = () => {
    dispatch({
      type: CLEAR_TRANSACTION
    })
  }

  return (
    <GlobalContext.Provider value={{
      transactions: state.transactions,
      addTransaction,
      deleteTransaction,
      clearTransactions
    }}>
      {children}
    </GlobalContext.Provider>
  );
}