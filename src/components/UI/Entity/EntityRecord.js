import React from 'react';

import cssClasses from "./EntityRecord.module.css";

const EntityRecord = ({item}) => {
  return (
    <tr key={item.id} className={cssClasses.row}>
      <td className={cssClasses.index}>{item.id}</td>
      <td className={cssClasses.title}>{item.name}</td>
      <td className={cssClasses.icon}>{item.icon}</td>
    </tr>
  );
};

export default EntityRecord;