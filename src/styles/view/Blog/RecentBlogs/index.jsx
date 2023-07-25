import styled from "styled-components";

export const RecentBlogWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 80px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ImageWrap = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 25px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 25px;
    transition: all 0.25s ease-in;

    &:hover {
      transform: scale(1.2);
    }
  }
`;

export const FirstRecent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 300px;
  gap: 10px;

  a {
    width: max-content;
    font: normal normal 600 16px "Inter", sans-serif;
    text-decoration: none;
    color: blue;
    display: flex;
    gap: 10px;

    &:hover {
      color: goldenrod;
    }
  }
`;
export const RecentList = styled.div`
  flex: 1;
  height: 500px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const RecentBlogList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 1fr);
  gap: 20px;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 7px;
    display: none;
  }
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  ::-webkit-scrollbar-thumb {
    background: #c2c2c2;
    border-radius: 10px;
  }

  @media (max-width: 420px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    overflow-y: auto;
    min-height: 300px;
  }
`;
