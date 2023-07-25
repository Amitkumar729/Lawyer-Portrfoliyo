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
} from "../../styles/view/pageDetails";
import { Heading } from "../../component/heading";
import { Banner } from "../../component/banner";

export const PageDetails = () => {
  return (
    <>
    <Banner/>
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
                <ParragraphSubHeadingText>{item.name}</ParragraphSubHeadingText>
              </ParragraphSubHeading>
              <ParragraphText>{item.text}</ParragraphText>
            </>
          );
        })}
      </ParragraphWrapper>
    </ParragraphContainer>
    </TopContainer>
    </>
  );
};
