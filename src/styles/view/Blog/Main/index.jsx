import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: grid;
  place-items: center;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1170px;
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
