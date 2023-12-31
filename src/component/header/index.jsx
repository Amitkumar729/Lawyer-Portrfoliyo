import React, { useState } from "react";
import BalanceIcon from "@mui/icons-material/Balance";
import { IconButton } from "@mui/material";
import { element } from "../../constant/header";
import {
  HeaderContainer,
  HeaderWraper,
  HeaderLeftWrap,
  HeaderRightWrap,
  HeaderElemntWrap,
  HeaderElemntContainer,
  MenuIconStyled,
} from "../../styles/component/header";
import { MyLink } from "../../styles/common";
import Sidebar from "./sidebar";

const Header = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <HeaderContainer>
      <HeaderWraper isSidebarOpen={isSidebarOpen}>
        <MyLink to={"/login"}>  
        <HeaderLeftWrap >
          <IconButton>
            <BalanceIcon sx={{ fontSize: "35px", color: "#180D33" }} />
          </IconButton>
          <h1>LMI</h1>
        </HeaderLeftWrap>
        </MyLink>
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
          <MenuIconStyled onClick={() => setSidebarOpen(!isSidebarOpen)} />
        </HeaderRightWrap>
      </HeaderWraper>
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        headerElement={element}
        setSidebarOpen={setSidebarOpen}
      />
    </HeaderContainer>
  );
};

export default Header;
