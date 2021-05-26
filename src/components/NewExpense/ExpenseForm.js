import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = ({onSave}) => {
  const [userInput, setUserInput] = useState({
    title: "",
    amount: 0.0,
    date: new Date(Date.now()),
  });

  const titleChangeHandler = (e) => {
    setUserInput((prev) => {
      return {
        ...prev,
        title: e.target.value,
      };
    });
  };

  const amountChangeHandler = (e) => {
    const value = parseFloat(e.target.value)
    setUserInput((prev) => {
      return {
        ...prev,
        amount: Number.isNaN(value) ? 0.0 : value,
      };
    });
  };

  const dateChangeHandler = (e) => {
    setUserInput((prev) => {
      const newState = {
        ...prev,
        date: new Date(e.target.value),
      };
      return newState;
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(userInput);
    onSave(userInput);
    setUserInput({
      title: "",
      amount: 0.0,
      date: new Date(Date.now()),
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="Title">Title</label>
          <input type="text" value={userInput.title} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label htmlFor="Amount">Amount</label>
          <input
            type="number"
            min="0.05"
            step="0.05"
            value={userInput.amount === 0.0 ? "" : userInput.amount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="Date">Date</label>
          <input
            type="date"
            value={userInput.date.toISOString().slice(0,10)}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
