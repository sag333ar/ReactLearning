import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = ({ expenses }) => {
  const noRecordsContent = (
    <h2 className="expenses-list__fallback">No Records found</h2>
  );

  const expensesContent = (
    <ul className="expenses-list">
      {expenses.map((expense) => (
        <ExpenseItem
          date={expense.date}
          key={expense.id}
          amount={expense.amount}
          title={expense.title}
        />
      ))}
    </ul>
  );

  let content = noRecordsContent;

  if (expenses.length > 0) {
    content = expensesContent;
  }

  return content;
};

export default ExpensesList;
