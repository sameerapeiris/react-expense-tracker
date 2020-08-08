import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import TransactionUI from "./TransactionUI";

const TransactionList = (props) => {
  const { transactions } = useContext(GlobalContext);
  console.log(transactions);
  return (
    <div className={`history`}>
      <h3>History</h3>
      <ul className={`list`}>
        {transactions.map((transaction, index) => (
          <TransactionUI key={transaction.id} transaction={transaction} ></TransactionUI>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
