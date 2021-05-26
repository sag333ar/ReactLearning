import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./Filter/ExpenseFilter";

const Expenses = ({ expenses }) => {
  const [year, setYear] = useState("2021");
  const filterUpdateHandler = (selectedYear) => {
    setYear(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpenseFilter year={year} onUpdate={filterUpdateHandler} />
      {expenses
        .filter((expense) => expense.date.getFullYear().toString() === year)
        .map((expense) => (
          <ExpenseItem
            date={expense.date}
            key={expense.id}
            amount={expense.amount}
            title={expense.title}
          />
        ))}
    </Card>
  );
};

export default Expenses;
