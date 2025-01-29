import React from "react";
import style from "./firstCard.module.css";
import { FirstCardFooterProps } from "../../interface/interface";
import LikeIcon from "../../assets/LikeIcon";
import NotLikeIcon from "../../assets/NotLikeIcon";

const FirstCardFooter: React.FC<FirstCardFooterProps> = ({
  noOfLike,
  noPeopleBidding,
  islike,
}) => {
  return (
    <div className={style.firstCardFooter}>
      <div>
        images <span className={style.space}></span> {noPeopleBidding}
      </div>
      <div>
        {islike ? <LikeIcon /> : <NotLikeIcon />}{" "}
        <span className={style.space}></span>
        {noOfLike}
      </div>
    </div>
  );
};

export default FirstCardFooter;
