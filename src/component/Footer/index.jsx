import { EmailOutlined, Facebook, Instagram, Phone } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  CopyRightHeading,
  CopyRightSection,
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
            <Link to="/terms-and-conditions">Terms & Conditions</Link>
            <Link to="/services">All Services</Link>
            <Link to="/privacy-policy">Privacy Policy</Link>
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
            <GetInTouchHeading>
              For general enquiries, please contact us using the below
            </GetInTouchHeading>
            <PhoneSection>
              <PhoneLogo>
                <Phone />
              </PhoneLogo>
              <PhoneNumberSection>
                <PhoneNumberOne>+91-8882875910</PhoneNumberOne>
              </PhoneNumberSection>
            </PhoneSection>
            <EmailSection>
              <EmailLogo>
                <EmailOutlined />
              </EmailLogo>
              <EmailId>crepsculares@gmail.com</EmailId>
            </EmailSection>
          </GetInTouch>
        </FooterWrap>
        <CopyRightSection>
          <CopyRightHeading>
            Copyright © 2023 Crepsculares. All rights reserved.
          </CopyRightHeading>
        </CopyRightSection>
      </Wrapper>
    </Container>
  );
};

export default Footer;
