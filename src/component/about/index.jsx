import React, { useState } from "react";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import ResumePdf from "../../assets/documents/Resume.pdf";
import profilePdf from "../../assets/documents/profile_2023.pdf";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import aboutPhoto from "../../assets/images/about_photo.jpg";
import profilePic from "../../assets/images/profilePic.jpg";
import { Heading } from "../heading";
import { PageDetails } from "../../views/pageDetails";

import {
  AboutHeading,
  AboutParagraphSec,
  AboutWrapper,
  ImageWrap,
  LeftAboutWrap,
  RightAboutWrap,
  HeadingWrapper,
  DownloadButton,
  PdfContainer,
  ImgaePdfWrap,
} from "../../styles/component/about";

export const AboutUs = ({ name, parragraph, photo, isHeading, isDownload, direction }) => {
  const downloadPdf = (url) => {
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", "Resume");
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };



  return (
    <>
      <AboutWrapper direction = {direction} >
        <LeftAboutWrap>
          {isHeading ? (
            <HeadingWrapper>
              <Heading value="WHO WE ARE" />
            </HeadingWrapper>
          ) : null}

          <div>
            <AboutHeading> {name} </AboutHeading>
            <AboutParagraphSec>{parragraph}</AboutParagraphSec>
          </div>

          {isDownload ? (
            <DownloadButton
              onClick={() => {
                downloadPdf(ResumePdf);
              }}
            >
              Download Resume
              <CloudDownloadIcon />
            </DownloadButton>
          ) : null}
        </LeftAboutWrap>

        <RightAboutWrap>
          <ImageWrap>
            <img src={photo} />
          </ImageWrap>
        </RightAboutWrap>
      </AboutWrapper>
    </>
  );
};
