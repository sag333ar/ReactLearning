import React from "react";
import ExpenseItem from "./ExpenseItem";

const Expenses = ({expenses}) => {
  return (
    <div>
      {expenses.map((e, i) => (
        <ExpenseItem date={e.date} key={i} amount={e.amount} title={e.title} />
      ))}
    </div>
  );
};

export default Expenses;
