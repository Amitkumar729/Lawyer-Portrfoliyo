import React from "react";
import { element1 } from "../../constant/pageDetails";
import { element2 } from "../../constant/pageDetails2";
import {
  ParragraphContainer,
  ParragraphMainheading,
  ParragraphSubHeading,
  ParragraphSubHeadingText,
  ParragraphWrapper,
  ParragraphText,
  TopContainer,
  DownloadArea,
} from "../../styles/view/pageDetails";
import { Heading } from "../../component/heading";
import { Banner } from "../../component/banner";
import { DownloadButton } from "../../styles/component/about";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import brochurePdf from "../../assets/documents/BROCHURE.pdf";

export const PageDetails = () => {
  const downloadPdf = (url) => {
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", "Brochure");
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };

  return (
    <>
      <Banner />
      <TopContainer>
        <ParragraphContainer>
          <ParragraphMainheading>
            <Heading value="More About Us" />
          </ParragraphMainheading>
          <ParragraphWrapper>
            {element1.map((item) => {
              return <ParragraphText>{item.text}</ParragraphText>;
            })}
          </ParragraphWrapper>
          <ParragraphMainheading>
            <Heading value="AREAS OF PRACTICE" />
          </ParragraphMainheading>

          <ParragraphWrapper>
            {element2.map((item) => {
              return (
                <>
                  <ParragraphSubHeading>
                    <ParragraphSubHeadingText>
                      {item.name}
                    </ParragraphSubHeadingText>
                  </ParragraphSubHeading>
                  <ParragraphText>{item.text}</ParragraphText>
                </>
              );
            })}
          </ParragraphWrapper>

          <DownloadArea>
            <DownloadButton
              onClick={() => {
                downloadPdf(brochurePdf);
              }}
            >
              Download Brochure
              <CloudDownloadIcon />
            </DownloadButton>
          </DownloadArea>
        </ParragraphContainer>
      </TopContainer>
    </>
  );
};
