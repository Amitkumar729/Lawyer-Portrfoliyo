import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 650px;
  background-color: white;
  gap: 10px;
  padding: 0px 10px 50px 10px;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  padding: 40px 20px;
`;

export const ImgContainer = styled.div`
  width: 100%;
  min-height: 300px;
  background-color: green;
  display: flex;
  justify-content: flex-end;
`;
export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const FormContainer = styled.form`
  width: 100%;
  max-width: 850px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  box-shadow: 1px 5px 15px 1px #e0e0e0;
  border-radius: 5px;
  padding: 30px 0px;
  /* margin-top: -145px; */
  background-color: white;
`;
export const FormHeading = styled.h1``;
export const FormElementWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  min-height: 100px;
`;

export const ElementContainer = styled.div`
  min-height: 100px;
  display: flex;
  gap: 5px;
  padding: 0px 20px;
  @media only screen and (max-width: 400px) {
    padding: 0px 30px 0px 10px;
    flex-direction: column;
  }
`;
export const ElementWrapper = styled.div`
  width: 100%;
  min-height: 100px;
  padding: 0px 10px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const InputTitle = styled.h2`
  font-size: 20px;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;
export const Input = styled.input`
  width: 98%;
  height: 45px;
  font-size: 18px;
  border-radius: 2px;
  border: 2px solid #c2c2c2;
  padding-left: 10px;
  &:focus {
    outline: 2px solid #d61355;
    border-radius: 1px;
    border: none;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;
export const InputError = styled.div`
  width: 100%;
  color: red;
  margin-top: 0px;
`;
export const TextAreaInput = styled.textarea`
  width: 99%;
  min-height: 150px;
  outline: none;
  font-size: 18px;
  border-radius: 5px;
  border: none;
  padding-left: 10px;
  resize: none;
  border: 2px solid #c2c2c2;

  &:focus {
    outline: 2px solid #d61355;
    border: none;
  }
`;
export const ButtonWrapper = styled.div`
  width: 100%;
  max-width: 110px;
  min-height: 35px;
  background-color: #180d33;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  box-shadow: 1px 1px 15px 1px #e0e0e0;
  color: white;
  padding: 7px 0;

  @media (max-width: 420px) {
    max-width: 300px;
  }
`;
export const Button = styled.button`
  width: 100%;
  min-height: inherit;
  padding: 5px 30px;
  color: white;
  font-size: 20px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  &:focus {
    outline: 2px solid white;
    border-radius: 2px;
  }

  &:hover{
    color: orange;
  }
`;
