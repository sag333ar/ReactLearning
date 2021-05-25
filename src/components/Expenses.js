import React from "react";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css'

const Expenses = ({expenses}) => {
  return (
    <div className="expenses">
      {expenses.map((e, i) => (
        <ExpenseItem date={e.date} key={i} amount={e.amount} title={e.title} />
      ))}
    </div>
  );
};

export default Expenses;
