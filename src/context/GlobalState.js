import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
//Initial State
const initialState = {
  transactions: [
    { id: 1, text: "flower", amount: -200 },
    { id: 2, text: "salary", amount: 100 },
    { id: 3, text: "book", amount: -100 },
    { id: 4, text: "camera", amount: 400 },
  ],
};

// Create Context
export const GlobalContext = createContext(initialState);

// Provider
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //Delete Transaction
  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id
    });
  }

  //Add Transaction
  function addTransaction(transaction){
      dispatch({
          type: "ADD_TRANSACTION",
          payload: transaction
      })
  }
  return (
    <GlobalContext.Provider value={{ transactions: state.transactions , deleteTransaction, addTransaction}} >
      {children}
    </GlobalContext.Provider>
  );
};
