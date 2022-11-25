import Styles from "../styles/sass/layout.module.scss";
import React from "react";

const Layout = (bg: any, dark_light: any) => {
  return (
    <>
      <div
        className={Styles.gradient}
        style={{ background: bg + " !importent" }}
      ></div>
      <div>
        <div className={Styles.wave}></div>
        <div className={Styles.wave}></div>
        <div className={Styles.wave}></div>
      </div>
    </>
  );
};

export default Layout;
