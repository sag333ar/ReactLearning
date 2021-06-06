import React from "react";

import styles from "./Expense.module.css";

const Expense = ({ item }) => {
  return (
    <div className={styles.expense_container}>
      <div className={styles.expense}>
        <div className={styles.expense_label}>{item.label}</div>
        <div className={styles.expense_amount}>$ {item.amount.toFixed(2)}</div>
      </div>
      <div className={styles.expense_tag_container}>
        <div className={styles.expense_tag}>{item.account.icon}{item.account.name}</div>
        <div className={styles.expense_tag}>{item.wallet.icon}{item.wallet.name}</div>
        <div className={styles.expense_tag}>{item.account.icon}{item.account.name}</div>
        <div className={styles.expense_tag}>{item.account.icon}{item.account.name}</div>
      </div>
    </div>
  );
};

export default Expense;
