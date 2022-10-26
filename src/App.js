import React, { useState } from "react";

//Importing Components
import BalanceTracker from "./components/BalanceTracker";
import TransactionHistory from "./components/TransactionHistory";
import AddTransaction from "./components/AddTransaction";
import './app.css'

function App() {

  const [balance, setBalance] = useState(0)
  const [income, setIncome] = useState(0)
  const [expense, setExpense] = useState(0)
  const [list, setList] = useState([])
  const [inputDetail, setInputDetail] = useState('')
  const [inputAmount, setInputAmount] = useState(0)

  return (
    <div className="App">
      <h1>Expense Tracker</h1>

      <BalanceTracker balance={balance} income={income} expense={expense}/>

      <TransactionHistory list={list} setList={setList} />

      <h2>Add Transaction</h2>
      <AddTransaction setBalance={setBalance} income={income} setIncome={setIncome} expense={expense} setExpense={setExpense} list={list} setList={setList} detail={inputDetail} setDetail={setInputDetail} amount={inputAmount} setAmount={setInputAmount} />
      
    </div>
  );
}

export default App;
