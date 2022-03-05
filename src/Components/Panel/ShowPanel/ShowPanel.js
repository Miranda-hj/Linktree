import React, { useState, useEffect } from "react";
import styles from "../Panel.module.scss";
import { Shows } from "../../../data";
import { Arrow } from "../Arrow";
import { Songkick } from "./Songkick";

export const ShowPanel = () => {
  const [active, setActive] = useState(false);
  const [lists, setLists] = useState([]);
  const fetchShows = async () => {
    return new Promise((resolve) => resolve(Shows.items));
  };
  useEffect(() => {
    fetchShows().then(function (object) {
      setLists(object);
    });
  }, []);
  return (
    <div className={styles.basic}>
      <div className={styles.panel} onClick={() => setActive(!active)}>
        <p className={styles.title}>Shows</p>
      </div>
      {active && (
        <div className={styles.lists}>
            {lists.map((list,i) => (
              <li className={styles.list} key={i}>
                <div>
                  <p>{list.time}</p>
                  <span>{list.location}</span>
                </div>
                {list.available === true ? (
                  <a
                    href={list.link}
                    target="_blank"
                    rel="noreferrer">
                    <Arrow />
                  </a>
                ) : (
                  <p>Sold out</p>
                )}
              </li>
            ))}
            <li className={styles.footer}>
              <Songkick />
            </li>
        </div>
      )}
    </div>
  );
};
