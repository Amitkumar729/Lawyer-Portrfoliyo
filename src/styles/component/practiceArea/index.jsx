import styled from "styled-components";

export const PracticeWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;
export const ParaGraph = styled.p`
  width: 100%;
  max-width: 800px;
  text-align: justify;
`;
export const Practicess = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 50px 0px;
  gap: 50px;
  background-color: #180d33;
`;

export const PracticeElementWrap = styled.div`
  width: 100%;
  max-width: 250px;
  min-height: 200px;
  padding: 5px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 40px 0px 40px 0px;
  border-bottom: 5px solid orange;
  border-left: 5px solid orange;
  transition: border-radius 1s, border 0.5s;
  &:hover {
    border-bottom: none;
    border-left: none;
    border-top: 5px solid orange;
    border-right: 5px solid orange;
    border-radius: 0px 40px 0px 40px;
  }
`;
export const PracticeElementTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  font-weight: 600;
  color: orange;
`;
