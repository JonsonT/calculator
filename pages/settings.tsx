import Styles from "../styles/sass/settings.module.scss";
import { FiXSquare } from "react-icons/fi";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import React, { useState } from "react";
const Settings = (
  setSettings: any,
  settingS: string,
  bgcoloros: any,
  fonts: any,
  ft: string,
  setBg: any,
  setFt: any
): JSX.Element => {
  return (
    <>
      <div className={Styles.settings_wrapper} style={{ display: settingS }}>
        <div className={Styles.settings_block}>
          <main>
            <button
              id={Styles.close}
              className={Styles.close_btn}
              onClick={() => {
                setSettings("none");
              }}
            >
              <FiXSquare className={Styles.exit} />
            </button>
            <div className={Styles.bgBlock}>
              <p style={{ fontFamily: ft }}>Background colors</p>
              <div className={Styles.background_choose_block}>
                <button
                  className={Styles.bg1}
                  style={{ boxShadow: "0 0 10px 10px #00000045" }}
                  onClick={() => {
                    setBg(bgcoloros.bg1);
                  }}
                ></button>
                <button
                  className={Styles.bg2}
                  style={{ boxShadow: "0 0 10px 10px #00000045" }}
                  onClick={() => {
                    setBg(bgcoloros.bg2);
                  }}
                ></button>
                <button
                  className={Styles.bg3}
                  style={{ boxShadow: "0 0 10px 10px #00000045" }}
                  onClick={() => {
                    setBg(bgcoloros.bg3);
                  }}
                ></button>
                <button
                  className={Styles.bg4}
                  style={{ boxShadow: "0 0 10px 10px #00000045" }}
                  onClick={() => {
                    setBg(bgcoloros.bg4);
                  }}
                ></button>
                <button
                  className={Styles.bg5}
                  style={{ boxShadow: "0 0 10px 10px #00000045" }}
                  onClick={() => {
                    setBg(bgcoloros.bg5);
                  }}
                ></button>
              </div>
            </div>
            <div className={Styles.ftBlock}>
              <p style={{ fontFamily: ft }}>Fonts</p>
              <div className={Styles.font_choose_wrapper}>
                <button
                  className={Styles.ft1}
                  style={{ boxShadow: "0 0 10px 10px #00000045" }}
                  onClick={() => {
                    setFt(fonts.ft1);
                  }}
                >
                  a
                </button>
                <button
                  className={Styles.ft2}
                  style={{ boxShadow: "0 0 10px 10px #00000045" }}
                  onClick={() => {
                    setFt(fonts.ft2);
                  }}
                >
                  a
                </button>
                <button
                  className={Styles.ft3}
                  style={{ boxShadow: "0 0 10px 10px #00000045" }}
                  onClick={() => {
                    setFt(fonts.ft3);
                  }}
                >
                  a
                </button>
                <button
                  className={Styles.ft4}
                  style={{ boxShadow: "0 0 10px 10px #00000045" }}
                  onClick={() => {
                    setFt(fonts.ft4);
                  }}
                >
                  a
                </button>
                <button
                  className={Styles.ft5}
                  style={{ boxShadow: "0 0 10px 10px #00000045" }}
                  onClick={() => {
                    setFt(fonts.ft5);
                  }}
                >
                  a
                </button>
              </div>
            </div>
            <div className={Styles.d_l_block}>
              <p style={{ fontFamily: ft }}>Theme</p>
              <div
                className={Styles.dark_light_mode}
                style={{ boxShadow: "0 0 10px 10px #00000035" }}
              >
                <button
                  className={Styles.d_l_mode}
                  style={{ boxShadow: "0 0 10px 10px #00000035" }}
                  onClick={() => {
                    setBg("#444");
                  }}
                >
                  <BsFillMoonFill />
                </button>
                <button
                  className={Styles.d_l_mode}
                  style={{ boxShadow: "0 0 10px 10px #00000035" }}
                  onClick={() => {
                    setBg("#fff");
                  }}
                >
                  <BsFillSunFill />
                </button>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Settings;
