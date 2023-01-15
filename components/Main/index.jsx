import React from "react";
import styles from "./Main.module.css";

import Headline from "../Headline";
import Links from "../Links";

const Main = ({ title }) => {
  return (
    <main className={styles.main}>
      <Headline title={title} />
      <Links/>
    </main>
  );
};

export default Main;
