import React from "react";
import EntityRecord from "./EntityRecord";
import styles from "./Entity.module.css"
import H2 from "../UI/h2";

const Entity = ({ items, headers, hidden, title }) => {
  return (
    <div hidden={hidden}>
      <H2 title={title} />
      <div className={styles.entity}>
        {items.map((item) => {
          return <EntityRecord item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default Entity;
