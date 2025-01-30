
import style from "./secondSubHero.module.css";
import SecondSubHeroLeft from "../../assets/SecondSubHeroLeft";
import SecondSubHeroIcon from "../../assets/SecondSubHeroIcon";
import Button from "../../components/botton/Button";
import cloud from "../../assets/images/cloud.png";
import emoji from "../../assets/images/emoji.png";

const SecondSubHero = () => {
  return (
    <div className={style.secondSubHero}>
      <div className={style.innerContainer}>
        <div className={style.left}>

        <div className={style.leftTop}>
          <img src={cloud} alt="candy" />
           
          </div>
          <div className={style.leftBottom}>
          <img src={emoji} alt="can" />
          </div>

        </div>
        <div className={style.right}>
          <div>
            <SecondSubHeroLeft />
          </div>
          <div>
            <SecondSubHeroIcon />
          </div>
          <div>
            <Button variant="secondary" label="Get Started" />
            <Button variant="primary" label="Learn more" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondSubHero;
