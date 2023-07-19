import styled from "styled-components";

export const BannerContainer = styled.div`
  width: 100%;
`;

export const BannerWrapper = styled.div`
  width: 100%;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 10px;
    @media (max-width: 500px) {
      object-fit: contain;
    }
  }
`;
