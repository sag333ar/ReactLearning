import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./Filter/ExpenseFilter";
import ExpensesList from './ExpensesList'

const Expenses = ({ expenses }) => {
  const [year, setYear] = useState("2021");
  const filterUpdateHandler = (selectedYear) => {
    setYear(selectedYear);
  };

  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === year;
  });

  return (
    <Card className="expenses">
      <ExpenseFilter year={year} onUpdate={filterUpdateHandler} />
      <ExpensesList expenses={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
