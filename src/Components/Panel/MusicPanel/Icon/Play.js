import React, { useState } from "react";
import styles from "./Player.module.scss"
export const Play = () => {
    const [play,setPlay] = useState(false)
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onMouseDown={()=>setPlay(!play)}
      >
      <circle cx="12" cy="12" r="12" fill="black" className={play ? styles.player : ""  }/>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.8 12L8.80005 16.8V7.2L16.8 12Z"
        fill="#C4C4C4"
      />
    </svg>
  );
};
