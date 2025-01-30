import Input from "../../components/input/Input";
import CaretDown from "../../assets/CaretDown";
import SearchIcon from "../../assets/SearchIcon";
import style from "./heroSection.module.css";
import Brand from "../../assets/Brand";
import RiteIcon from "../../assets/RiteIcon";
import NikeIcon from "../../assets/NikeIcon";
import AddidasIcon from "../../assets/AddidasIcon";
import HollandIcon from "../../assets/HollandIcon";

const HeroSection = () => {
  const buttonElem = (
    <div className={style.buttonElem}>
      <span>Category</span>
      <span>
        <CaretDown />
      </span>
      <span>
        <SearchIcon />
      </span>
    </div>
  );

  return (
    <div className={style.hero}>
      <div className={style.innerBox}>
        <div className={style.brand}>
          <Brand />
        </div>
        <div className={style.searchbarIcon}>
          <div>
            <Input
              placeholder="items, collections and creators"
              variant="largeInput"
              button={buttonElem}
            />
          </div>
          <div className={style.icons}>
            <span>
              <RiteIcon />
            </span>
            <span>
              <AddidasIcon />
            </span>
            <span>
              <NikeIcon />
            </span>
            <span>
              <HollandIcon />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
