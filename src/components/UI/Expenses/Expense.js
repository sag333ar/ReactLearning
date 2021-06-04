import React from "react";

import cssClasses from "../Entity/EntityRecord.module.css";

const Expense = ({ item }) => {
  return (
    <tr key={item.id} className={cssClasses.row}>
      <td className={cssClasses.index}>{item.id}</td>
      <td className={cssClasses.title}>{item.label}</td>
      <td className={cssClasses.title}>{item.date}</td>
      <td className={cssClasses.title}>{item.account}</td>
      <td className={cssClasses.title}>{item.category}</td>
      <td className={cssClasses.title}>{item.wallet}</td>
      <td className={cssClasses.title}>{item.location}</td>
      <td className={cssClasses.icon}>{item.amount}</td>
    </tr>
  );
};


export default Expense;