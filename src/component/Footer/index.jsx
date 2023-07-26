import { EmailOutlined, Phone } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  EmailId,
  EmailLogo,
  EmailSection,
  FollowHeading,
  FollowSection,
  FooterWrap,
  GetInTouch,
  GetInTouchHeading,
  MoreInfo,
  MoreInfoHeading,
  PhoneLogo,
  PhoneNumberOne,
  PhoneNumberSection,
  PhoneSection,
  Wrapper,
  Address,
} from "../../styles/component/Footer";
import { element } from "../../constant/header";

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <FooterWrap>
          <MoreInfo>
            <MoreInfoHeading>More Information</MoreInfoHeading>

              { 

                element.map((item, index) => {
                  return <Link to = {item.to} > {item.name} </Link>
                })

               }
          </MoreInfo>
          <FollowSection>
            <FollowHeading>Registered Office</FollowHeading>

            <Address>109A, Pocket-F, Mayur Vihar Phase-2, Delhi-110096</Address>
          </FollowSection>
          <GetInTouch>
            <GetInTouchHeading>For More Enquiries</GetInTouchHeading>
            <PhoneSection>
              <PhoneLogo>
                <Phone />
              </PhoneLogo>
              <PhoneNumberSection>
                <PhoneNumberOne>011-4185 1351</PhoneNumberOne>
                <PhoneNumberOne>+91-9999226947</PhoneNumberOne>
                <PhoneNumberOne>+91-9811306559</PhoneNumberOne>
              </PhoneNumberSection>
            </PhoneSection>
            <EmailSection>
              <EmailLogo>
                <EmailOutlined />
              </EmailLogo>
              <EmailId>
                <div>legalmindsinternational@gmail.com</div>
                <div>avsmanyam@gmail.com</div>
                <div>nirajkumar1976@gmail.com</div>
              </EmailId>
            </EmailSection>
          </GetInTouch>
        </FooterWrap>
      </Wrapper>
    </Container>
  );
};

export default Footer;
