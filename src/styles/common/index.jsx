import styled, { createGlobalStyle } from "styled-components";
import { NavLink } from "react-router-dom";

export const MyLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-size: 18px;
  display: flex;
  align-items: center;
`;
export const Layout = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  .appWrapper {
    margin: 10px;
    width: 100%;
    max-width: 1800px;
  }
`;

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`;

export const Heading = styled.h2`
  font: normal normal 500 50px "Lexend", sans-serif;

  @media (max-width: 768px) {
    font-size: 38px;
  }
`;
export const SubHeading = styled.p`
  font-size: 18px;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;
