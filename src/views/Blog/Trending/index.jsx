import BlogCard from "../../../component/BlogCard";
import { blogData } from "../RecentBlog/data";
import { Content } from "../../../styles/view/Blog/BlogCard";
import { CardWrapper, Container } from "../../../styles/view/Blog/Trending";

const Trending = () => {
  return (
    <Container>
      <Content size="lg">Trending Blogs</Content>
      <CardWrapper>
        {blogData.map((item, index) => (
          <BlogCard data={item} horizontal={false} key={index} />
        ))}
      </CardWrapper>
    </Container>
  );
};

export default Trending;
