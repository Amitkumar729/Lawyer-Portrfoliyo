import styled from "styled-components";

const getButtonStyles = ({ size }) => {
  switch (size) {
    case "md":
      return `
      font-size:30px;
      font-weight:600;
      `;
    case "lg":
      return `
      font-size:35px;
      font-weight:600;
      `;
    default:
      return `
      font-size:20px;
      font-weight:500;
  `;
  }
};

export const BlogCardWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: ${(props) => (props.horizontal ? "row" : "column")};
  gap: 10px;

  @media (max-width: 420px) {
    flex-direction: column;
  }
`;

export const ImageSection = styled.div`
  width: 100%;
  max-width: ${(props) => (props.horizontal ? "180px" : "100%")};
  min-height: 180px;
  border-radius: 15px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: fill;
    transition: all 0.25s ease-in-out;
    cursor: pointer;

    &:hover {
      transform: scale(1.2);
    }
  }
`;

export const DetailsWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;

  a {
    width: max-content;
    font: normal normal 500 16px "Inter", sans-serif;
    text-decoration: none;
    color: blue;
    display: flex;
    gap: 10px;
    &:hover {
      color: goldenrod;
    }
  }
`;

export const Details = styled.p`
  font-weight: 500;
  font-size: ${(props) => (props.size === "lg" ? "18px" : "15px")};
`;

export const Content = styled.h2`
  ${({ size }) => getButtonStyles({ size })};
`;

export const TagsSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const Tags = styled.div`
  width: max-content;
  padding: 7px 10px;
  border-radius: 15px;
  font: normal normal 400 14px "Inter", sans-serif;
  border: 1px solid rgba(0, 0, 0, 0.3);
  background-color: whitesmoke;
  color: black;
`;
