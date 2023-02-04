import styled from "styled-components";
import Link from "next/link";

export const Navbar = styled.nav`
  width: 260px;
`;

export const Menu = styled.ul`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const MenuItem = styled.li`
  width: 211px;
  height: 50px;
  margin-bottom: 11px;
  border-radius: 10px;
  padding-left: 13px;
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 600;
  font-size: 14px;
  background-color: ${({ theme }) => theme.colors.blue};
  transition: all 0.2s ease-in-out;
  position: relative;
  left: 37px;
  ${(props) =>
    props.active &&
    ` 
      border-radius: 10px 0px 0px 10px;
      left: 34px;
      width: 226px;
      background-color: ${props.theme.colors.background} !important;
      margin-bottom: 13px;
      color: black;
      svg {
        color: ${props.theme.colors.orange};
      }
    `};

  svg {
    font-size: 21px;
  }
`;

export const MenuLink = styled(Link)`
  color: inherit;
`;
