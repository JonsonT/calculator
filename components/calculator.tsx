import Styles from "../styles/sass/calc.module.scss";
import Scientific from "./calculator_comps/scientific";
import React, { useState } from "react";
import History from "./calculator_comps/history";
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
  Operators,
} from "./calculator_comps/buttons";
export default function Calculator(setInfo: any, setSettings: any) {
  const [mode, setMode] = useState<boolean>(false);
  const display_bg = (mode: boolean) => {
    return mode ? "rgba(130, 128, 107, 0.803)" : "rgba(0, 0, 0, 0.503)";
  };
  const [eqtrack, setEqtrack] = useState<boolean>(false);
  const [h_Log, setHlog] = useState<any>([]);
  const [history, setHistory] = useState<boolean>(true);
  const createHistoryLog = (expression: string | undefined): JSX.Element => {
    return (
      <div className={Styles.history_log} key={Math.random()}>
        {expression !== undefined
          ? expression
          : result + " " + cur + " = " + eval(result + " " + cur)}
      </div>
    );
  };
  const [cur, setCur] = useState<string>("0");
  const [result, setResult] = useState<string>("");
  const operator = (op: string) => {
    if (scieState.length > 0) {
      if (scieState === "pow") {
        setResult(result + " " + op);
        setCur("0");
      } else if (scieState === "sqrt") {
        setResult(cur + " " + op);
        setCur("0");
      }
      setScieState("");
      return;
    }
    if (eqtrack) {
      setResult(cur + op);
      setCur("0");
      setEqtrack(false);
      return;
    }
    if (scientific) {
      if (result === "") {
        setResult(cur + " " + op);
      } else {
        if (
          ["/", "-", "+", "*"].indexOf(result.slice(-1)) === -1 ||
          cur !== "0"
        ) {
          setResult(result + " " + cur + " " + op);
          setCur(eval(result + " " + cur));
          return;
        } else {
          if (cur === "0") {
            setResult(result.slice(0, -1) + op);
            return;
          } else {
            setResult(result + " " + cur + " " + op);
          }
        }
      }
    } else {
      if (result === "") {
        setResult(cur + " " + op);
      } else {
        if (["/", "-", "+", "*"].indexOf(result.slice(-1)) !== -1) {
          setResult(result + " " + cur + " " + op);
        } else {
          setResult(eval(result + " " + cur) + " " + op);
        }
      }
    }
    setCur("0");
  };
  const updateCalc = (value: string): void => {
    if (scieState.length > 0) {
      if (value === ".") {
        createHistoryLog(cur + " " + "=" + " " + result);
        setCur("0.");
        setResult("");
      } else if (value === "pm") {
        return;
      } else {
        createHistoryLog(cur + " " + "=" + " " + result);
        setCur(value);
        setResult("");
      }
      setScieState("");
      return;
    }
    if (["-", "/", "+", "*"].indexOf(result.slice(-1))) {
      if (value === ".") {
        setCur("0.");
      } else {
        setCur(value);
      }
    }
    if (eqtrack) {
      setEqtrack(false);
      if (value === ".") {
        setCur("0.");
        setResult("");
        return;
      }
      if (value === "pm") {
        setCur("0");
        setResult("");
        return;
      }
      setCur(value);
      setResult("");
    }
    if (value === "pm") {
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
      if (cur.indexOf(".") === -1) {
        setCur(cur + value);
        return;
      }
    } else {
      if (cur === "0") {
        setCur(value);
      } else {
        if (cur.length < 20) {
          setCur(cur + value);
        }
      }
    }
  };
  const [scientific, setScie] = useState<boolean>(true);
  const [scieState, setScieState] = useState<string>("");
  const scientificOpers = (value: string): void => {
    if (value === "sqrt") {
      if (!eqtrack) {
        setCur(Math.sqrt(Number(cur)).toString());
        setResult("sqrt(" + cur + ")");
        setScieState("sqrt");
        return;
      }
    }
    if (value === "pow") {
      if (!eqtrack) {
        setCur(cur + "^2");
        setResult(Math.pow(Number(cur), 2).toString());
        setScieState("pow");
        return;
      }
    }
    if (value === "powY") {
      if (!eqtrack) {
        if (cur !== "0") {
          setCur(cur + "^");
          setScieState("powY");
          return;
        }
      }
    }
    if (value === "sqrty") {
      if (eqtrack) {
        setCur(Math.pow(Number(cur), 1 / 3).toString());
        setResult("cbrt(" + cur + ")");
        setEqtrack(false);
        return;
      }
    }
  };
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
          {Operators(2, operator, Styles)}
        </div>
        <div className={Styles.numbers_rows}>
          <div className={Styles.top_col_numbers}>
            {Scie(scientific, setScie, Styles)}
            {DisNum_Oper(7, updateCalc, Styles)}
            {DisNum_Oper(8, updateCalc, Styles)}
            {DisNum_Oper(9, updateCalc, Styles)}
            {Operators(3, operator, Styles)}
          </div>
          <div className={Styles.mid_col_numbers}>
            {DisNum_Oper(10, updateCalc, Styles)}
            {DisNum_Oper(4, updateCalc, Styles)}
            {DisNum_Oper(5, updateCalc, Styles)}
            {DisNum_Oper(6, updateCalc, Styles)}
            {Operators(1, operator, Styles)}
          </div>
          <div className={Styles.bot_col_numbers}>
            <div className={Styles.empty}></div>
            {DisNum_Oper(1, updateCalc, Styles)}
            {DisNum_Oper(2, updateCalc, Styles)}
            {DisNum_Oper(3, updateCalc, Styles)}
            {Operators(0, operator, Styles)}
          </div>
          <div className={Styles.last_col_numbers}>
            <div className={Styles.empty1}></div>
            {DisNum_Oper(12, updateCalc, Styles)}
            {DisNum_Oper(0, updateCalc, Styles)}
            {DisNum_Oper(11, updateCalc, Styles)}
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
            <div className={Styles.empty2}></div>
          </div>
        </div>
      </div>
      {Scientific(scientificOpers, scientific)}
    </>
  );
}
