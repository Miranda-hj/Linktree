import React from "react";
import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <div className={styles.stack}>
      <img src="./img/profile-picture.png" alt="" />
      <div>@yourname</div>
    </div>
  );
};
