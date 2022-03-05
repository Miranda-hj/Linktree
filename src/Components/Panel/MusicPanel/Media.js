import React from "react";
import styles from "../Panel.module.scss";
import { Arrow } from "../Arrow";

export const Media = (props) => {
  return (
    <>
      <div className={styles.media}>
        {props.icon}
        <p>{props.name}</p>
      </div>
      <Arrow />
    </>
  );
};
