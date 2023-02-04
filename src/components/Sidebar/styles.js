import { media } from "@/styles/media-querie";
import styled from "styled-components";

export const Container = styled.aside`
  display: flex;
  justify-content: flex-end;
  width: 260px;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.7);
  height: 100vh;
  top: 0;
  right: -260px;
  z-index: 99;
  box-sizing: border-box !important;
  transition: all 0.4s ease-in-out;
  ${(props) =>
    props.open &&
    `
      right: 0 !important;
      width: 100vw;
  `};

  ${media.laptop`
    width: 260px;
    position: static;
    left: unset !important;
    right: unset !important;
  `}
`;

export const Wrapper = styled.div`
  width: 260px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const SidebarHeader = styled.header`
  padding: 50px 0;
  text-align: center;
  position: relative;
`;

export const SidebarButton = styled.div`
  position: absolute;
  top: 16px;
  left: -36px;
  transition: left 0.4s ease-in-out;
  background-color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 8px 0 0 8px;
  width: 36px;
  height: 36px;
  display: grid;
  place-content: center;

  ${media.laptop`
    display: none !important;
  `}
`;
