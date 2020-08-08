import React from 'react'

const IncomeExpenses = () => {
    return (
        <div className={`income-expenses`}>
            <div>
                <h4>Income</h4>
                <p id={`money plus`} className={`money plus`} >$400</p>
            </div>
            <div>
                <h4>Expenses</h4>
                <p id={`money minus`} className={`money minus`}>$300</p>
            </div>
        </div>
    )
}

export default IncomeExpenses
