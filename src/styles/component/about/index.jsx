import styled from "styled-components";

export const AboutWrapper = styled.div`
  width: 100%;
  min-height: 300px;
  display: flex;
`;

export const LeftAboutWrap = styled.div`
  width: 100%;
  min-height: 350px;
  flex-direction: column;
  display: flex;
  gap: 12px;
  /* background-color: #FAF9F6; */
`;

export const HeadingWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const AboutHeading = styled.div`
  font-size: 28px;
  font-weight: 500;
  color: #180d33;
`;

export const AboutParagraphSec = styled.p`
  font-size: 17px;
`;

export const DownloadButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 170px;
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
  min-height: 350px;
`;
export const ImageWrap = styled.div`
  height: 300px;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;


export const PdfContainer = styled.div`
  border: 1px solid red;
  height: 750px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ImgaePdfWrap = styled.div`
border: 3px solid gray;
height: 98%;
width: 630px;
`

export const ButtonsContainer = styled.div`
border: 1px solid green;
height: 50px;
width: 630px;
display: flex;
justify-content: center;
align-items: center;
gap: 240px;
`

export const ButtonLeftWrap = styled.div`

  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ButtonRightWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  height: 50px;
`;


export const Button = styled.div`
  height: 30px;
  width: 95px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #180d33;
  color: white;
  cursor: pointer;
  border-radius: 8px;
  &:hover {
color: orange;
  }
` 