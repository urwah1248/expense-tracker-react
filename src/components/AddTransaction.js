import React from 'react'

const inputStyle = {
  width: "99%",
  margin: "10px auto",
  padding: 0,
  border: "1px solid black",
  height: "40px",
  textIndent: "10px"
}
const buttonStyle = {
  width: "50%",
  height: "40px",
  backgroundColor: "blue",
  color: "White",
  fontSize : "20px"
}
const AddTransaction = ({ setList, list, income, setIncome, expense, setExpense, setBalance}) => {

  const handleSubmit = e => {
    e.preventDefault();
    const formdata = new FormData(e.target)

    const inputDescription = formdata.get('description')
    const inputAmount = parseInt(formdata.get('amount'))
    const formInput = {
       description: inputDescription,
       amount:  inputAmount,
    }

    setList(list.concat(formInput))
    if(formInput.amount>0){
      setIncome(income = income+inputAmount)
    }
    else if(formInput.amount<0){
      setExpense(expense = expense-inputAmount)
    }

    setBalance(income-expense)
    console.log(expense, income)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input style={inputStyle} type="text" name="description" id="description" placeholder='Detail of Transaction'/>
      <input style={inputStyle} type="number" name="amount" id="amount" placeholder='Amount of Transaction | **use (-) for expense' />
      <br />
      <button style={buttonStyle}>Add Transaction</button>
    </form>
  )
}

export default AddTransaction