import React, { useState, useEffect } from "react";
import styles from "../Panel.module.scss";
import { Media } from "./Media";
import { Music } from "../../../data";
import { Play } from "./Icon/Play";

export const MusicPanel = () => {
  const [active, setActive] = useState(false);
  const [lists, setLists] = useState([]);
  const fetchShows = async () => {
    return new Promise((resolve) => resolve(Music.items));
  };
  useEffect(() => {
    fetchShows().then(function (object) {
      setLists(object);
    });
  }, []);
  return (
    <div className={styles.basic}>
      <div className={styles.panel} onClick={() => setActive(!active)}>
        <p className={styles.title}>Music</p>
      </div>
      {active && (
        <div className={styles.lists}>
          <li className={styles.list}>
            <div className={styles.player}>
              <div className={styles.icon}>
                <img
                  alt=""
                  src="./img/music-img.jpg"
                  className={styles.img}
                  width={80}
                />
                <Play />
              </div>
              {/* Try to build a custom audio player bar, but not sure how to do that, now just an UI*/}
              <audio id="audio">
                <source src="https://www.youtube.com/watch?v=X-yIEMduRXk" />
              </audio>
              <div className={styles.bar} />
            </div>
          </li>
          {lists.map((list, i) => (
            <a
              href={list.link}
              target="_blank"
              rel="noreferrer"
              key={i}
              className={styles.link}>
              <li className={styles.list}>
                <Media name={list.name} icon={list.icon} />
              </li>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};
