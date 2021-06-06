import React from 'react';

import styles from "./EntityRecord.module.css";

const EntityRecord = ({item}) => {
  const amount = item.amount !== undefined 
    && <div className={styles.expense_amount}>$ {item.amount.toFixed(2)}</div>

  return (
    <div className={styles.expense_container}>
      <div className={styles.expense}>
        <div className={styles.expense_label}>{item.name}</div>
        {amount}
      </div>
      </div>
  );
};

export default EntityRecord;