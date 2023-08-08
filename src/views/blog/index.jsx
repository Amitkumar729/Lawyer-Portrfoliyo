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
import { useState } from "react";
import axios from "axios";
import { baseApi } from "../../constant";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import parser from "html-react-parser";
import CircularProgress from "@mui/material/CircularProgress";


 const ViewsBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loader, setLoader] = useState(false);

  const navigate = useNavigate();

  const fetchBlogs = async () => {
    setLoader(true);
    const res = await axios.get(`${baseApi}/blog/get-all-blogs`);
    setBlogs(res.data.data?.reverse());
    setLoader(false);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);
  return (
    
    <Container>
      <ContainerWrapper>
          { loader &&  <CircularProgress  sx={{color: "orange"}} />}
        { blogs.length > 0 ? blogs.map((item) => {
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
        }): !loader && <h4>There is no any Blog data</h4>}
        
      </ContainerWrapper>
    </Container> 
    
  );
};


export default ViewsBlog;