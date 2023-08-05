// import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import { Alert } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormValidation } from "../../Validations/contactForm";
import {
  Button,
  ButtonWrapper,
  Container,
  ElementContainer,
  ElementWrapper,
  FormContainer,
  FormElementWrapper,
  FormHeading,
  Input,
  InputError,
  InputTitle,
  TextAreaInput,
  Wrapper,
} from "../../styles/view/Contact";
import React from "react";
import emailjs from "@emailjs/browser";
const ContactUs = () => {
  const [formSubmited, setFormSubmited] = useState(false);
  const [loader, setLoader] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(FormValidation),
  });
  const onSubmit = async (data) => {
    setLoader(!loader);

    const emailData = {
      to: data.email,
      subject: data.reason,
      body: data.message,
    };

    emailjs.send(
      "service_f5ic263",
      "template_86wupjd",
      emailData,
      "Bul6mlBfyOKNaQceO"
    );

    setLoader(!loader);
    setFormSubmited(true);
    reset();
  };

  return (
    <Container>
      <Wrapper>
        <FormContainer onSubmit={handleSubmit(onSubmit)}>
          <FormHeading>Get In Touch</FormHeading>
          <FormElementWrapper>
            <ElementContainer>
              <ElementWrapper>
                <InputTitle>Name</InputTitle>
                <Input
                  type="text"
                  placeholder="Enter your name"
                  {...register("name")}
                />
                <InputError>{errors?.name?.message}</InputError>
              </ElementWrapper>
              <ElementWrapper>
                <InputTitle>Email</InputTitle>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  {...register("email")}
                />
                <InputError>{errors?.email?.message}</InputError>
              </ElementWrapper>
            </ElementContainer>
            <ElementContainer>
              <ElementWrapper>
                <InputTitle>Phone</InputTitle>
                <Input
                  type="number"
                  placeholder="Enter your number"
                  {...register("phone")}
                />
                <InputError>{errors?.phone?.message}</InputError>
              </ElementWrapper>
              <ElementWrapper>
                <InputTitle>Reason</InputTitle>
                <Input
                  type="text"
                  placeholder="Enter your reason here"
                  {...register("reason")}
                />
                <InputError>{errors?.reason?.message}</InputError>
              </ElementWrapper>
            </ElementContainer>
            <ElementContainer>
              <ElementWrapper>
                <InputTitle>Message</InputTitle>
                <TextAreaInput
                  placeholder="Enter message"
                  {...register("message")}
                />
                <InputError>{errors?.message?.message}</InputError>
              </ElementWrapper>
            </ElementContainer>
          </FormElementWrapper>
          {formSubmited ? (
            <Alert severity="success">Email Sent Successfully</Alert>
          ) : (
            <ButtonWrapper>
              {loader ? (
                <CircularProgress color="inherit" />
              ) : (
                <Button type="submit">Send</Button>
              )}
            </ButtonWrapper>
          )}
        </FormContainer>
      </Wrapper>
    </Container>
  );
};

export default ContactUs;
