import React from 'react'
import ExpenseItem from './ExpenseItem'

const ExpensesList = ({expenses}) => {
  const noRecordsContent = <h2>No Records found</h2>;

  const expensesContent = expenses.map((expense) => (
    <ExpenseItem
      date={expense.date}
      key={expense.id}
      amount={expense.amount}
      title={expense.title}
    />));
  
  let content = noRecordsContent;

  if (expenses.length > 0) {
    content = expensesContent;
  }

  return content;
}

export default ExpensesList;