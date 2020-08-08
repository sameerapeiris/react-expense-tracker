import React from 'react'

const TransactionUI = (props) => {
    return (
        <React.Fragment>
            <li className={`minus`} >{props.transaction.text} <span>${props.transaction.amount}</span> <button className={`btn btn-danger delete-btn`}>X</button></li>
        </React.Fragment>
    )
}

export default TransactionUI
