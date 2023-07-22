import styled from "styled-components";

export const PracticeWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  /* border: 1px solid red; */
`;

export const Practicess = styled.div`
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 50px 0px;
  gap: 50px;
`;

export const PracticeElementWrap = styled.div`
  width: 100%;
  width: 150px;
  height: 70px;
  padding: 5px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  border: 1px solid #180d33;
`;
export const PracticeElementTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 17px;
  color: black;
`;
