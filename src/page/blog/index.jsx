import BannerImg from "../../views/Blog/BannerImg";
import RecentBlogs from "../../views/Blog/RecentBlog";
import Trending from "../../views/Blog/Trending";
import { HeadingWrapper } from "../../styles/view/Blog/BannerImg";
import { Container, Wrapper } from "../../styles/view/Blog/Main";
import { Heading, SubHeading } from "../../styles/common";

const Blog = () => {
  return (
    <Container>
      <Wrapper>
        <HeadingWrapper>
          <Heading>Writing From Our Team</Heading>
          <SubHeading>
            The latest industry news,interviews,technologies, and resources.
          </SubHeading>
        </HeadingWrapper>
        <BannerImg content={true} />
        <RecentBlogs />
        <Trending />
      </Wrapper>
    </Container>
  );
};

export default Blog;
