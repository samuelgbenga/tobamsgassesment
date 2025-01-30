import React from "react";
import style from "./firstCard.module.css";
import { FirstCardFooterProps } from "../../interface/interface";
import LikeIcon from "../../assets/LikeIcon";
import NotLikeIcon from "../../assets/NotLikeIcon";

const FirstCardFooter: React.FC<FirstCardFooterProps> = ({
  noOfLike,
  noPeopleBidding,
  islike,
  bidders,
}) => {
  return (
    <div className={style.firstCardFooter}>
      <div className={style.biddersContainer}>
        <div className={style.bidders}>
          {bidders && bidders.map((bidder, index) => {
            return (
              <span key={index}>
                <img src={bidder} alt="img" />
              </span>
            );
          })}
         
        </div>{" "} 
        <span>{noPeopleBidding}</span> 
        people are bidding
      </div>
      <div className={style.theLikes}>
        {islike ? <LikeIcon /> : <NotLikeIcon />}{" "}
        <span>{noOfLike}</span>
        
      </div>
    </div>
  );
};

export default FirstCardFooter;
