import React from "react";
import MenuItem from './MenuItem'

import cssClasses from "./Menu.module.css";

const Menu = ({ icons, items, selected, onChange }) => {
  const liClicked = (text) => {
    onChange(items.indexOf(text));
  };

  return (
    <ul className={cssClasses.ul}>
      {items.map((item) => {
        const index = items.indexOf(item);
        return (
          <MenuItem
            isSelected={index === selected}
            onClick={liClicked}
            icon={icons[index]}
            text={item}
            key={item}
          />
        );
      })}
    </ul>
  );
};

export default Menu;
