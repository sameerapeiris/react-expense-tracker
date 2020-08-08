import React, { useState } from "react";

const TransactionUI = (props) => {
  const [closes, setClose] = useState("");
  const sign = props.transaction.amount > 0 ? "-" : "+";

  const onMouseOver = (e) => {
    setClose("show");
  };
  const onMouseLeave = (e) => {
    setClose(!closes);
  };
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
        <button className={`btn btn-danger delete-btn ${closes}`}>X</button>
      </li>
    </React.Fragment>
  );
};

export default TransactionUI;
