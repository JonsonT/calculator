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
} from "react-icons/Tb";
import { AiOutlineCloudSync } from "react-icons/Ai";
import {
  BsLightbulb,
  BsInfoCircle,
  BsBackspace,
  BsClockHistory,
  BsGear,
  BsDot,
} from "react-icons/Bs";

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
      className={Styles.minus}
      onClick={() => {
        updateCalc("-");
      }}
    >
      <TbMinus />
    </button>,
    <button
      key={12}
      className={Styles.plus}
      onClick={() => {
        updateCalc("+");
      }}
    >
      <TbPlus />
    </button>,
    <button
      key={13}
      className={Styles.b_slash}
      onClick={() => {
        updateCalc("/");
      }}
    >
      <TbDivide />
    </button>,
    <button
      key={14}
      className={Styles.x}
      onClick={() => {
        updateCalc("*");
      }}
    >
      <TbLetterX />
    </button>,
    <button
      key={15}
      className={Styles.dot}
      onClick={() => {
        updateCalc(".");
      }}
    >
      <BsDot />
    </button>,
    <button
      key={16}
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
export const Equal = (Styles: any, equal: any): JSX.Element => {
  return (
    <button
      key={"equal"}
      className={Styles.equal}
      onClick={() => {
        equal();
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
  Styles: any,
  scientific: boolean,
  pushed_bg: any,
  setScie: any
): JSX.Element => {
  return (
    <button
      key={"scie"}
      className={Styles.n_root}
      style={{ background: pushed_bg(scientific) }}
      onClick={() => {
        setScie(!scientific);
      }}
    >
      <TbMath />
    </button>
  );
};
export const History_btn = (
  Styles: any,
  setHistory: any,
  pushed_bg: any,
  history: boolean
): JSX.Element => {
  return (
    <button
      key={"history"}
      className={Styles.history_icon}
      style={{ background: pushed_bg(history) }}
      onClick={() => {
        setHistory(!history);
      }}
    >
      <BsClockHistory />
    </button>
  );
};
export const Light = (
  Styles: any,
  setMode: any,
  mode: boolean,
  pushed_bg: any
): JSX.Element => {
  return (
    <button
      key={"light"}
      className={Styles.mode}
      style={{ background: pushed_bg(mode) }}
      onClick={() => {
        setMode(!mode);
      }}
    >
      <BsLightbulb />
    </button>
  );
};
export const SettingsIcon = (
  Styles: any,
  setSettings: any,
  upDateSettings: any
): JSX.Element => {
  return (
    <button
      key={"settings"}
      className={Styles.settings}
      onClick={() => {
        setSettings(upDateSettings());
      }}
    >
      <BsGear />
    </button>
  );
};
export const Info_btn = (
  Styles: any,
  setInfo: any,
  updateInfo: any
): JSX.Element => {
  return (
    <button
      key={"info"}
      className={Styles.about_me}
      onClick={() => {
        setInfo(updateInfo());
      }}
    >
      <BsInfoCircle />
    </button>
  );
};
