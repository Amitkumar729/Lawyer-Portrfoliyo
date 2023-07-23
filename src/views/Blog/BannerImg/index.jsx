import bannerImg from "../../../assets/images/blog-banner.png";
import {
  BannerWrap,
  BlogContent,
  BlogDetails,
  HeadingWrapper,
} from "../../../styles/view/Blog/BannerImg";
import {
  Content,
  Details,
  Tags,
  TagsSection,
} from "../../../styles/view/Blog/BlogCard";

const BannerImg = ({ content }) => {
  return (
    <BannerWrap>
      <img src={bannerImg} alt="" />
      {content && (
        <BlogDetails>
          <Details size={"lg"}>9 days ago - 7 min read</Details>
          <Content size={"lg"}>The UseEffect Hook: A Complete Guide</Content>
          <BlogContent>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim iusto
            doloribus dolor labore quos animi provident pariatur molestias
            maiores, unde facilis in, consequuntur itaque blanditiis?
          </BlogContent>
          <TagsSection>
            <Tags>Android</Tags>
          </TagsSection>
        </BlogDetails>
      )}
    </BannerWrap>
  );
};
export default BannerImg;
