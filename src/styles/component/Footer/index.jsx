import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: grid;
  place-items: center;
  background-color: #182135;
  color: white;
  border-radius: 20px;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1250px;
  min-height: 200px;
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 40px 20px;
`;

export const FooterWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const MoreInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  a {
    font-size: 16px;
    text-decoration: none;
    color: white;
  }
`;
export const MoreInfoHeading = styled.h1`
  font-size: 20px;
  font-weight: 600;
`;
export const FollowSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const FollowHeading = styled.h1`
display: flex;
justify-content: center;
  font-size: 20px;
  font-weight: 600;
`;
export const Address = styled.div``;

export const SocialMedias = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const iconStyles = {
  width: "40px",
  height: "40px",
  cursor: "pointer",
  color: "white",
};

export const Redirect = styled.a``;

export const GetInTouch = styled.div`
  width: 100%;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  /* gap: 10px; */

  @media (max-width: 768px) {
    max-width: 350px;
    justify-content: center;
    align-items: center;
  }
`;
export const GetInTouchHeading = styled.h1`
  font-size: 20px;
  font-weight: 600;
`;
export const PhoneSection = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;
export const PhoneLogo = styled.div``;
export const PhoneNumberSection = styled.div``;
export const PhoneNumberOne = styled.p`
  font-size: 16px;
`;
export const EmailSection = styled(PhoneSection)``;
export const EmailLogo = styled.div``;
export const EmailId = styled(PhoneNumberOne)``;

// export const CopyRightSection = styled.div`
//   margin-top: 30px;
//   display: flex;
//   align-items: flex-end;
//   justify-content: center;
// `;
// export const CopyRightHeading = styled.p`
//   text-align: center;
// `;
