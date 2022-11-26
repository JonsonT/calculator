import Styles from "../styles/sass/layout.module.scss";
import React from "react";

const Layout = () => {
  return (
    <>
      <div className={Styles.gradient} style={{ background: "#444" }}></div>
      <div>
        <div className={Styles.wave}></div>
        <div className={Styles.wave}></div>
        <div className={Styles.wave}></div>
      </div>
    </>
  );
};

export default Layout;
