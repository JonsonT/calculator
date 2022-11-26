import Styles from "../styles/sass/calc.module.scss";
import Scientific from "../components/scientific";
import React, { useState } from "react";
import History from "../components/history";
import {
  DisNum_Oper,
  Info_btn,
  Equal,
  Clear,
  Delete,
  Scie,
  History_btn,
  Light,
  SettingsIcon,
} from "../components/buttons";
export default function Calculator(setInfo: any, setSettings: any) {
  const [mode, setMode] = useState<boolean>(false);
  const display_bg = (mode: boolean) => {
    return mode ? "rgba(130, 128, 107, 0.803)" : "rgba(0, 0, 0, 0.503)";
  };
  const [eqtrack, setEqtrack] = useState<boolean>(false);
  const [h_Log, setHlog] = useState<any>([]);
  const [history, setHistory] = useState<boolean>(true);
  const createHistoryLog = (): JSX.Element => {
    return React.createElement(
      "div",
      { className: Styles.history_log },
      result + " " + cur + " = " + eval(result + " " + cur)
    );
  };
  const [cur, setCur] = useState<string>("0");
  const [result, setResult] = useState<string>("");
  const updateCalc = (value: string): void => {
    if (["^2", "sqr2", "powx", "sqrx", "pi"].indexOf(value) !== -1) {
      if (cur !== "0") {
        if (value === "^2") {
          let x = parseInt(cur);
        }
      }
    }
    if (value === "pm") {
      if (eqtrack) {
        return;
      }
      if (cur !== "0") {
        if (cur[0] === "-") {
          setCur(cur.substring(1));
        } else {
          setCur("-" + cur);
        }
      }
      return;
    }
    if (value === ".") {
      if (eqtrack) {
        setCur("0.");
        setResult("");
        setEqtrack(false);
        return;
      } else if (cur.indexOf(".") === -1 && !eqtrack) {
        setCur(cur + value);
        return;
      }
    } else if (["+", "-", "*", "/"].indexOf(value) > -1) {
      if (scientific) {
        if (eqtrack) {
          setResult(cur + value);
          setCur("0");
          setEqtrack(false);
          return;
        }
        if (result === "") {
          setResult(cur + " " + value);
        } else {
          setResult(result + " " + cur + " " + value);
        }
      } else {
        if (result === "") {
          setResult(cur + " " + value);
        } else {
          setResult(eval(result + " " + cur) + " " + value);
        }
      }
      setCur("0");
    } else {
      if (eqtrack) {
        setCur(value);
        setResult("");
        setEqtrack(false);
        return;
      } else if (cur === "0") {
        setCur(value);
      } else {
        if (cur.length < 20) {
          setCur(cur + value);
        }
      }
    }
  };
  const [scientific, setScie] = useState<boolean>(true);

  return (
    <>
      {" "}
      {History(history, h_Log, Styles)}
      <div className={Styles.main_mid}>
        <div className={Styles.screen_rows}>
          {Info_btn(Styles, setInfo)}
          <div className={Styles.my_calc}>My calculator</div>
          {SettingsIcon(Styles, setSettings)}

          {Light(Styles, setMode, mode)}
          <div
            className={Styles.display}
            style={{ background: display_bg(mode) }}
          >
            <div className={Styles.display_result}>{result}</div>
            <div className={Styles.display_cur}>{cur}</div>
          </div>
          {Delete(Styles, cur, setCur)}

          {History_btn(history, setHistory, Styles)}
          {Clear(Styles, setCur, setResult, setHlog)}
          {DisNum_Oper(13, updateCalc, Styles)}
        </div>
        <div className={Styles.numbers_rows}>
          <div className={Styles.top_col_numbers}>
            {Scie(scientific, setScie, Styles)}
            {DisNum_Oper(7, updateCalc, Styles)}
            {DisNum_Oper(8, updateCalc, Styles)}
            {DisNum_Oper(9, updateCalc, Styles)}
            {DisNum_Oper(14, updateCalc, Styles)}
          </div>
          <div className={Styles.mid_col_numbers}>
            {DisNum_Oper(10, updateCalc, Styles)}
            {DisNum_Oper(4, updateCalc, Styles)}
            {DisNum_Oper(5, updateCalc, Styles)}
            {DisNum_Oper(6, updateCalc, Styles)}
            {DisNum_Oper(12, updateCalc, Styles)}
          </div>
          <div className={Styles.bot_col_numbers}>
            <button className={Styles.empty2} id={Styles.empty}></button>
            {DisNum_Oper(1, updateCalc, Styles)}
            {DisNum_Oper(2, updateCalc, Styles)}
            {DisNum_Oper(3, updateCalc, Styles)}
            {DisNum_Oper(11, updateCalc, Styles)}
          </div>
          <div className={Styles.last_col_numbers}>
            <button className={Styles.empty}></button>
            {DisNum_Oper(16, updateCalc, Styles)}
            {DisNum_Oper(0, updateCalc, Styles)}
            {DisNum_Oper(15, updateCalc, Styles)}
            {Equal(
              Styles,
              eqtrack,
              setEqtrack,
              setResult,
              result,
              cur,
              setCur,
              scientific,
              setHlog,
              h_Log,
              createHistoryLog
            )}
            <button className={Styles.space}></button>
          </div>
        </div>
      </div>
      {Scientific(setScie, scientific)}
    </>
  );
}
