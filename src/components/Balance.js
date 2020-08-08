import React,{useContext} from 'react'
import { GlobalContext } from "../context/GlobalState";

const Balance = (props) => {

    const { transactions } = useContext(GlobalContext);

    const amount = transactions.map(transaction =>transaction.amount)
    const total = amount.reduce((accumilator, currentvalue) => (accumilator +currentvalue), 0).toFixed(2)

    const sign = total < 0 ? '-':'';
    return (
        <div className={`d-flex balance`}>
            <h3>Your Balance :</h3>
            <p className={`pl-3`}> {sign} {total}</p>
            
        </div>
    )
}

export default Balance
