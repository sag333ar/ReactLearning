import React from "react";

import tableClasses from "../Entity/Entity.module.css";
import trClasses from "../Entity/EntityRecord.module.css";

import Expense from "./Expense";

const Expenses = ({ items, headers, hidden }) => {
  const head = (
    <thead className={trClasses.row}>
      <tr>
        <th className={trClasses.index}>{headers[0]}</th>
        <th className={trClasses.title}>{headers[1]}</th>
        <th className={trClasses.title}>{headers[2]}</th>
        <th className={trClasses.title}>{headers[3]}</th>
        <th className={trClasses.title}>{headers[4]}</th>
        <th className={trClasses.title}>{headers[5]}</th>
        <th className={trClasses.title}>{headers[6]}</th>
        <th className={trClasses.icon}>{headers[7]}</th>
      </tr>
    </thead>
  );

  const body = (
    <tbody>
      {items.map((item) => {
        return <Expense item={item} key={item.id} />;
      })}
    </tbody>
  );

  return (
    <table className={tableClasses.table} hidden={hidden}>
      {head}
      {body}
    </table>
  );
};

export default Expenses;
