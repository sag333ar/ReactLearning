import React from "react";

import styles from "./Expenses.module.css";
import Expense from "./Expense";
import H2 from "../UI/h2";

const Expenses = ({ items, headers, hidden }) => {
  return (
    <div className={styles.expenses} hidden={hidden}>
      <H2 title="Expenses" />
      {items.map((item) => {
        return <Expense item={item} key={item.id} hidden={hidden} />;
      })}
    </div>
  );
};

export default Expenses;
