import Styles from "../styles/sass/layout.module.scss";
import React from "react";

const Layout = (bg: string) => {
  return (
    <>
      <div
        className={Styles.gradient}
        style={{
          background: bg,
          backgroundAttachment: "fixed ",
          backgroundSize: "400% 400% ",
        }}
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
