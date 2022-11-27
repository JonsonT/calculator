import Styles from "../styles/sass/index.module.scss";
import Info from "./info";
import Settings from "./settings";
import Layout from "./layout";
import Calculator from "../components/calculator";
import React, { useState } from "react";
export default function Home() {
  const bgcoloros = {
    bg1: "#65005ecc",
    bg2: "#3c84cecc",
    bg3: "#30eee2cc",
    bg4: "linear-gradient(315deg,#1a2a6c 3%, #b21f1f 38%, #fdbb2d 68%, #b21f1f 98%)",
    bg5: "linear-gradient(315deg,rgba(101, 0, 94, 1) 3%,rgba(60, 132, 206, 1) 38%,rgba(48, 238, 226, 1) 68%,rgba(255, 25, 25, 1) 98%)",
  };
  const fonts = {
    ft1: "italic",
    ft2: "serif",
    ft3: "monospace",
    ft4: "cursive",
    ft5: "Verdana",
  };
  const [info, setInfo] = useState<string>("none");
  const [settingS, setSettings] = useState<string>("none");
  const [bg, setBg] = useState<string>(bgcoloros.bg5);
  const [ft, setFt] = useState<string>("sans-serif");
  return (
    <>
      {Layout(bg)}
      <div className={Styles.body}>
        <div className={Styles.wrap}>
          {Settings(setSettings, settingS, bgcoloros, fonts, ft, setBg, setFt)}
          {Info(setInfo, info)}
          <div className={Styles.main}>{Calculator(setInfo, setSettings)}</div>
        </div>
      </div>
    </>
  );
}
