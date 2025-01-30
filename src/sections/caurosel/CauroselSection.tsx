
import FirstCard from "../../components/firstCard/FirstCard";
import image1 from "../../assets/images/image1.png";
import image2 from "../../assets/images/image2.png";
import image3 from "../../assets/images/image3.png";

import imageB1 from "../../assets/images/imageB1.png";
import imageB2 from "../../assets/images/imageB2.png";
import style from "./cauroselSection.module.css";
import { FirstCardProps } from "../../interface/interface";

const CauroselSection = () => {
  const firstCards: FirstCardProps[] = [
    {
      description: "Winner",
      price: "10. ET",
      variant: "border",
      time: "21:12 min left",
      image: image1,
      noOfLike: 12,
      noPeopleBidding: 4,
      islike: true,
      bidders: [imageB1, imageB2],
    },
    {
      description: "Champion",
      price: "15. ET",
      variant: "border",
      time: "15:30 min left",
      image: image2,
      noOfLike: 20,
      noPeopleBidding: 7,
      islike: false,
      bidders: [imageB2, imageB1],
    },
    {
      description: "Contender",
      price: "8. ET",
      variant: "border",
      time: "30:00 min left",
      image: image3,
      noOfLike: 5,
      noPeopleBidding: 2,
      islike: true,
      bidders: [imageB1, imageB2],
    },
    // {
    //   description: "Elite",
    //   price: "12. ET",
    //   variant: "border",
    //   time: "10:45 min left",
    //   image: image4,
    //   noOfLike: 17,
    //   noPeopleBidding: 5,
    //   islike: false,
    //   bidders: [imageB1, imageB2],
    // },
    // {
    //   description: "Master",
    //   price: "20. ET",
    //   variant: "border",
    //   time: "05:12 min left",
    //   image: image5,
    //   noOfLike: 30,
    //   noPeopleBidding: 10,
    //   islike: true,
    //   bidders: [imageB1, imageB2],
    // },
  ];

  return (
    <div className={style.caurosel}>
      <h2>Latest live auctions</h2>
      <div className={style.innerCaurosel}>
        {firstCards.map((card, index) => (
          <FirstCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default CauroselSection;
