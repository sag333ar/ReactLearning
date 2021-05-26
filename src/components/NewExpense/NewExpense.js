import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = ({onSave}) => {
  const onSaveHandler = (expense) => {
    onSave({
      ...expense,
      id: Math.random().toString
    });
  };

  return <div className="new-expense">
    <ExpenseForm onSave={onSaveHandler} />
  </div>;
};

export default NewExpense;
