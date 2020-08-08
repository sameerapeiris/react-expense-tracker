import React, { useState ,useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const TransactionUI = (props) => {

    const {deleteTransaction} = useContext(GlobalContext)

  const [closes, setClose] = useState("");
  const sign = props.transaction.amount < 0 ? "-" : "+";

  const onMouseOver = (e) => {
    setClose("show");
  };
  const onMouseLeave = (e) => {
    setClose(!closes);
  };
  const transactionDelete = () => {
    deleteTransaction(props.transaction.id)
  }
  return (
    <React.Fragment>
      <li
        onMouseOver={onMouseOver}
        onMouseLeave={onMouseLeave}
        className={props.transaction.amount > 0 ?`minus`:`plus`}
      >
        {props.transaction.text}{" "}
        <span>
          {sign} ${Math.abs(props.transaction.amount)}
        </span>{" "}
        <button onClick={transactionDelete} className={`btn btn-danger delete-btn ${closes}`}>X</button>
      </li>
    </React.Fragment>
  );
};

export default TransactionUI;
