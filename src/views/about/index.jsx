import { AboutUs } from "../../component/about";
import { users } from "../../constant/user";
import profilePdf from "../../assets/documents/profile_2023.pdf";
import { ImgaePdfWrap, PdfContainer } from "../../styles/component/about";
// import { Heading } from "../../component/heading";
// import {
//   ParragraphContainer,
//   ParragraphText,
// } from "../../styles/view/pageDetails";
// import { HeadingWrap } from "../../styles/component/heading";

export const ViewAbout = () => {
  return (
    <>
      {users.map((user, index) => {
        return (
          <AboutUs
            name={user.name}
            parragraph={user.parragraph}
            photo={user.photo}
            isDownload={user?.isDownload}
            isHeading={index === 0}
            direction={index === 0 && "left"}
          />
        );
      })}

      <PdfContainer>
        <ImgaePdfWrap>
          <embed src={profilePdf} />
        </ImgaePdfWrap>
      </PdfContainer>

     
    </>
  );
};
