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
      <ExpenseFilter onUpdate={filterUpdateHandler} />
      {expenses
        .filter((e) => e.date.getFullYear().toString() === year)
        .map((e, i) => (
          <ExpenseItem
            date={e.date}
            key={i}
            amount={e.amount}
            title={e.title}
          />
        ))}
    </Card>
  );
};

export default Expenses;
