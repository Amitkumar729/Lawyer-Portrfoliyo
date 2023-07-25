import { Link } from "react-router-dom";
import BlogCard from "../../../component/BlogCard";
import { blogData } from "../../../views/Blog/RecentBlog/data";
import blogImg from "../../../assets/images/blog1.png";
import {
  Content,
  Details,
  Tags,
  TagsSection,
} from "../../../styles/view/Blog/BlogCard";
import {
  FirstRecent,
  ImageWrap,
  RecentBlogList,
  RecentBlogWrap,
  RecentList,
} from "../../../styles/view/Blog/RecentBlogs";

const RecentBlogs = () => {
  return (
    <RecentBlogWrap>
      <FirstRecent>
        <ImageWrap>
          <img src={blogImg} alt="" />
        </ImageWrap>
        <Details size={"lg"}>9 days ago - 7 min read</Details>
        <Content size={"md"}>The UseEffect Hook: A Complete Guide</Content>
        <TagsSection>
          <Tags>Android</Tags>
        </TagsSection>
        <Link href="/blog-detail">Read More</Link>
      </FirstRecent>
      <RecentList>
        <Content size={"md"}>Recent Blogs</Content>
        <RecentBlogList>
          {blogData.map((item, index) => (
            <BlogCard data={item} horizontal={true} key={index} />
          ))}
        </RecentBlogList>
      </RecentList>
    </RecentBlogWrap>
  );
};

export default RecentBlogs;
