import React from "react";
import {
  Container,
  ContainerWrapper,
  HeadingContainer,
  HeadingWrapper,
  BodyContainer,
  BodyEnding,
  BlogContainer,
} from "../../styles/view/blog";
// import { element } from "../../constant/blogData";
import { useState } from "react";
import axios from "axios";
import { baseApi } from "../../constant";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import parser from "html-react-parser";


 const ViewsBlog = () => {
  const [blogs, setBlogs] = useState([]);
  // const [loader, setLoader] = useState(false);
  const navigate = useNavigate();

  const fetchBlogs = async () => {
    const res = await axios.get(`${baseApi}/blog/get-all-blogs`);
    setBlogs(res.data.data?.reverse());
  };

  useEffect(() => {
    fetchBlogs();
  }, []);
  return (
    
    <Container>
      <ContainerWrapper>
        {blogs.map((item) => {
          return (
            <>
              <BlogContainer
                onClick={() => {
                  navigate(`/blogdetails?id=${item?._id}`);
                }}
              >
                <HeadingContainer>
                  <HeadingWrapper>{item.title}</HeadingWrapper>
                </HeadingContainer>
                <BodyContainer>{parser(item.body)}...</BodyContainer>
                <BodyEnding />
              </BlogContainer>
            </>
          );
        })}
      </ContainerWrapper>
    </Container>
    
  );
};


export default ViewsBlog;