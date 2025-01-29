import React from "react";
import style from "./firstCard.module.css";
import FirstCardFooter from "./FirstCardFooter";
import { FirstCardProps } from "../../interface/interface";
import TimeIcon from "../../assets/TimeIcon";

const FirstCard: React.FC<FirstCardProps> = ({
  description,
  price,
  time,
  variant,
  image,
  noOfLike,
  noPeopleBidding,
  islike
}) => {
  const firstCard = `${style.firstCard} ${style[variant]}`;

  return (
    <div className={firstCard}>
      <div className={style.image}>
        <img src={image} alt="alternative" />
      </div>
      <div className={style.price}>
        <span>{description}</span>
        <span>{price}</span>
      </div>
      <div className={style.time}><TimeIcon/><span>{time}</span></div>
      <div>
        <FirstCardFooter noOfLike={noOfLike} noPeopleBidding={noPeopleBidding}  islike={islike} />
      </div>
    </div>
  );
};

export default FirstCard;
