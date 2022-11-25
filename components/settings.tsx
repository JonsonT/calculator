import Styles from "../styles/sass/settings.module.scss";
import { FiXSquare } from "react-icons/fi";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import React, { useState } from "react";
const Settings = (setSettings: any, upDateSettings: any): JSX.Element => {
  const [bg, setBg] = useState<string>("spaciel");
  const [ft, setFt] = useState<string>("sans-serif");
  const [dark_light, setDarkLight] = useState<string>("light");
  return (
    <>
      <div className={Styles.settings_block}>
        <main>
          <button
            id={Styles.close}
            className={Styles.close_btn}
            onClick={() => {
              setSettings(upDateSettings());
            }}
          >
            <FiXSquare className={Styles.exit} />
          </button>
          <div className={Styles.background_choose_block}>
            <div>
              <p className={Styles.bg1}></p>
              <input
                type="radio"
                name="background"
                value="bg1"
                onChange={() => {
                  setBg("bg1");
                }}
              />
            </div>
            <div>
              <p className={Styles.bg2}></p>
              <input
                type="radio"
                name="background"
                value="bg2"
                onChange={() => {
                  setBg("bg2");
                }}
              />
            </div>
            <div>
              <p className={Styles.bg3}></p>
              <input
                type="radio"
                name="background"
                value="bg3"
                onChange={() => {
                  setBg("bg3");
                }}
              />
            </div>
            <div>
              <p className={Styles.bg4}></p>
              <input
                type="radio"
                name="background"
                value="bg4"
                onChange={() => {
                  setBg("bg4");
                }}
              />
            </div>
            <div>
              <p className={Styles.bg5}></p>
              <input
                type="radio"
                name="background"
                value="bg5"
                checked={true}
                onChange={() => {
                  setBg("bg5");
                }}
              />
            </div>
          </div>
          <div className={Styles.font_choose_wrapper}>
            <div>
              <p className={Styles.ft1}>a</p>
              <input
                type="radio"
                name="font"
                value="italic"
                onChange={() => {
                  setFt("ft1");
                }}
              />
            </div>
            <div>
              <p className={Styles.ft2}>a</p>
              <input
                type="radio"
                name="font"
                value="sans-serif"
                onChange={() => {
                  setFt("ft2");
                }}
              />
            </div>
            <div>
              <p className={Styles.ft3}>a</p>
              <input
                type="radio"
                name="font"
                value="mono"
                onChange={() => {
                  setFt("ft3");
                }}
              />
            </div>
            <div>
              <p className={Styles.ft4}>a</p>
              <input
                type="radio"
                name="font"
                value="cursive"
                onChange={() => {
                  setFt("ft4");
                }}
              />
            </div>
            <div>
              <p className={Styles.ft5}>a</p>
              <input
                type="radio"
                name="font"
                value="special"
                checked={true}
                onChange={() => {
                  setFt("ft5");
                }}
              />
            </div>
          </div>
          <div className={Styles.dark_light_mode}>
            <div className={Styles.d_l_mode}>
              <BsFillMoonFill />
              <input
                type="radio"
                name="d_l_mode"
                value="dark"
                onChange={() => {
                  setDarkLight("dark");
                }}
              />
            </div>
            <div className={Styles.d_l_mode}>
              <BsFillSunFill />
              <input
                type="radio"
                name="d_l_mode"
                value="light"
                checked={true}
                onChange={() => {
                  setDarkLight("light");
                }}
              />
            </div>
          </div>
          <button
            className={Styles.save}
            onSubmit={() => {
              setDarkLight("light");
            }}
          >
            Submit
          </button>
        </main>
      </div>
    </>
  );
};

export default Settings;
