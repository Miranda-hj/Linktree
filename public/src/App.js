import React, { useState, useEffect } from "react";
import { Header } from "./Components/Header/Header";
import { Footer } from "./Components/Footer/Footer";
import ShowPanel from "./Components/Panel/ShowPanel/ShowPanel";

import styles from "./App.module.scss";

export default function App() {
  return (
    <div className={styles.basic}>
      <Header />
      <ShowPanel title={"Shows"} />
      {/* <Panel title={"Music"} />
      <Panel title={"News"} /> */}
      <Footer />
    </div>
  );
}
