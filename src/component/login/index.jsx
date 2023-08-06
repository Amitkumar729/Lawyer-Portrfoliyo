import { useState } from "react";
import { LoginContainer, LoginWrapper } from "../../styles/component/login"
import { Button, ButtonWrapper, ElementWrapper, Input, InputTitle } from "../../styles/view/Contact"
import axios from "axios";
import { baseApi } from "../../constant";
import { Alert, AlertTitle, CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Notification } from "../../styles/view/createBlog";
export const Login = ()=>{

  const [loader, setLoader] = useState(false);
  const [formData,setFormData] = useState({})
  const [message, setMessage] = useState({});
  const navigate = useNavigate()

  const login = async( )=>{
    if(loader) return;
    setLoader(true)
    const {data} = await axios.post(`${baseApi}/auth`,formData)
    console.log(data);
    setMessage({
        message:  data?.message,
        type: data?.error ||  data?.success,
      });

      setLoader(false)
      if(data.success){
        navigate("/createblog")
      }


  }

  const handleChange = (key,value) =>{
    setFormData((prev)=>{return { ...prev, [key]:value}})
  }

    return <LoginContainer>
    <LoginWrapper>
    <Notification>
    {message?.message ? (
      <Alert severity="success">
        <AlertTitle>{message?.type}</AlertTitle>
        {message?.message}
      </Alert>
    ) : null}
  </Notification>
    <ElementWrapper>
    <InputTitle>User Id</InputTitle>
    <Input
      type="text"
      placeholder="Enter User Id"
       onChange={(e)=>{handleChange("userId",e.target.value)}}
    />
    </ElementWrapper>
    <ElementWrapper>
    <InputTitle>Password</InputTitle>
    
    <Input
    type="password"
    placeholder="Enter password"
    onChange={(e)=>{handleChange("password",e.target.value)}}
    
    />
    </ElementWrapper>
    <div style={{display:"flex",gap:"20px",margin:"10px"}}>
    <ButtonWrapper>
    {loader ? (
        <CircularProgress color="inherit" />
        ) : (
            <>
            <Button type="submit" onClick={login}>Login</Button>
            </>
            )}
            
            </ButtonWrapper>
            <ButtonWrapper>
            <Button type="submit" onClick={()=>{
                navigate("/")
            }}>Cancel</Button>
            </ButtonWrapper>
            
            </div>
            </LoginWrapper>
            </LoginContainer>
}