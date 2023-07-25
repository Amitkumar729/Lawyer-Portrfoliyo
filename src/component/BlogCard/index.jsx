import { Link } from "react-router-dom";
import {
  BlogCardWrap,
  Content,
  Details,
  DetailsWrap,
  ImageSection,
  Tags,
  TagsSection,
} from "../../styles/view/Blog/BlogCard";

const BlogCard = ({ data, horizontal }) => {
  return (
    <BlogCardWrap horizontal={horizontal}>
      <ImageSection horizontal={horizontal}>
        <img src={data?.image} alt="" />
      </ImageSection>
      <DetailsWrap>
        <Details size={"md"}>
          {data?.createdAt} - {data?.readingTime} min read
        </Details>
        <Content size={"sm"}>{data?.blogTitle}</Content>
        <TagsSection>
          {data?.tags?.map((item, index) => (
            <Tags key={index}>{item}</Tags>
          ))}
        </TagsSection>
        <Link href="/blog-detail">Read More</Link>
      </DetailsWrap>
    </BlogCardWrap>
  );
};

export default BlogCard;
