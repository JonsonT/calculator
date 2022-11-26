import React from "react";
import { BsClockHistory } from "react-icons/bs";
const History = (history: boolean, h_Log: any, Styles: any) => {
  return history ? (
    <div className={Styles.main_left}>
      <div className={Styles.header}>
        <BsClockHistory />
        <p>Operation log</p>
      </div>
      <div className={Styles.history_display}>{h_Log}</div>
    </div>
  ) : (
    <div
      className={Styles.none}
      style={{ width: "100%", height: "100%" }}
    ></div>
  );
};

export default History;
