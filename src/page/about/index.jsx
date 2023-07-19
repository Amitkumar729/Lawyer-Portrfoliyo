import { Banner } from "../../component/banner";
import { Container } from "../../styles/view/home";
import { ViewAbout } from "../../views/about";

export const About = () => {
  return (
    <Container>
      <Banner />
      <ViewAbout />
    </Container>
  );
};
