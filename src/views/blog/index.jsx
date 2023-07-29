import React from "react";
import {
  Container,
  ContainerWrapper,
  HeadingContainer,
  HeadingWrapper,
  BodyContainer,
  BodyEnding,
} from "../../styles/view/blog";
import { element } from "../../constant/blogData";

export const ViewsBlog = () => {
  return (
    <Container>
    <ContainerWrapper>
    {element.map((item) => {
      return (
        <>
          <HeadingContainer>
            <HeadingWrapper>{item.name}</HeadingWrapper>
          </HeadingContainer>
          <BodyContainer>{item.body}</BodyContainer>
          <BodyEnding />
        </>
      );
    })}

    
    </ContainerWrapper>
     
    </Container>
  );
};
