import React from "react";
import {
  BannerContainer,
  BannerWrapper,
  Image,
} from "../../styles/component/banner";
import dummy from "../../assets/images/banner.jpg";

const Banner = () => {
  return (
    <BannerContainer>
      <BannerWrapper>
        <img src={dummy} alt="" />
      </BannerWrapper>
    </BannerContainer>
  );
};

export default Banner;
