import {
  TbMath,
  TbPlus,
  TbMinus,
  TbEqual,
  TbLetterX,
  TbNumber0,
  TbNumber9,
  TbNumber8,
  TbNumber7,
  TbNumber6,
  TbNumber5,
  TbNumber4,
  TbNumber3,
  TbNumber2,
  TbNumber1,
  TbDivide,
  TbLetterC,
} from "react-icons/tb";
import { AiOutlineCloudSync } from "react-icons/ai";
import {
  BsLightbulb,
  BsInfoCircle,
  BsBackspace,
  BsClockHistory,
  BsGear,
  BsDot,
} from "react-icons/bs";
import { useState } from "react";
export const DisNum_Oper = (
  key: number,
  updateCalc: any,
  Styles: any
): JSX.Element => {
  let numbers = [
    <button
      key={0}
      className={Styles.zero}
      onClick={() => {
        updateCalc("0");
      }}
    >
      <TbNumber0 />
    </button>,
    <button
      key={1}
      className={Styles.one}
      onClick={() => {
        updateCalc("1");
      }}
    >
      <TbNumber1 />
    </button>,
    <button
      key={2}
      className={Styles.two}
      onClick={() => {
        updateCalc("2");
      }}
    >
      <TbNumber2 />
    </button>,
    <button
      key={3}
      className={Styles.three}
      onClick={() => {
        updateCalc("3");
      }}
    >
      <TbNumber3 />
    </button>,
    <button
      key={4}
      className={Styles.four}
      onClick={() => {
        updateCalc("4");
      }}
    >
      <TbNumber4 />
    </button>,
    <button
      key={5}
      className={Styles.five}
      onClick={() => {
        updateCalc("5");
      }}
    >
      <TbNumber5 />
    </button>,
    <button
      key={6}
      className={Styles.six}
      onClick={() => {
        updateCalc("6");
      }}
    >
      <TbNumber6 />
    </button>,
    <button
      key={7}
      className={Styles.seven}
      onClick={() => {
        updateCalc("7");
      }}
    >
      <TbNumber7 />
    </button>,
    <button
      key={8}
      className={Styles.eight}
      onClick={() => {
        updateCalc("8");
      }}
    >
      <TbNumber8 />
    </button>,
    <button
      key={9}
      className={Styles.nine}
      onClick={() => {
        updateCalc("9");
      }}
    >
      <TbNumber9 />
    </button>,

    <button
      key={10}
      className={Styles.cloud}
      onClick={() => {
        updateCalc("");
      }}
    >
      <AiOutlineCloudSync />
    </button>,
    <button
      key={11}
      className={Styles.dot}
      onClick={() => {
        updateCalc(".");
      }}
    >
      <BsDot />
    </button>,
    <button
      key={12}
      className={Styles.p_m}
      onClick={() => {
        updateCalc("pm");
      }}
    >
      <p>±</p>
    </button>,
  ];
  return numbers[key];
};
export const Operators = (
  key: number,
  operator: any,
  Styles: any
): JSX.Element => {
  let operators = [
    <button
      key={0}
      className={Styles.minus}
      onClick={() => {
        operator("-");
      }}
    >
      <TbMinus />
    </button>,
    <button
      key={1}
      className={Styles.plus}
      onClick={() => {
        operator("+");
      }}
    >
      <TbPlus />
    </button>,
    <button
      key={2}
      className={Styles.b_slash}
      onClick={() => {
        operator("/");
      }}
    >
      <TbDivide />
    </button>,
    <button
      key={3}
      className={Styles.x}
      onClick={() => {
        operator("*");
      }}
    >
      <TbLetterX />
    </button>,
  ];
  return operators[key];
};
export const Equal = (
  Styles: any,
  eqtrack: any,
  setEqtrack: any,
  setResult: any,
  result: string,
  cur: string,
  setCur: any,
  scientific: any,
  setHlog: any,
  h_Log: any,
  createHistoryLog: any
): JSX.Element => {
  const equal = (): void => {
    if (eqtrack) {
      return;
    }
    setEqtrack(true);

    if (scientific) {
      setResult(result + " " + cur);

      if (result !== "") {
        setCur(eval(result + " " + cur));
      } else {
        return;
      }
    } else {
      if (result !== "") {
        setCur("0");
        setResult("");
      } else {
        return;
      }
    }
    setHlog([...h_Log, createHistoryLog()]);
  };
  return (
    <button
      key={"equal"}
      className={Styles.equal}
      onClick={() => {
        if (!eqtrack) {
          equal();
        }
      }}
    >
      <TbEqual />
    </button>
  );
};
export const Clear = (
  Styles: any,
  setCur: any,
  setResult: any,
  setHlog: any
): JSX.Element => {
  return (
    <button
      key={"clear"}
      className={Styles.c}
      onClick={() => {
        setCur("0");
        setResult("");
        setHlog([]);
      }}
    >
      <TbLetterC />
    </button>
  );
};
export const Delete = (Styles: any, cur: string, setCur: any): JSX.Element => {
  return (
    <button
      key={"delete"}
      className={Styles.back}
      onClick={() => {
        if (cur.length === 1) {
          setCur("0");
        } else {
          setCur(cur.slice(0, -1));
        }
      }}
    >
      <BsBackspace />
    </button>
  );
};
export const Scie = (
  scientific: boolean,
  setScie: any,
  Styles: any
): JSX.Element => {
  let [pushed, setPushed] = useState("#00000000");
  let handlePush = () => {
    pushed === "#00000000" ? setPushed("#00000025") : setPushed("#00000000");
  };
  return (
    <button
      key={"scie"}
      className={Styles.n_root}
      style={{ backgroundColor: pushed }}
      onClick={() => {
        setScie(!scientific);
        handlePush();
      }}
    >
      <TbMath />
    </button>
  );
};
export const History_btn = (
  history: boolean,
  setHistory: any,
  Styles: any
): JSX.Element => {
  let [pushed, setPushed] = useState("#00000000");
  let handlePush = () => {
    pushed === "#00000000" ? setPushed("#00000025") : setPushed("#00000000");
  };
  return (
    <button
      key={"history"}
      className={Styles.history_icon}
      style={{ background: pushed }}
      onClick={() => {
        setHistory(!history);
        handlePush();
      }}
    >
      <BsClockHistory />
    </button>
  );
};
export const Light = (
  Styles: any,
  setMode: any,
  mode: boolean
): JSX.Element => {
  const [pushed, setPushed] = useState("#00000000");
  const handlePush = () => {
    pushed === "#00000000" ? setPushed("#00000025") : setPushed("#00000000");
  };
  return (
    <button
      key={"light"}
      className={Styles.mode}
      style={{ background: pushed }}
      onClick={() => {
        setMode(!mode);
        handlePush();
      }}
    >
      <BsLightbulb />
    </button>
  );
};
export const SettingsIcon = (Styles: any, setSettings: any): JSX.Element => {
  return (
    <button
      key={"settings"}
      className={Styles.settings}
      onClick={() => {
        setSettings("flex");
      }}
    >
      <BsGear />
    </button>
  );
};
export const Info_btn = (Styles: any, setInfo: any): JSX.Element => {
  return (
    <button
      key={"info"}
      className={Styles.about_me}
      onClick={() => {
        setInfo("flex");
      }}
    >
      <BsInfoCircle />
    </button>
  );
};
