import React from "react";
import style from "./BigCard.module.css";
import PriceCard from "../../components/PriceCard/PriceCard";
import AvatarIcon from "../../assets/AvatarIcon";
import WalletIcon from "../../assets/WalletIcon";
import BarCodeIcon from "../../assets/BarCodeIcon";
import CanvasIcon from "../../assets/CanvasIcon";

const priceData = [
  { description: "ETH Wallet", price: 123.3, emoji: <WalletIcon /> },
  { description: "NFT Barcode", price: 99.99, emoji: <BarCodeIcon /> },
  { description: "Crypto Canvas", price: 145.5, emoji: <CanvasIcon /> },
  { description: "ETH Avatar", price: 210.75, emoji: <AvatarIcon /> },
];

const BigCard = () => {
  return (
    <div className={style.bigCard}>
      <div className={style.innerContainer}>
        <div className={style.priceCard}>
          {priceData.map((item, index) => (
            <PriceCard
              key={index}
              description={item.description}
              price={item.price}
              emoji={item.emoji}
            />
          ))}
        </div>
        <div className={style.theBigCard}>big card</div>
      </div>
    </div>
  );
};

export default BigCard;
