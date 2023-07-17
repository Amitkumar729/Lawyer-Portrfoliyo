import styled from "styled-components";

export const AboutWrapper = styled.div`
  width: 100%;
  min-height: 300px;
  display: flex;
`;

export const LeftAboutWrap = styled.div`
  width: 100%;
  min-height: 350px;
  border: 1px solid red;
  flex-direction: column;
  display: flex;
  gap: 12px;
  
`;

export const HeadingWrapper = styled.div`
border: 1px solid green;
display: flex;
justify-content: center;
`

export const AboutHeading = styled.div`
  font-size: 28px;
  font-weight: 500;
   
`;


export const AboutParagraphSec = styled.p`
border: 1px solid red;
`;


export const DownloadButton = styled.div`
/* border: 1px solid red; */
display: flex;
align-items: center;
width: 180px;
gap: 10px;
cursor: pointer;
background-color: orange;
color: white;
border-radius: 5px;
font-size: 16px;
/* transition: background-color 50ms; */
&:hover{
  background-color: #facd79;
  /* color: #facd79; */
  color: black;
}
`;


export const RightAboutWrap = styled.div`
  width: 100%;
  min-height: 350px;
  border: 1px solid orange;
`;
export const ImageWrap = styled.div`
height: 300px;
img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    
}
`;
