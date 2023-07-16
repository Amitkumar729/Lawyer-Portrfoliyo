import {
  AboutHeading,
  AboutParagraphSec,
  AboutWrapper,
  ImageWrap,
  LeftAboutWrap,
  RightAboutWrap,
} from "../../styles/component/about";

export const AboutUs = () => {
  return (
    <AboutWrapper>
      <LeftAboutWrap>
        <AboutHeading>Who We Are</AboutHeading>
        <AboutParagraphSec>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque eum,
          unde numquam voluptatem quaerat adipisci ipsum repudiandae dolorum
          sequi, quibusdam autem, quidem corrupti voluptate deleniti!
          Exercitationem facilis perferendis eius cumque.
        </AboutParagraphSec>
      </LeftAboutWrap>
      <RightAboutWrap>
        <ImageWrap>{/* <img src="" /> */}</ImageWrap>
      </RightAboutWrap>
    </AboutWrapper>
  );
};
