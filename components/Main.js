import React from "react";
import styles from "./Main.module.css";
import Links from "../components/Links";
import Headline from "../components/Headline";

const Main = ({ title }) => {
  return (
    <main className={styles.main}>
      <Headline title={title} />
      <Links />
    </main>
  );
};

export default Main;
