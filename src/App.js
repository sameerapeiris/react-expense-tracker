import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import {GlobalProvider} from './context/GlobalState'

function App() {
  return (
    <GlobalProvider>
    <div className={`container p-0 expense-tracker`} >
      <Header></Header>
      <div className={` container`}>
        <Balance/>
        <IncomeExpenses/>
        <TransactionList/>
        <AddTransaction/>
      </div>
    </div>
    </GlobalProvider>
  );
}

export default App;
