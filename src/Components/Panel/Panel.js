import React from "react";
import styles from "./Panel.module.scss";

export const Panel = (props) => {
  return (
    <div className={styles.basic}>
      <a
        href={props.link}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.link}>
        <div className={styles.panel}>
          <img
            data-testid="LinkThumbnailImage"
            src={props.img}
            alt={props.title}
            width={70}
            className={styles.img}
          />
          <p className={styles.title}>{props.title}</p>
        </div>
      </a>
    </div>
  );
};
