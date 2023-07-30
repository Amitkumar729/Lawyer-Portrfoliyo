import styled from "styled-components";

export const AboutWrapper = styled.div`
  width: 100%;
  max-width: 80%;
  align-self: center;
  min-height: 300px;
  display: flex;
  gap: 40px;
  flex-direction: ${({direction}) => direction === "left"? "row": "row-reverse"  };
  @media (max-width: 750px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const LeftAboutWrap = styled.div`
  width: 100%;
  min-height: 350px;
  flex-direction: column;
  display: flex;
  gap: 12px;
`;

export const HeadingWrapper = styled.div``;

export const AboutHeading = styled.div`
  font-size: 28px;
  font-weight: 500;
  color: #180d33;
`;

export const AboutParagraphSec = styled.p`
  font-size: 17px;
  text-align: justify;
 font-family: Georgia, serif;
`;

export const DownloadButton = styled.div`
  width: 100%;
  max-width: max-content;
  padding: 10px 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  cursor: pointer;
  background-color: #180d33;
  color: white;
  border-radius: 5px;
  font-size: 16px;
  &:hover {
    color: orange;
  }


  
`;

export const RightAboutWrap = styled.div`
  width: 100%;
  max-width: 350px;
  min-height: 350px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media (max-width: 750px) {
    align-items: center;
    justify-content: center;
  }
`;
export const ImageWrap = styled.div`
  height: 400px;
  width: 100%;
  max-width: 400px;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 5px;
  }
`;

export const PdfContainer = styled.div`
  width: 100%;
  height: 750px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ImgaePdfWrap = styled.div`
  height: 100%;
  width: 100%;
  max-width: 80%;
  embed {
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }
`;

