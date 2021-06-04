import React from "react";

import cssClasses from "./MenuItem.module.css";

const MenuItem = ({ isSelected, text, onClick }) => {
  const extraClass = isSelected ? ` ${cssClasses.selected}` : "";
  const liClassName = `${cssClasses.li}${extraClass}`;

  return (
    <li className={liClassName} onClick={onClick}>
      {text}
    </li>
  );
};

export default MenuItem;