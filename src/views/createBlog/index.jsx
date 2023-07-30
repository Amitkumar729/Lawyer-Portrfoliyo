import React, { useRef, useState } from "react";
import {
  Container,
  FeildContainer,
  Download,
  InputHeading,
  Notification,
  Wrapper,
} from "../../styles/view/createBlog";
import JoditEditor from "jodit-react";
import { DownloadButton } from "../../styles/component/about";
import { baseApi } from "../../constant";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { CircularProgress } from "@mui/material";
import axios from "axios";

export const ViewsCreateBlog = () => {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState({});
  const [loader, setLoader] = useState(false);
  const editor = useRef(null);
  const [post, setPost] = useState({
    body: "",
    title: "",
  });

  const contentFeild = (data) => {
    setPost({ ...post, body: data });
  };

  const postBlog = async () => {
    if (loader) return;
    setLoader(true);
    const response = await axios.post(`${baseApi}/blog/post-blog`, {
      body: post.body,
      title,
    });
    setMessage({
      message: response.data.message,
      type: response?.data?.error || response?.data?.success,
    });
    setLoader(false);
  };

  return (
    <Container>
      <Wrapper>
        <FeildContainer>
          <Notification>
            {message?.message ? (
              <Alert severity="success">
                <AlertTitle>{message?.type}</AlertTitle>
                {message?.message}
              </Alert>
            ) : null}
          </Notification>
          <InputHeading
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            placeholder="Heading..."
          />

          <JoditEditor
            ref={editor}
            value={post.body}
            onChange={contentFeild}
          />
        </FeildContainer>
        <Download>
          <DownloadButton onClick={postBlog}>
            Publish {loader && <CircularProgress sx={{ color: "orange" }} />}{" "}
          </DownloadButton>
        </Download>
      </Wrapper>
    </Container>
  );
};
