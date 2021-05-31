import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./Filter/ExpenseFilter";
import ExpensesList from "./ExpensesList";
import Chart from "../Chart/Chart";

const Expenses = ({ expenses }) => {
  const [year, setYear] = useState("2021");
  const filterUpdateHandler = (selectedYear) => {
    setYear(selectedYear);
  };

  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === year;
  });

  let values = {
    Jan: 0.0,
    Feb: 0.0,
    Mar: 0.0,
    Apr: 0.0,
    May: 0.0,
    Jun: 0.0,
    Jul: 0.0,
    Aug: 0.0,
    Sep: 0.0,
    Oct: 0.0,
    Nov: 0.0,
    Dec: 0.0,
  };

  let max = 0;

  filteredExpenses.forEach((expense) => {
    const month = expense.date.toLocaleString("en-US", { month: "short" });
    const currentValue = values[month];
    const valueToAssign = expense.amount + currentValue;
    values[month] = valueToAssign;
    if (valueToAssign > max) {
      max = valueToAssign;
    }
  });

  return (
    <Card className="expenses">
      <ExpenseFilter year={year} onUpdate={filterUpdateHandler} />
      <Chart values={values} max={max} />
      <ExpensesList expenses={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
