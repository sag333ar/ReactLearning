import React from "react";
import MenuItem from './MenuItem'

import cssClasses from "./Menu.module.css";

const Menu = ({ items, selected, onChange }) => {
  const liClicked = (e) => {
    const index = items.indexOf(e.target.innerText);
    onChange(index);
  };

  return (
    <ul className={cssClasses.ul}>
      {items.map((item) => {
        const index = items.indexOf(item);
        return (
          <MenuItem
            isSelected={index === selected}
            onClick={liClicked}
            text={item}
            key={item}
          />
        );
      })}
    </ul>
  );
};

export default Menu;
