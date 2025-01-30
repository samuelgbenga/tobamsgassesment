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
  islike,
  bidders,
  size
}) => {
  const firstCard = `${style.firstCard} ${style[variant]}`;

  const firstCardClass = size ? `${firstCard} ${style[size]}` : firstCard;

  return (
    <div className={firstCardClass}>
      <div className={style.image}>
        <img src={image} alt="alternative" />
      </div>
      <div className={style.price}>
        <span>{description}</span>
        <span>{price}</span>
      </div>
      <div className={style.time}><TimeIcon/><span>{time}</span></div>
      <div>
        <FirstCardFooter noOfLike={noOfLike} noPeopleBidding={noPeopleBidding}  islike={islike} bidders={bidders} />
      </div>
    </div>
  );
};

export default FirstCard;
