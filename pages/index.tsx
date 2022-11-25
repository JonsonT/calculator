import Calc from "../components/calc";
import Styles from "../styles/sass/index.module.scss";
import Layout from "./layout";
export default function Home() {
  return (
    <>
      <Layout />
      <div className={Styles.body}>
        <div className={Styles.wrap}>
          <Calc />
        </div>
      </div>
    </>
  );
}
