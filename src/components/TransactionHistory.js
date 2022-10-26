import React from 'react'

const listStyle = amount => {
  if(amount>0){
    return {
      display: 'flex',
      justifyContent: "space-between",
      padding: '10px',
      marginBottom: '10px',
      border: "solid 3px green"
    }
  }
  else if(amount<0){
    return {
      display: 'flex',
      justifyContent: "space-between",
      padding: '10px',
      marginBottom: '10px',
      border: "solid 3px red"
    }
  }
}

const ulStyle = {
  padding: 0,
  marginRight: 0,
  maxHeight: "200px",
  overflowY: 'scroll'
}

const TransactionHistory = ({list}) => {
  return (
    <div>
      <h2>Transaction History</h2>
        <ul style={ulStyle}>
            {list.map(item => (
            <li style={listStyle(item.amount)}>
              <div>{item.description}</div>
              <div>{item.amount}</div>
            </li>)).reverse()}
            <hr />
        </ul>
    </div>
  )
}

export default TransactionHistory