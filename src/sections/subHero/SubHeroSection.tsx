import style from "./subHeroSection.module.css";
import LeftHeroSub from "../../assets/LeftHeroSub";
import Button from "../../components/botton/Button";
import can from "../../assets/images/can.png";
import candy from "../../assets/images/candy.png";

const SubHeroSection = () => {
  return (
    <div className={style.subHeroSection}>
      <div className={style.innerContainer}>
        <div className={style.left}>
          <LeftHeroSub />
          <div className={style.leftBtns}>
            <Button variant="secondary" label="Get Started" />
            <Button variant="primary" label="Learn more" />
          </div>
        </div>
        <div className={style.right}>
          <div className={style.rightTop}>
          <img src={candy} alt="candy" />
           
          </div>
          <div className={style.rightBottom}>
          <img src={can} alt="can" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubHeroSection;
