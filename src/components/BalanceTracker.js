import React from 'react'

const balanceStyle = {
  marginBotton: 0,
  marginTop: 0,
  lineHeight: "10px"
}

const gridStyle = {
  display : 'grid',
  gridTemplateColumns: "50% 50%"
}

const incomeStyle = {
  backgroundColor: "#9effaa"
}
const expenseStyle = {
  backgroundColor: "#B90b0d",
  color: "white"
}

const BalanceTracker = ({ balance, income, expense }) => {
  return (
    <div >
        <h3 style={balanceStyle} className='BTHeader'>Current Balance</h3>
        <h1 style={balanceStyle} >${balance.toFixed(2)}</h1>

        <div className="incomeExpense" style={gridStyle}>
          <div className="income" style={incomeStyle}>
            <h2>INCOME</h2>
            <h2>${income.toFixed(2)}</h2>
          </div>
          <div className="expense" style={expenseStyle}>
            <h2>EXPENSE</h2>
            <h2>${expense.toFixed(2)}</h2>
          </div>
        </div>
    </div>
  )
}

export default BalanceTracker