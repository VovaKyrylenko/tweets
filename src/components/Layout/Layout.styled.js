import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";

export const AppBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  color: #fff;
  padding: 10px 20px;
  width: 1280px;
`;

export const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const NavItem = styled.li`
  margin-right: 20px;
`;

export const NavLinkStyled = styled(NavLink)`
  color: #fff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
