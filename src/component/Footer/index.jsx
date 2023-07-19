import { EmailOutlined, Facebook, Instagram, Phone } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  // CopyRightHeading,
  // CopyRightSection,
  EmailId,
  EmailLogo,
  EmailSection,
  FollowHeading,
  FollowSection,
  FooterWrap,
  GetInTouch,
  GetInTouchHeading,
  iconStyles,
  MoreInfo,
  MoreInfoHeading,
  PhoneLogo,
  PhoneNumberOne,
  PhoneNumberSection,
  PhoneSection,
  Redirect,
  SocialMedias,
  Wrapper,
} from "../../styles/component/Footer";

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <FooterWrap>
          <MoreInfo>
            <MoreInfoHeading>More Information</MoreInfoHeading>
            <Link to="/profile">Profile</Link>
            <Link to="/practice-area">Practice Area</Link>
            <Link to="/research-publication">Research and Publication</Link>
            <Link to="/blogs">Blogs</Link>
            <Link to="/gallary">Gallary</Link>
            <Link to="/contacts">Contact</Link>
          </MoreInfo>
          <FollowSection>
            <FollowHeading>Social Media</FollowHeading>
            <SocialMedias>
              <Redirect href="https://www.facebook.com/">
                <Facebook sx={iconStyles} />
              </Redirect>
              <Redirect href="https://instagram.com/">
                <Instagram sx={iconStyles} />
              </Redirect>
            </SocialMedias>
          </FollowSection>
          <GetInTouch>
            <GetInTouchHeading>For More Enquiries</GetInTouchHeading>
            <PhoneSection>
              <PhoneLogo>
                <Phone />
              </PhoneLogo>
              <PhoneNumberSection>
                <PhoneNumberOne>+91-9999226947</PhoneNumberOne>
              </PhoneNumberSection>
            </PhoneSection>
            <EmailSection>
              <EmailLogo>
                <EmailOutlined />
              </EmailLogo>
              <EmailId>legalmindsinternational@gmail.com</EmailId>
              <EmailId>avsmanyan@gmail.com</EmailId>
            </EmailSection>
          </GetInTouch>
        </FooterWrap>
        {/*<CopyRightSection>
          <CopyRightHeading>
            Copyright © 2023 Crepsculares. All rights reserved.
          </CopyRightHeading>
  </CopyRightSection>*/}
      </Wrapper>
    </Container>
  );
};

export default Footer;
