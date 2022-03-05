import React, { useState, useEffect } from "react";
import styles from "./App.module.scss";
import { Header } from "./Components/Header/Header";
import { Footer } from "./Components/Footer/Footer";
import { ShowPanel }  from "./Components/Panel/ShowPanel/ShowPanel";
import { MusicPanel } from "./Components/Panel/MusicPanel/MusicPanel";
import { Panel } from "./Components/Panel/Panel";
import { News } from "./data";

export default function App() {
  const [lists, setLists] = useState([]);
  const fetchShows = async () => {
    return new Promise((resolve) => resolve(News.items));
  };
  useEffect(() => {
    fetchShows().then(function (object) {
      setLists(object);
    });
  }, []);
  return (
    <div className={styles.basic}>
      <Header />
      {lists.map((list,i) => (
      <Panel key={i} link={list.link} title={list.title} img={list.img}/>
      ))}
      <ShowPanel />
      <MusicPanel />
      <Footer />
    </div>
  );
}
