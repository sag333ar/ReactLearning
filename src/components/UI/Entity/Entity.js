import React from "react";
import EntityRecord from "./EntityRecord";

import tableClasses from "./Entity.module.css";
import trClasses from "./EntityRecord.module.css";

const Entity = ({ items, headers, hidden }) => {
  const head = (
    <thead className={trClasses.row}>
      <tr>
        <th className={trClasses.index}>{headers[0]}</th>
        <th className={trClasses.title}>{headers[1]}</th>
        <th className={trClasses.icon}>{headers[2]}</th>
      </tr>
    </thead>
  );

  const body = (
    <tbody>
      {items.map((item) => {
        return <EntityRecord item={item} key={item.id} />;
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

export default Entity;
