import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  place-items: center;
  gap: 30px;
`;

export const HeadingWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const TagDetails = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 10px;

  @media (max-width: 420px) {
    align-items: flex-start;
    flex-direction: column;
  }
`;
