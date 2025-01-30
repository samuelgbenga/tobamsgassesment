import React from "react";
import style from "./miniFirstCard.module.css";
import { MiniFirstCardProps } from "../../interface/interface";
import LikeIcon from "../../assets/LikeIcon";
import NotLikeIcon from "../../assets/NotLikeIcon";
import TimeIcon from "../../assets/TimeIcon";

const MiniFirstCard: React.FC<MiniFirstCardProps> = ({
  price,
  noPeopleBidding,
  islike,
  image,
  time,
  description,
}) => {
  return (
    <div className={style.miniFirstCard}>
      <div className={style.image}>
        <img src={image} alt="alternative" />
      </div>
      <div className={style.right}>
        <div>{description}</div>
        <div>
          <div>
            <span>
              <TimeIcon />
            </span>
            <span>{time}</span>
          </div>{" "}
          <span>{price}</span>
        </div>
        <div>
          <span>{noPeopleBidding} people are bidding</span>
          {islike ? <LikeIcon /> : <NotLikeIcon />}
        </div>
      </div>
    </div>
  );
};

export default MiniFirstCard;
