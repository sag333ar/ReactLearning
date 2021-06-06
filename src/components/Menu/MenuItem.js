import React from "react";

import cssClasses from "./MenuItem.module.css";

const MenuItem = ({ icon, isSelected, text, onClick }) => {
  const extraClass = isSelected ? ` ${cssClasses.selected}` : "";
  const liClassName = `${cssClasses.li}${extraClass}`;

  const clicked = () => {
    onClick(text)
  }

  return (
    <li className={liClassName} onClick={clicked}>
      {text}<br />
      {icon}
    </li>
  );
};

export default MenuItem;
