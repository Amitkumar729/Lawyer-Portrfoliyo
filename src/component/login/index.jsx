import { useState } from "react";
import { LoginContainer, LoginWrapper } from "../../styles/component/login";
import {
  Button,
  ButtonWrapper,
  ElementWrapper,
  Input,
  InputTitle,
} from "../../styles/view/Contact";
import axios from "axios";
import { baseApi } from "../../constant";
import { Alert, CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Notification } from "../../styles/view/createBlog";
export const Login = () => {
  const [loader, setLoader] = useState(false);
  const [formData, setFormData] = useState({});
  const [message, setMessage] = useState({});
  const navigate = useNavigate();

  const login = async () => {
    if (loader) return;
    setLoader(true);
    await axios.post(`${baseApi}/auth`, formData).then((data)=>{
      
      navigate("/createblog");
    }).catch((error)=>{
      setMessage({
        message: error?.response?.data?.message,
        type: error?.response?.data?.error && "error" || error?.response?.data?.success && "success"
      });
    }).finally(()=>{

      setLoader(false);
    })

   
  };

  const handleChange = (key, value) => {
    setFormData((prev) => {
      return { ...prev, [key]: value };
    });
  };

  console.log({message})

  return (
    <LoginContainer>
      <LoginWrapper>
        <Notification>
          {message?.message ? (
            <Alert severity={`${message?.type}`} onClose={()=>{setMessage(null)}}>
              {message?.message}
            </Alert>
          ) : null}
        </Notification>
        <ElementWrapper>
          <InputTitle>User Id</InputTitle>
          <Input
            type="text"
            placeholder="Enter User Id"
            onChange={(e) => {
              handleChange("userId", e.target.value);
            }}
          />
        </ElementWrapper>
        <ElementWrapper>
          <InputTitle>Password</InputTitle>

          <Input
            type="password"
            placeholder="Enter password"
            onChange={(e) => {
              handleChange("password", e.target.value);
            }}
          />
        </ElementWrapper>
        <div style={{ display: "flex", gap: "20px", margin: "10px" }}>
          <ButtonWrapper>
            {loader ? (
              <CircularProgress color="inherit" />
            ) : (
              <>
                <Button type="submit" onClick={login}>
                  Login
                </Button>
              </>
            )}
          </ButtonWrapper>
          <ButtonWrapper>
            <Button
              type="submit"
              onClick={() => {
                navigate("/");
              }}
            >
              Cancel
            </Button>
          </ButtonWrapper>
        </div>
      </LoginWrapper>
    </LoginContainer>
  );
};
