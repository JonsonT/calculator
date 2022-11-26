import Styles from "../styles/sass/index.module.scss";
import Info from "./info";
import Settings from "./settings";
import Layout from "./layout";
import Calculator from "../components/calculator";
import React, { useState } from "react";
export default function Home() {
  const [info, setInfo] = useState<string>("none");
  const [settingS, setSettings] = useState<string>("none");
  return (
    <>
      <Layout />
      <div className={Styles.body}>
        <div className={Styles.wrap}>
          {Settings(setSettings, settingS)}
          {Info(setInfo, info)}
          <div className={Styles.main}>{Calculator(setInfo, setSettings)}</div>
        </div>
      </div>
    </>
  );
}
