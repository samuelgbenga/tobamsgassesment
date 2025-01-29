import React from "react";
import FirstCard from "../../components/firstCard/FirstCard";
import image1 from "../../assets/images/image1.png";

const CauroselSection = () => {
  return (
    <div>
      <FirstCard
        description="winner"
        price="10.ET"
        variant="border"
        time="21:12 min left"
        image={image1}
        noOfLike={12}
        noPeopleBidding={4}
        islike
      />
    </div>
  );
};

export default CauroselSection;
