import { AboutUs } from "../../component/about";
import { Banner } from "../../component/banner";
import { PracticeArea } from "../../component/practiceArea";
import { Container, DisclaimerContainer } from "../../styles/view/home";
import { users } from "../../constant/user";
import Modal from "../../component/modal"
import { Heading } from "../../component/heading";
import { ParragraphText } from "../../styles/view/pageDetails";

const Home = () => {
  return (
    <Container>
      <Banner />
      {users.map((user, index) => {
        return (
          <AboutUs
            key={index}
            isHome={true}
            name={user.name}
            parragraph={user.parragraph}
            photo={user.photo}
            isHeading={index === 0}
            isDownload={user.isDownload}
            direction = {index === 0 && "left"}
          />
        );
      })}
      <PracticeArea />
      <Modal/>

      <DisclaimerContainer>
        
      <Heading value = "Disclaimer"/>
  
    <div>
      <ParragraphText>
      The Bar Council of India does not permit adversement or solicitaon by advocates in any form or manner. By accessing this brochure you acknowledge and confirm that you are seeking information relating to Legal Minds International of your own accord and that there has been no form of solicitation, advertisement or inducement by Legal Minds International or its members.The content of this brochure is for informational purposes only and should not be interpreted as soliciting or advertisement. No material/information provided in this brochure should be construed as legal advice. Legal Minds International shall not be liable for consequences of any action taken by relying on the material/information provided in this brochure.
      </ParragraphText>
    </div>
  </DisclaimerContainer>
    </Container>
  );
};

export default Home;
