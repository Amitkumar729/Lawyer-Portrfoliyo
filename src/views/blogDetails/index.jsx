import React, { useEffect, useState } from "react";
import {
  BlogBody,
  BlogHeading,
  Container,
  Wrapper,
} from "../../styles/view/blogDetails";
import axios from "axios";
import { baseApi } from "../../constant";
import parser from "html-react-parser";


export const ViewsBlogDetails = () => {
  const id = window.location.search.split("=")[1];
  const [blogData, setBlogData] = useState({
    
  });

  const fetchBlogData = async () => {
    // alert(`${baseApi}/blog/get-single-blog/${id}`)
    const { data } = await axios.get(`${baseApi}/blog/get-single-blog/${id}`);
    setBlogData(data?.data);
    console.log(data);
  };


  // useEffect(()=>{
  //   alert(`${baseApi}/blog/get-single-blog/${id}`)
  //   fetchBlogData()
  // },[])
  useEffect(() => {
    fetchBlogData();
  }, [])

  return (
    <Container>
      <Wrapper>
        <BlogHeading>{blogData?.title}</BlogHeading>
        <BlogBody>{parser(blogData?.body ?? "")}</BlogBody>
      </Wrapper>
    </Container>
  );
};
