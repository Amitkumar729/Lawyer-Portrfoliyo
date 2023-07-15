import React from "react";
import {
  SidebarContainer,
  SidebarWrap,
} from "../../styles/component/header/sidebar";
import { MyLink } from "../../styles/common";
import { HeaderElemntWrap } from "../../styles/component/header";

const Sidebar = ({ isSidebarOpen, headerElement }) => {
  return (
    <SidebarContainer isSidebarOpen={isSidebarOpen}>
      <SidebarWrap>
        {headerElement.map((item, index) => {
          return (
            <MyLink to={item.to} key={index}>
              <HeaderElemntWrap>
                <item.icon />
                {item.name}
              </HeaderElemntWrap>
            </MyLink>
          );
        })}
      </SidebarWrap>
    </SidebarContainer>
  );
};

export default Sidebar;
