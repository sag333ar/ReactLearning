import React from "react";
import cssClasses from "./Accounts.module.css";

const Accounts = () => {
  const accounts = [
    { name: "Personal", icon: "🏡"} , 
    { name: "Business", icon: "💼"},
    { name: "Travel", icon: "✈️"},
  ];
  return (
    <table className={cssClasses.table}>
      <thead className={cssClasses.row}>
        <tr>
          <th className={cssClasses.index}>#</th>
          <th className={cssClasses.title}>Name</th>
          <th className={cssClasses.icon}>Icon</th>
        </tr>
      </thead>
      <tbody>
      {accounts.map((account) => {
        const index = accounts.indexOf(account) + 1;
        return (
          <tr key={index} className={cssClasses.row}>
            <td className={cssClasses.index}>{index}</td>
            <td className={cssClasses.title}>{account.name}</td>
            <td className={cssClasses.icon}>{account.icon}</td>
          </tr>
        );
      })}
      </tbody>
    </table>
  );
};

export default Accounts;
