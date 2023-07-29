import React from "react";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import ResumePdf from "../../assets/documents/Resume.pdf";
import { Heading } from "../heading";

import {
  AboutHeading,
  AboutParagraphSec,
  AboutWrapper,
  ImageWrap,
  LeftAboutWrap,
  RightAboutWrap,
  HeadingWrapper,
  DownloadButton,
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
            <img src={photo} alt="" />
          </ImageWrap>
        </RightAboutWrap>
      </AboutWrapper>
    </>
  );
};
