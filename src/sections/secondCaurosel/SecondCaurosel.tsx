
import { FirstCardProps } from "../../interface/interface";
import image1 from "../../assets/images/image1.png";
import image2 from "../../assets/images/image2.png";
import image3 from "../../assets/images/image3.png";

import style from "./secondCaurosel.module.css";
import FirstCard from "../../components/firstCard/FirstCard";
import Button from "../../components/botton/Button";

const SecondCaurosel = () => {
  const firstCards: FirstCardProps[] = [
    {
      description: "Winner",
      price: "10.ET",
      variant: "noborder",
      time: "21:12 min left",
      image: image1,
      noOfLike: 12,
      noPeopleBidding: 4,
      islike: true,
      size: "small",
    },
    {
      description: "Champion",
      price: "15.ET",
      variant: "noborder",
      time: "15:30 min left",
      image: image2,
      noOfLike: 20,
      noPeopleBidding: 7,
      islike: false,
      size: "small",
    },
    {
      description: "Contender",
      price: "8.ET",
      variant: "noborder",
      time: "30:00 min left",
      image: image3,
      noOfLike: 5,
      noPeopleBidding: 2,
      islike: true,
      size: "small",
    },
    // {
    //   description: "Elite",
    //   price: "12.ET",
    //   variant: "border",
    //   time: "10:45 min left",
    //   image: image4,
    //   noOfLike: 17,
    //   noPeopleBidding: 5,
    //   islike: false,
    //   bidders: [imageB1, imageB2],
    //   size: "small",
    // },
    // {
    //   description: "Master",
    //   price: "20.ET",
    //   variant: "border",
    //   time: "05:12 min left",
    //   image: image5,
    //   noOfLike: 30,
    //   noPeopleBidding: 10,
    //   islike: true,
    //   bidders: [imageB1, imageB2],
    //   size: "small",
    // },
  ];

  return (
    <div className={style.secondCaurosel}>
      <div className={style.innerCaurosel}>
        <h5>OVERLINE</h5>
        <h2>Most popular live auctions</h2>
        <div>
          <Button variant="primary" label="Architecture" />
          <Button variant="primary" label="Photography" />
          <Button variant="primary" label="Games" />
          <Button variant="primary" label="Music" />
        </div>
        <div className={style.mainCarousel}>
          {firstCards.map((card, index) => (
            <FirstCard key={index} {...card} />
          ))}
        </div>

        <Button variant="primary" label="Show more" />
      </div>
    </div>
  );
};

export default SecondCaurosel;
