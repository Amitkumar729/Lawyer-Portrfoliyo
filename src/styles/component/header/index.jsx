import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";

export const HeaderContainer = styled.div`
  height: 100px;
`;

export const HeaderWraper = styled.div`
  width: 100%;
  position: ${(props) => (props.isSidebarOpen ? "fixed" : "static")};
  top: 5px;
  display: flex;
  min-height: 70px;
  justify-content: space-between;
  border-radius: 5px;
  box-shadow: -10px 0px 20px 6px lightgray;
  gap: 30px;
  background-color: white;
  z-index: 70;
`;

export const HeaderLeftWrap = styled.div`
  width: 100px;
  height: 50px;
  align-self: center;
  margin-left: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: orange;
  color: white;
  border-radius: 5px;
  padding: 0px 15px;
`;

export const HeaderElemntContainer = styled.div`
  display: flex;
  align-items: center;

  gap: 20px;
  a.active {
    background-color: orange;
    border-radius: 3px;
    color: white;
  }
  @media (max-width: 1050px) {
    display: none;
  }
`;

export const MenuIconStyled = styled(MenuIcon)`
  font-size: 30px;
  cursor: pointer;
  @media (min-width: 1050px) {
    opacity: 0;
    align-self: flex-end;
  }
`;

export const HeaderRightWrap = styled.div`
  width: 100%;
  max-width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 1050px) {
    justify-content: flex-end;
    margin-right: 50px;
  }
`;

export const HeaderElemntWrap = styled.div`
  width: 100%;
  min-width: max-content;
  max-width: max-content;
  padding: 5px 10px;
  border-radius: 3px;
  min-height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-size: 20px;
  transition: background-color 0.5s;
  gap: 10px;
  &:hover {
    background-color: #facd79;
  }
`;
