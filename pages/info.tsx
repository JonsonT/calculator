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
import Info_card from "../components/info_comps/info_card";
const Info = (setInfo: any, info: string): JSX.Element => {
  return (
    <>
      <div className={Styles.info_wrapper} style={{ display: info }}>
        <div className={Styles.info_block}>
          <button
            className={Styles.about_exit_btn}
            onClick={() => {
              setInfo("none");
            }}
          >
            <FiXSquare />
          </button>
          <h2>How To Use</h2>
          <div className={Styles.howtouse}>
            {Info_card(
              BsGear,
              "settings",
              "if you want to change theme or font style",
              Styles.settings_box
            )}
            {Info_card(
              BsClockHistory,
              "history",
              "on/off to view the operation log history",
              Styles.history_info_mode_box
            )}
            {Info_card(
              BsLightbulb,
              "light",
              "make the screen more lighter",
              Styles.light_box
            )}
            {Info_card(
              BsInfoCircle,
              "info",
              "if you want to see the vresion or how to use",
              Styles.info_box
            )}
            {Info_card(
              TbMath,
              "scientific",
              "by default it is on, if you turn it off no math rules will be applied",
              Styles.scientific_info_mode_box
            )}
            {Info_card(
              AiOutlineCloudSync,
              "external mode",
              "if you switch it the calculations will be on 'api.mathjs.org'",
              Styles.external_box
            )}
            {Info_card(
              BsBackspace,
              "delete",
              "delete your last digit",
              Styles.del_box
            )}
            {Info_card(
              TbLetterC,
              "clear",
              "delete everthing including your history log so care..",
              Styles.clear_box
            )}
          </div>
          <div className={Styles.usedlang}>
            <section>
              <p>
                This is a simple calculator app that can be used to perform
                basic or scientific calculations.
              </p>
              <p>The app is built using React and Typescript.</p>
              <p>The app is fully responsive and can be used on any device.</p>
            </section>
          </div>
          <div className={Styles.devinfo}>
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
