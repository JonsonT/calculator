import { TbMath, TbLetterC } from "react-icons/tb";
import { AiOutlineCloudSync } from "react-icons/ai";
import {
  BsLightbulb,
  BsInfoCircle,
  BsBackspace,
  BsClockHistory,
  BsGear,
} from "react-icons/bs";
import { FiXSquare } from "react-icons/fi";
import Styles from "../styles/sass/info.module.scss";
const Info = (setInfo: any, info: string): JSX.Element => {
  return (
    <>
      <div className={Styles.info_block} style={{ display: info }}>
        <div className={Styles.about_block}>
          <button
            className={Styles.about_exit_btn}
            onClick={() => {
              setInfo("none");
            }}
          >
            <FiXSquare />
          </button>
          <div className={Styles.howtouse}>
            <h2>How To Use</h2>
            <section className={Styles.settings_box}>
              <BsGear />
              <span>settings</span>if you want to change theme or font style
            </section>
            <section className={Styles.history_info_mode_box}>
              <BsClockHistory />
              <span>history mode</span>
              on/off to view the operation log <br />
              you can view the log even if your mode was off
            </section>
            <section className={Styles.light_box}>
              <BsLightbulb />
              <span>light</span>make the screen more lighter
            </section>
            <section className={Styles.info_box}>
              <BsInfoCircle />
              <span>info</span>if you dont remmber something or you want to see
              the vresion
            </section>
            <section className={Styles.scientific_info_mode_box}>
              <TbMath />
              <span>scientific</span>
              <h5>Off</h5>not using math rules, for fast & basic use
              <h5>On</h5>using math rules
            </section>
            <section className={Styles.external_box}>
              <AiOutlineCloudSync />
              <span>external mode</span>if you switch it the calculations will
              be on <em>api.mathjs.org</em>
            </section>
            <section className={Styles.del_box}>
              <BsBackspace />
              <span>delete</span> delete your last digit
            </section>
            <section className={Styles.clear_box}>
              <TbLetterC />
              <span>clear</span>delete everthing including your history log so
              care..
            </section>
          </div>
          <div className={Styles.usedlang}>
            <section>
              This is a simple calculator app that can be used to perform basic
              or scientific calculations.
              <br />
              <br /> The app is built using React and Typescript.
              <br /> <br />
              The app is fully responsive and can be used on any device.
            </section>
          </div>
          <div className={Styles.devifno}>
            <h3>Dev info</h3>
            <div className={Styles.devinfo_content}>
              <section>By: Jonik Shafir</section>
              <section>Awasome Calculator</section>
              <section>version #TODO </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Info;
