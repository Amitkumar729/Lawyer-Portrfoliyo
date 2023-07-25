// import styled from "styled-components";
import styled from "styled-components";

export const BannerWrap = styled.div`
  position: relative;
  width: 100%;
  height: 430px;
  object-fit: fill;

  img {
    width: 100%;
    height: 100%;
    object-fit: fill;
    border-radius: 25px;
  }
`;

export const BlogDetails = styled.div`
  position: absolute;
  inset: auto auto 50px 50px;
  width: 100%;
  max-width: 600px;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 768px) {
    max-width: 400px;
  }

  @media (max-width: 600px) {
    max-width: 280px;
    inset: auto auto 30px 20px;
  }
`;

export const HeadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const BlogContent = styled.p`
  font: normal normal 400 16px/24px "Inter", sans-serif;
`;
