import { AboutUs } from "../../component/about";
import { Banner } from "../../component/banner";
import { PracticeArea } from "../../component/practiceArea";
import { Container } from "../../styles/view/home";

const Home = () => {
  return (
    <Container>
      <Banner />
      <AboutUs isHome={true} />
      <PracticeArea />
    </Container>
  );
};

export default Home;
