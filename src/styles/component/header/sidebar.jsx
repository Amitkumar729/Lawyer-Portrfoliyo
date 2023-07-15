import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const SidebarContainer = styled.div`
  width: 100%;
  max-width: 300px;
  min-width: 300px;
  min-height: 800px;
  box-shadow: -6px 0px 15px 3px #787878;
  padding: 0px 10px;
  z-index: 20;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: sticky;
  top: 5px;
  border-radius: 3px;
  transition: margin 1.5s;
  margin-left: ${({ isSidebarOpen }) => (!isSidebarOpen ? "-300px" : "")};
  a.active {
    background-color: orange;
    border-radius: 3px;
    color: white;
  }
  z-index: 10;
`;

export const SidebarWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: flex-start;
  justify-content: flex-start;
  padding-top: 50px;
`;
