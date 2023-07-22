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

export const AboutUs = ({ isHome }) => {
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
      <AboutWrapper>
        <LeftAboutWrap>
          <HeadingWrapper>
            <Heading value="WHO WE ARE" />
          </HeadingWrapper>

          <div>
            <AboutHeading>A.V.S.SUBRAMANYAM</AboutHeading>
            <AboutParagraphSec>
            I have an experience of more than 19 years inthe legal field parcularly in the sectors of Oil & Gas and Banking. I have handled mulfarious ligaons including arbitraons. I advised GAIL(India) Ltd; SBH and SBBJ as their in-house legal counsel. He is well versed with all the legal issues and ligaons with regard to the OIL and Natural Gas Sector. I have special experse in draing and seling of various agreements relang to OiL & Gas sector such as Gas Sale and Purchase Agreements, Gas Transmission Agreements, agreements with Consignee stockists, Share Holders Agreements, Bank Guarantees, ConfidenalityAgreements, NonDisclosure Agreements, Tolling Term Sheets, Definive Agreements, Side leer of various exisng contracts, Secondment agreements Commodity Swapping agreements etc. Further, I have a track record in conducng arbitraons pertaining to OIL & Gas Sector.
            </AboutParagraphSec>
          </div>

          <DownloadButton
            onClick={() => {
              downloadPdf(ResumePdf);
            }}
          >
            Download Resume
            <CloudDownloadIcon />
          </DownloadButton>
        </LeftAboutWrap>

        <RightAboutWrap>
          <ImageWrap>
            <img src={profilePic} />
          </ImageWrap>
        </RightAboutWrap>
      </AboutWrapper>

      {!isHome ? (
        <PdfContainer>
          <ImgaePdfWrap>
            <embed src={profilePdf} />
          </ImgaePdfWrap>
        </PdfContainer>
      ) : null}
    </>
  );
};
