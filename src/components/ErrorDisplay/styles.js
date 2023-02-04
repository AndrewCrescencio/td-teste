import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  place-content: center;
  padding: 16px;
  background-color: red;
  background-color: ${({ theme }) => theme.colors.orange};
`;

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;
  display: grid;
  place-content: center;
`;
