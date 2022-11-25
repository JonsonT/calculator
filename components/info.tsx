import { TbMath, TbLetterC } from "react-icons/Tb";
import { AiOutlineCloudSync } from "react-icons/Ai";
import {
  BsLightbulb,
  BsInfoCircle,
  BsBackspace,
  BsClockHistory,
  BsGear,
} from "react-icons/Bs";
import { FiXSquare } from "react-icons/Fi";
import Styles from "../styles/sass/info.module.scss";
const Info = (setInfo: any, updateInfo: any): JSX.Element => {
  return (
    <>
      <div className={Styles.about_block}>
        <button
          className={Styles.about_exit_btn}
          onClick={() => {
            setInfo(updateInfo());
          }}
        >
          <FiXSquare />
        </button>
        <div className={Styles.howtouse}>
          <h2>How To Use</h2>
          <p className={Styles.settings_box}>
            <BsGear />
            <span>settings</span>if you want to change theme or font style
          </p>
          <p className={Styles.history_info_mode_box}>
            <BsClockHistory />
            <span>history mode</span>
            on/off to view the operation log <br />
            you can view the log even if your mode was off
          </p>
          <p className={Styles.light_box}>
            <BsLightbulb />
            <span>light</span>make the screen more lighter
          </p>
          <p className={Styles.info_box}>
            <BsInfoCircle />
            <span>info</span>if you dont remmber something or you want to see
            the vresion
          </p>
          <p className={Styles.scientific_info_mode_box}>
            <TbMath />
            <span>scientific</span>
            <h5>Off</h5>not using math rules, for fast & basic use
            <h5>On</h5>using math rules
          </p>
          <p className={Styles.external_box}>
            <AiOutlineCloudSync />
            <span>external mode</span>if you switch it the calculations will be
            on <em>api.mathjs.org</em>
          </p>
          <p className={Styles.del_box}>
            <BsBackspace />
            <span>delete</span> delete your last digit
          </p>
          <p className={Styles.clear_box}>
            <TbLetterC />
            <span>clear</span>delete everthing including your history log so
            care..
          </p>
        </div>
        <div className={Styles.usedlang}>
          <p>
            This is a simple calculator app that can be used to perform basic or
            scientific calculations.
            <br />
            <br /> The app is built using React and Typescript.
            <br /> <br />
            The app is fully responsive and can be used on any device.
          </p>
        </div>
        <div className={Styles.devifno}>
          <h3>Dev info</h3>
          <div className={Styles.devinfo_content}>
            <p>By: Jonik Shafir</p>
            <p>Awasome Calculator</p>
            <p>version #TODO </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Info;
