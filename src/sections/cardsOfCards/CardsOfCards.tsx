import React from "react";
import style from "./cardsOfCards.module.css";
import MiniFirstCard from "../../components/miniFirstCard/MiniFirstCard";
import image1 from "../../assets/images/image1.png";
import image2 from "../../assets/images/image2.png";
import image3 from "../../assets/images/image3.png";
import image4 from "../../assets/images/image4.png";
import image5 from "../../assets/images/image5.png";
import Button from "../../components/botton/Button";

const miniCardData = [
  {
    description: "Exclusive NFT",
    price: "5.2 ETH",
    time: "12:30 min left",
    noPeopleBidding: 8,
    islike: true,
    image: image1,
  },
  {
    description: "Limited Edition",
    price: "3.1 ETH",
    time: "25:45 min left",
    noPeopleBidding: 5,
    islike: false,
    image: image2,
  },
  {
    description: "Rare Artwork",
    price: "7.4 ETH",
    time: "8:15 min left",
    noPeopleBidding: 12,
    islike: true,
    image: image3,
  },
  {
    description: "Crypto Collectible",
    price: "4.9 ETH",
    time: "19:00 min left",
    noPeopleBidding: 6,
    islike: false,
    image: image4,
  },

  // {
  //   description: "Crypto Collectible",
  //   price: "4.9 ETH",
  //   time: "19:00 min left",
  //   noPeopleBidding: 6,
  //   islike: false,
  //   image: image5,
  // },
];

const CardsOfCards = () => {
  return (
    <div className={style.cardsOfCards}>
      <div className={style.innerContainer}>
       
          <CardsContainer components={<MiniCards />} />
      
      </div>
    </div>
  );
};

export default CardsOfCards;

const MiniCards = () => {
  return (
    <div className={style.miniCards}>
      {miniCardData.map((item, index) => (
        <MiniFirstCard
          key={index}
          description={item.description}
          price={item.price}
          time={item.time}
          noPeopleBidding={item.noPeopleBidding}
          islike={item.islike}
          image={item.image}
        />
      ))}
    </div>
  );
};

interface components {
  components: React.ReactNode;
}

const CardsContainer: React.FC<components> = ({ components }) => {
  return (
    <div className={style.cardsContainer}>
      <div>
        <h2>Top NFT at a lower price</h2>
        {components}
        <Button variant="block-primary" label="Show me more" />
      </div>
    </div>
  );
};
