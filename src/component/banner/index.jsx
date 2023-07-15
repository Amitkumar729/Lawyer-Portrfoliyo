import React from "react";
import {
  BannerContainer,
  BannerWrapper,
  Image,
} from "../../styles/component/header/banner";
import dummy from "../../images/banner.jpg";


const Banner = () => {
  return (
    <BannerContainer>
      <BannerWrapper>
      <img src={dummy} alt="" style =  {{height: "100%", width: "100%"}} />
        
      </BannerWrapper>
    </BannerContainer>
  );
};

export default Banner;
