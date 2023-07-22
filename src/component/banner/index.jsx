import React from "react";
import {
  BannerContainer,
  BannerWrapper,
} from "../../styles/component/banner";
import dummy from "../../assets/images/banner.jpg";

export const Banner = () => {
  return (
    <BannerContainer>
      <BannerWrapper>
        <img src={dummy} alt="" />
      </BannerWrapper>
    </BannerContainer>
  );
};
