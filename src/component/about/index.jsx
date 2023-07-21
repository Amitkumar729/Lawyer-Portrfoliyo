import React, { useState } from "react";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import ResumePdf from "../../assets/documents/Resume.pdf";
import profilePdf from "../../assets/documents/profile_2023.pdf";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import aboutPhoto from "../../assets/images/about_photo.jpg";
import profilePic from "../../assets/images/profilePic.jpg";
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
  PdfContainer,
  ImgaePdfWrap,
  ButtonsContainer,
  Button,
  ButtonLeftWrap,
  ButtonRightWrap,
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
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque
              eum, unde numquam voluptatem quaerat adipisci ipsum repudiandae
              dolorum sequi, quibusdam autem, quidem corrupti voluptate
              deleniti! Exercitationem facilis perferendis eius cumque. Lorem
              ipsum dolor sit amet consectetur, adipisicing elit. Itaque eum,
              unde numquam voluptatem quaerat adipisci ipsum repudiandae dolorum
              sequi, quibusdam autem, quidem corrupti voluptate deleniti!
              Exercitationem facilis perferendis eius cumque.
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
            
          </ImgaePdfWrap>
          <ButtonsContainer>
            <ButtonLeftWrap>
              <DownloadButton
                onClick={() => {
                  downloadPdf(profilePdf);
                }}
              >
                Download PDF
                <CloudDownloadIcon />
              </DownloadButton>
            </ButtonLeftWrap>

            <ButtonRightWrap>
              <Button>
                <ArrowBackIcon /> Previous
              </Button>
              <Button>
                Next <ArrowForwardIcon />
              </Button>
            </ButtonRightWrap>
          </ButtonsContainer>
        </PdfContainer>
      ) : null}
    </>
  );
};
