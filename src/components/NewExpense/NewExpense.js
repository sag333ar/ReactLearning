import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = ({ onSave }) => {
  const saveHandler = (expense) => {
    onSave({
      ...expense,
      id: Math.random().toString,
    });
  };

  const cancelHandler = () => {
    setIsAddingExpense(false);
  };

  const addNewExpenseHandler = () => {
    setIsAddingExpense(true);
  }

  const [isAddingExpense, setIsAddingExpense] = useState(false);

  let content = <button onClick={addNewExpenseHandler}>New Expense</button>;

  if (isAddingExpense) {
    content = <ExpenseForm onSave={saveHandler} onCancel={cancelHandler} />
  }

  return (
    <div className="new-expense">
      {content}
    </div>
  );
};

export default NewExpense;
