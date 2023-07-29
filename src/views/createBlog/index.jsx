import React, { useRef, useState } from "react";
import {
  Container,
  FeildContainer,
  Download,
  TextArea,
  InputHeading,
} from "../../styles/view/createBlog";
import JoditEditor from "jodit-react";
import { DownloadButton } from "../../styles/component/about";
import parser from "html-react-parser";
import axios from "axios";
import { baseApi } from "../../constant";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { CircularProgress } from "@mui/material";

export const ViewsBlog = () => {
  const [title, setTitle] = useState("");
  const [message,setMessage] = useState("")
  const [loader, setLoader] = useState(false);
  const editor = useRef(null);
  // const [content, setContent] = useState('');
  const [post, setPost] = useState({
    body: "",
    title: "",
  });

  const contentFeild = (data) => {
    // console.log(data)
    setPost({ ...post, body: data });
  };

  // const publishContent = (e) => {
  //   if (post.body.trim() === "") {
  //     alert("Please Write Something");
  //     return;
  //   }
  // };

  const postBlog = async () => {
    setLoader(true);
    const response = await axios.post(`${baseApi}/blog/post-blog`, {
      body: post.body,
      title,
    });
    setMessage(response.data.message);
    setLoader(false);
  };



  return (
    <Container>
      <FeildContainer>
        {message  ? <Alert severity="success">
          <AlertTitle>Success</AlertTitle>
            {message}

        </Alert> : null}
        <InputHeading
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          placeholder="Heading..."
        />

        <JoditEditor
          ref={editor}
          value={post.body}
          // onChange={newContent => setContent(newContent)}
          onChange={contentFeild}
        />
      </FeildContainer>
      <Download>
        <DownloadButton onClick={!loader && postBlog}>Publish  { loader && <CircularProgress sx = {{ color: "orange"}} /> }  </DownloadButton>
      </Download>
      <TextArea> {parser(post.body)}</TextArea>
    </Container>
  );
};