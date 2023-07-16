import { AboutUs } from "../../component/about";
import Banner from "../../component/banner";
import { Container } from "../../styles/view/home";

const Home = () => {
  return (
    <Container>
      <Banner />
      <AboutUs />
    </Container>
  );
};

export default Home;
