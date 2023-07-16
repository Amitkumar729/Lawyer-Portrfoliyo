import React, { useState } from "react";
import BalanceIcon from "@mui/icons-material/Balance";
import { IconButton } from "@mui/material";
import { element } from "../../constant/header";
import {
  HeaderContainer,
  HeaderWraper,
  HeaderLeftWrap,
  //   HeaderLogo,
  HeaderRightWrap,
  //   HeaderContactDetails,
  //   HeaderElementContainer,
  HeaderElemntWrap,
  HeaderElemntContainer,
  MenuIcon_styled,
} from "../../styles/component/header";
import { MyLink } from "../../styles/common";
import Sidebar from "./sidebar";


const Header = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <HeaderContainer>
      <HeaderWraper>
        <HeaderLeftWrap>
          <IconButton>
            <BalanceIcon sx={{ fontSize: "35px", color: "black" }} />
          </IconButton>
          <h1>Justice</h1>
        </HeaderLeftWrap>
        <HeaderRightWrap>
          <HeaderElemntContainer>
            {element.map((item, index) => {
              return (
                <MyLink to={item.to} key={index}>
                  <HeaderElemntWrap>{item.name}</HeaderElemntWrap>
                </MyLink>
              );
            })}
          </HeaderElemntContainer>
          <MenuIcon_styled onClick={() => setSidebarOpen(!isSidebarOpen)} />
        </HeaderRightWrap>
      </HeaderWraper>
      <Sidebar isSidebarOpen={isSidebarOpen} headerElement={element} /> 
    </HeaderContainer>
  );
};

export default Header;
