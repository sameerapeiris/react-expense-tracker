import React,{useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

const AddTransaction = () => {

    const {addTransaction} = useContext(GlobalContext)

    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const getTexts = (e) => {
        setText(e.target.value)
    }
    const getAmounts =(e) =>{
        setAmount(e.target.value);
    }
    const onSubmit = (e) =>{
        e.preventDefault()

        const newTransaction = {
            id: Math.floor(Math.random() *1000000),
            text,
            amount: + amount
        }
        addTransaction (newTransaction)
    }
    return (
        <div className={`add-transaction`}>
            <h3>Add transaction</h3>
            <form className={`form-group`} onSubmit={onSubmit}>
                <label htmlFor={`text`}  >Text</label>
                <input  className={`form-control`} value={text} onChange={getTexts} type={`text`} placeholder={`type text...`} />
                <label htmlFor={`amount`} >Amount <br/>(negative -expenses / positive - expenses)</label>
                <input  className={`form-control`} value={amount} onChange={getAmounts} type={`text`} placeholder={`type amount...`} />
                <button type={`submit`}  className={`btn btn-primary`}>Add Transaction</button>
            </form>
        </div>
    )
}

export default AddTransaction
