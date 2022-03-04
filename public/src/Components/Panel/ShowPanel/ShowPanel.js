import React, { useState, useEffect } from "react";
import styles from "../Panel.module.scss";
import { Shows } from "../../../data";
import { Arrow } from "../Arrow";
import { Songkick } from "../Songkick";

export default function ShowPanel() {
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
        <span>Shows</span>
      </div>
      {active && (
        <div className={styles.lists}>
          <ul>
            {lists.map((list, index) => (
              <li className={styles.list}>
                <div>
                  <p>{list.time}</p>
                  <span>{list.location}</span>
                </div>
                <Arrow />
              </li>
            ))}
            <li className={styles.footer}>
              <Songkick />
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
